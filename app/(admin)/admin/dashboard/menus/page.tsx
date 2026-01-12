"use client";

import React, { useEffect, useMemo, useState, useCallback } from "react";
import { FaTrashAlt, FaCheck, FaPlus } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import toast from "react-hot-toast";
import { FaPencil } from "react-icons/fa6";
import { menuService } from "@/app/features/auth/Service/menu.service";
import { type MenuDTO } from "@/app/features/auth/Dto/MenuDTO";

// ---------- TYPES ----------
type MenuItem = {
  id: number;
  title: string;
  parentId: number | null;
  description: string;
  url: string;
  icon?: string | null;
  sequence?: number | null;
  withoutView?: boolean;
};

function toInt(v: any): number | null {
  if (v === null || v === undefined || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function normalizeMenuList(res: any): MenuItem[] {
  const raw = Array.isArray(res) ? res : res?.responseObj ?? res?.data ?? [];
  if (!Array.isArray(raw)) return [];

  return raw.map((m: any) => ({
    id: Number(m.id ?? m.Id),
    title: String(m.title ?? m.Title ?? ""),
    parentId: toInt(m.parentId ?? m.ParentId),
    description: String(m.description ?? m.Description ?? ""),
    url: String(m.url ?? m.Url ?? ""),
    icon: (m.icon ?? m.Icon) ?? null,
    sequence: (m.sequence ?? m.Sequence) ?? null,
    withoutView: (m.withoutView ?? m.WithoutView) ?? false,
  }));
}

export default function Page() {
  const [menus, setMenus] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesCount, setEntriesCount] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // ---------- LOAD ----------
  const loadMenus = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await menuService.list();
      setMenus(normalizeMenuList(res));
    } catch (e: any) {
      toast.error(e?.message ?? "Failed to load menus");
      setMenus([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadMenus();
  }, [loadMenus]);

  // ---------- PARENT LOOKUP ----------
  const menusById = useMemo(() => {
    const map = new Map<number, MenuItem>();
    menus.forEach((m) => map.set(m.id, m));
    return map;
  }, [menus]);

  const parentTitle = useCallback(
    (pid: number | null) => {
      if (!pid) return "—";
      return menusById.get(pid)?.title ?? "—";
    },
    [menusById]
  );

  const parentOptions = useMemo(() => {
    return menus.map((m) => ({ id: m.id, title: m.title }));
  }, [menus]);

  // ---------- FILTER + PAGINATION ----------
  const filteredMenus = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return menus;
    return menus.filter((m) => m.title.toLowerCase().includes(q));
  }, [menus, searchTerm]);

  const totalPages = Math.max(1, Math.ceil(filteredMenus.length / entriesCount));

  useEffect(() => {
    // if delete happens & current page becomes invalid
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * entriesCount;
    return filteredMenus.slice(start, start + entriesCount);
  }, [filteredMenus, currentPage, entriesCount]);

  // ---------- CHECKBOX ----------
  const handleSelectAll = (checked: boolean) => {
    if (checked) setSelectedIds(paginatedData.map((i) => i.id));
    else setSelectedIds([]);
  };

  const handleSelectRow = (id: number, checked: boolean) => {
    setSelectedIds((prev) => {
      if (checked) return prev.includes(id) ? prev : [...prev, id];
      return prev.filter((x) => x !== id);
    });
  };

  const CustomCheckbox = ({
    checked,
    onChange,
  }: {
    checked: boolean;
    onChange: (v: boolean) => void;
  }) => (
    <label className="flex items-center justify-center cursor-pointer select-none">
      <input
        type="checkbox"
        className="peer hidden"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center transition peer-checked:bg-primary peer-checked:border-primary">
        {checked && <FaCheck className="text-white text-[9px] font-light" />}
      </div>
    </label>
  );

  // ---------- DELETE MODAL ----------
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = deleteModalOpen ? "hidden" : "";
  }, [deleteModalOpen]);

  const handleDelete = async () => {
    if (!selectedId) return;
    try {
      const r = await menuService.remove(selectedId);
      if (r?.isSuccess === false) {
        toast.error(r?.message ?? "Delete failed");
        return;
      }
      toast.success("Menu deleted successfully!");
      setDeleteModalOpen(false);
      setSelectedId(null);
      await loadMenus();
    } catch (e: any) {
      toast.error(e?.message ?? "Failed to delete menu");
    }
  };

  // ---------- CREATE MODAL ----------
  const [openCreateMenuModal, setOpenCreateMenuModal] = useState(false);

  const [createForm, setCreateForm] = useState<MenuDTO>({
    title: "",
    url: "",
    parentId: null,
    icon: null,
    sequence: null,
    description: "",
    withoutView: false,
  });

  useEffect(() => {
    document.body.style.overflow = openCreateMenuModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openCreateMenuModal]);

  const submitCreate = async () => {
    try {
      if (!createForm.title.trim() || !createForm.url.trim()) {
        toast.error("Title and URL are required");
        return;
      }

      const r = await menuService.create(createForm);
      if (r?.isSuccess === false) {
        toast.error(r?.message ?? "Create failed");
        return;
      }

      toast.success("Menu added!");
      setOpenCreateMenuModal(false);
      setCreateForm({
        title: "",
        url: "",
        parentId: null,
        icon: null,
        sequence: null,
        description: "",
        withoutView: false,
      });
      await loadMenus();
    } catch (e: any) {
      toast.error(e?.message ?? "Failed to create menu");
    }
  };

  // ---------- EDIT MODAL ----------
  const [openEditMenuModal, setOpenEditMenuModal] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<MenuDTO | null>(null);

  useEffect(() => {
    document.body.style.overflow = openEditMenuModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openEditMenuModal]);

  const openEdit = (menu: MenuItem) => {
    setEditId(menu.id);
    setEditForm({
      id: String(menu.id),
      title: menu.title,
      url: menu.url,
      parentId: menu.parentId ? String(menu.parentId) : null,
      icon: menu.icon ?? null,
      sequence: menu.sequence ?? null,
      description: menu.description,
      withoutView: menu.withoutView ?? false,
    });
    setOpenEditMenuModal(true);
  };

  const submitUpdate = async () => {
    if (!editForm || !editId) return;

    try {
      if (!editForm.title.trim() || !editForm.url.trim()) {
        toast.error("Title and URL are required");
        return;
      }

      const r = await menuService.update(editForm);
      if (r?.isSuccess === false) {
        toast.error(r?.message ?? "Update failed");
        return;
      }

      toast.success("Menu updated!");
      setOpenEditMenuModal(false);
      setEditId(null);
      setEditForm(null);
      await loadMenus();
    } catch (e: any) {
      toast.error(e?.message ?? "Failed to update menu");
    }
  };

  return (
    <section>
      <div className="container_wrap mt-10 md:mt-0">
        <div className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
          <h2>Menus</h2>
        </div>

        <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6">
          {/* CREATE BUTTON */}
          <div className="flex justify-end">
            <button
              onClick={() => setOpenCreateMenuModal(true)}
              type="button"
              className="flex items-center gap-1 py-2 px-4 bg-primary hover:bg-dark-primary text-white rounded text-[13px] cursor-pointer"
            >
              <FaPlus /> Create Menu
            </button>
          </div>

          {/* FILTERS */}
          <div className="flex flex-col md:flex-row justify-between items-center my-6 gap-4">
            <div className="text-[14px] text-gray-500">
              Show
              <select
                value={entriesCount}
                onChange={(e) => {
                  setEntriesCount(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="mx-2 border border-gray-200 rounded px-2 py-1 outline-none focus:border-primary cursor-pointer bg-white"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              entries
            </div>

            <div className="flex items-center text-[14px] text-gray-500">
              Search:
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search by title..."
                className="ml-2 border border-gray-200 rounded px-3 py-1.5 outline-none focus:border-primary w-full"
              />
            </div>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto rounded">
            <table className="w-full min-w-[900px] border-collapse text-[14px] text-gray-800">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-r border border-gray-200 p-4 w-12 text-center">
                    <CustomCheckbox
                      checked={
                        paginatedData.length > 0 &&
                        selectedIds.length === paginatedData.length
                      }
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th className="border border-gray-200 p-4 text-center">SI</th>
                  <th className="border border-gray-200 p-4 text-center">Title</th>
                  <th className="border border-gray-200 p-4 text-center">
                    Parent Menu
                  </th>
                  <th className="border border-gray-200 p-4 text-center">
                    Description
                  </th>
                  <th className="border border-gray-200 p-4 text-center">URL</th>
                  <th className="border border-gray-200 p-4 text-center">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {!isLoading ? (
                  paginatedData.map((menu, idx) => (
                    <tr key={menu.id}>
                      <td className="border border-gray-200 p-4 text-center">
                        <CustomCheckbox
                          checked={selectedIds.includes(menu.id)}
                          onChange={(checked) =>
                            handleSelectRow(menu.id, checked)
                          }
                        />
                      </td>

                      <td className="border border-gray-200 p-4 text-center">
                        {(currentPage - 1) * entriesCount + idx + 1}
                      </td>

                      <td className="border border-gray-200 p-4 text-center">
                        {menu.title}
                      </td>

                      <td className="border border-gray-200 p-4 text-center">
                        {parentTitle(menu.parentId)}
                      </td>

                      <td className="border border-gray-200 p-4 text-center">
                        {menu.description}
                      </td>

                      <td className="border border-gray-200 p-4 text-center">
                        {menu.url}
                      </td>

                      <td className="border border-gray-200 p-4 text-center">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => openEdit(menu)}
                            type="button"
                            className="bg-blue-500 p-2 rounded text-white cursor-pointer"
                          >
                            <FaPencil size={12} />
                          </button>

                          <button
                            onClick={() => {
                              setSelectedId(menu.id);
                              setDeleteModalOpen(true);
                            }}
                            className="bg-red-500 p-2 rounded text-white cursor-pointer"
                          >
                            <FaTrashAlt size={12} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="p-10 text-center text-gray-400">
                      Loading data from server...
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[14px] text-gray-500">
            <p>
              Showing {paginatedData.length} of {filteredMenus.length} entries
            </p>

            <div className="flex rounded overflow-hidden text-[12px]">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="px-3 py-2 border border-gray-200 bg-white cursor-pointer disabled:opacity-50"
              >
                Previous
              </button>

              <button className="px-4 py-2 border border-gray-200 bg-primary text-white cursor-pointer">
                {currentPage}
              </button>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className="px-3 py-2 border border-gray-200 bg-white cursor-pointer disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* -------- CREATE MODAL -------- */}
      {openCreateMenuModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-modal-opacity"
            onClick={() => setOpenCreateMenuModal(false)}
          />

          <div
            className="relative bg-white rounded shadow w-2xl mx-4 px-6 py-4 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
              onClick={() => setOpenCreateMenuModal(false)}
            >
              <RxCross1 size={18} />
            </button>

            <h3 className="text-[16px] text-gray-800 font-semibold mb-4">
              Create New Menu
            </h3>

            <div className="py-4 border-b border-t border-gray-200">
              <div className="input_box text-[14px] block md:flex items-center gap-2">
                <div className="w-full">
                  <label className="block mb-1 text-[14px] font-medium">
                    Title<span className="text-red-400">*</span>
                  </label>
                  <input
                    value={createForm.title}
                    onChange={(e) =>
                      setCreateForm((s) => ({ ...s, title: e.target.value }))
                    }
                    type="text"
                    placeholder="Enter Title"
                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="w-full mt-4 md:mt-0">
                  <label className="block mb-1 text-[14px] font-medium">
                    URL<span className="text-red-400">*</span>
                  </label>
                  <input
                    value={createForm.url}
                    onChange={(e) =>
                      setCreateForm((s) => ({ ...s, url: e.target.value }))
                    }
                    type="text"
                    placeholder="Enter Url"
                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="input_box text-[14px] block md:flex items-center gap-2 mt-4">
                <div className="w-full">
                  <label className="block mb-1 font-medium">Parent Menu</label>
                  <select
                    value={createForm.parentId ?? ""}
                    onChange={(e) =>
                      setCreateForm((s) => ({
                        ...s,
                        parentId: e.target.value ? String(e.target.value) : null,
                      }))
                    }
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                  >
                    <option value="">-- Root Menu --</option>
                    {parentOptions.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="w-full mt-4 md:mt-0">
                  <label className="block mb-1 text-[14px] font-medium">
                    Icon
                  </label>
                  <input
                    value={createForm.icon ?? ""}
                    onChange={(e) =>
                      setCreateForm((s) => ({ ...s, icon: e.target.value }))
                    }
                    type="text"
                    placeholder="Copy and Paste (i) Tag Here"
                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="input_box text-[14px] block md:flex items-center gap-2 mt-4">
                <div className="w-full">
                  <label className="block mb-1 text-[14px] font-medium">
                    Sequence
                  </label>
                  <input
                    value={createForm.sequence ?? ""}
                    onChange={(e) =>
                      setCreateForm((s) => ({
                        ...s,
                        sequence: e.target.value ? Number(e.target.value) : null,
                      }))
                    }
                    type="number"
                    placeholder="Sequence"
                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                  />
                </div>
                <div className="w-full" />
              </div>

              <div className="input_box text-[14px] block md:flex items-center gap-2 mt-4">
                <div className="w-full">
                  <label className="block mb-1 text-[14px] font-medium">
                    Description<span className="text-red-400">*</span>
                  </label>
                  <textarea
                    value={createForm.description}
                    onChange={(e) =>
                      setCreateForm((s) => ({
                        ...s,
                        description: e.target.value,
                      }))
                    }
                    rows={3}
                    placeholder="Enter Description"
                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-4 text-[14px]">
              <button
                onClick={() => setOpenCreateMenuModal(false)}
                className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition"
              >
                Cancel
              </button>

              <button
                onClick={submitCreate}
                className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition"
              >
                Add Menu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* -------- EDIT MODAL -------- */}
      {openEditMenuModal && editForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-modal-opacity"
            onClick={() => setOpenEditMenuModal(false)}
          />

          <div
            className="relative bg-white rounded shadow w-2xl mx-4 px-6 py-4 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
              onClick={() => setOpenEditMenuModal(false)}
            >
              <RxCross1 size={18} />
            </button>

            <h3 className="text-[16px] text-gray-800 font-semibold mb-4">
              Edit Menu
            </h3>

            <div className="py-4 border-b border-t border-gray-200">
              <div className="input_box text-[14px] block md:flex items-center gap-2">
                <div className="w-full">
                  <label className="block mb-1 text-[14px] font-medium">
                    Title<span className="text-red-400">*</span>
                  </label>
                  <input
                    value={editForm.title}
                    onChange={(e) =>
                      setEditForm((s) => (s ? { ...s, title: e.target.value } : s))
                    }
                    type="text"
                    placeholder="Enter Title"
                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="w-full mt-4 md:mt-0">
                  <label className="block mb-1 text-[14px] font-medium">
                    URL<span className="text-red-400">*</span>
                  </label>
                  <input
                    value={editForm.url}
                    onChange={(e) =>
                      setEditForm((s) => (s ? { ...s, url: e.target.value } : s))
                    }
                    type="text"
                    placeholder="Enter Url"
                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="input_box text-[14px] block md:flex items-center gap-2 mt-4">
                <div className="w-full">
                  <label className="block mb-1 font-medium">Parent Menu</label>
                  <select
                    value={editForm.parentId ?? ""}
                    onChange={(e) =>
                      setEditForm((s) =>
                        s
                          ? {
                              ...s,
                              parentId: e.target.value ? String(e.target.value) : null,
                            }
                          : s
                      )
                    }
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                  >
                    <option value="">-- Root Menu --</option>
                    {parentOptions.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="w-full mt-4 md:mt-0">
                  <label className="block mb-1 text-[14px] font-medium">
                    Icon
                  </label>
                  <input
                    value={editForm.icon ?? ""}
                    onChange={(e) =>
                      setEditForm((s) => (s ? { ...s, icon: e.target.value } : s))
                    }
                    type="text"
                    placeholder="Copy and Paste (i) Tag Here"
                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="input_box text-[14px] block md:flex items-center gap-2 mt-4">
                <div className="w-full">
                  <label className="block mb-1 text-[14px] font-medium">
                    Sequence
                  </label>
                  <input
                    value={editForm.sequence ?? ""}
                    onChange={(e) =>
                      setEditForm((s) =>
                        s
                          ? {
                              ...s,
                              sequence: e.target.value ? Number(e.target.value) : null,
                            }
                          : s
                      )
                    }
                    type="number"
                    placeholder="Sequence"
                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                  />
                </div>
                <div className="w-full" />
              </div>

              <div className="input_box text-[14px] block md:flex items-center gap-2 mt-4">
                <div className="w-full">
                  <label className="block mb-1 text-[14px] font-medium">
                    Description<span className="text-red-400">*</span>
                  </label>
                  <textarea
                    value={editForm.description}
                    onChange={(e) =>
                      setEditForm((s) =>
                        s ? { ...s, description: e.target.value } : s
                      )
                    }
                    rows={3}
                    placeholder="Enter Description"
                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-4 text-[14px]">
              <button
                onClick={() => setOpenEditMenuModal(false)}
                className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition"
              >
                Cancel
              </button>

              <button
                onClick={submitUpdate}
                className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition"
              >
                Update Menu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* -------- DELETE MODAL -------- */}
      {deleteModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-custom-opacity"
          onClick={() => setDeleteModalOpen(false)}
        >
          <div
            className="bg-white rounded shadow w-lg mx-4 px-6 py-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
              onClick={() => setDeleteModalOpen(false)}
            >
              <RxCross1 size={18} />
            </button>

            <h3 className="text-[16px] text-gray-800 font-semibold mb-4">
              Confirm Delete?
            </h3>

            <div className="body_text py-4 border-b border-t border-gray-200">
              <p className="text-gray-500 text-[14px]">
                You are going to delete this Menu. All contents related to this menu will be lost.
                Do you want to delete it?
              </p>
            </div>

            <div className="flex justify-end gap-3 mt-4 text-[14px]">
              <button
                onClick={() => setDeleteModalOpen(false)}
                className="px-4 py-2 rounded cursor-pointer bg-primary text-white hover:bg-dark-primary transition"
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                className="px-4 py-2 rounded cursor-pointer bg-red-500 text-white hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

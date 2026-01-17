import { API } from "@/constants/api";
import { apiFetch } from "@/services/apiClient";
import {
  CategoryDTO,
  CreateCategoryDTO,
  UpdateCategoryDTO
} from "../Dto/Category.dto";

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  traceId: string;
}

export const categoryService = {
  /* ===== LIST ===== */
  list: async (): Promise<CategoryDTO[]> => {
    const res = await apiFetch<ApiResponse<CategoryDTO[]>>(
      API.categories.list,
      { method: "GET" }
    );
    return res.data;
  },

  /* ===== CREATE ===== */
  create: async (payload: CreateCategoryDTO): Promise<void> => {
    const fd = new FormData();

    fd.append("Name", payload.name);
    fd.append("Slug", payload.slug);
    fd.append("IsHighlight", String(payload.isHighlight));
    fd.append("Serial", String(payload.serial));
    fd.append("IsActive", String(payload.isActive));
    fd.append(
      "ParentCategoryId",
      payload.parentCategoryId ?? "00000000-0000-0000-0000-000000000000"
    );

    payload.metaKeywords.forEach((k) =>
      fd.append("MetaKeywords", k)
    );

    payload.icon.forEach((file) =>
      fd.append("Icon", file)
    );

    await apiFetch(API.categories.create, {
      method: "POST",
      body: fd,
    });
  },

  /* ===== UPDATE ===== */
  update: async (payload: UpdateCategoryDTO): Promise<void> => {
    const fd = new FormData();

    fd.append("Name", payload.name);
    fd.append("Slug", payload.slug);
    fd.append("IsHighlight", String(payload.isHighlight));
    fd.append("Serial", String(payload.serial));
    fd.append("IsActive", String(payload.isActive));
    fd.append(
      "ParentCategoryId",
      payload.parentCategoryId ?? "00000000-0000-0000-0000-000000000000"
    );

    payload.metaKeywords.forEach((k) =>
      fd.append("MetaKeywords", k)
    );

    payload.icon.forEach((file) =>
      fd.append("Icon", file)
    );

    await apiFetch(API.categories.update(payload.id), {
      method: "PUT",
      body: fd,
    });
  },

  /* ===== DELETE ===== */
  remove: async (id: string): Promise<void> => {
    await apiFetch(API.categories.delete(id), {
      method: "DELETE",
    });
  },

  /* ===== TOGGLE STATUS ===== */
  toggleStatus: async (id: string): Promise<void> => {
    await apiFetch(API.categories.toggleStatus(id), {
      method: "PATCH",
    });
  },
};

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CategoryDTO, CreateCategoryDTO, UpdateCategoryDTO } from "../Dto/Category.dto";
import { categoryService } from "../Service/category.service";

export const useCategories = () => {
  const [categories, setCategories] = useState<CategoryDTO[]>([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    try {
      setLoading(true);
      const data = await categoryService.list();
      setCategories(data);
    } catch {
      toast.error("Failed to load categories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const create = async (dto: CreateCategoryDTO) => {
    await categoryService.create(dto);
    toast.success("Category created");
    load();
  };

  const update = async (dto: UpdateCategoryDTO) => {
    await categoryService.update(dto);
    toast.success("Category updated");
    load();
  };

  const remove = async (id: string) => {
    await categoryService.remove(id);
    toast.success("Category deleted");
    setCategories(prev => prev.filter(c => c.id !== id));
  };

  const toggleStatus = async (id: string) => {
    await categoryService.toggleStatus(id);
    setCategories(prev =>
      prev.map(c =>
        c.id === id ? { ...c, isActive: !c.isActive } : c
      )
    );
  };

  return {
    categories,
    loading,
    create,
    update,
    remove,
    toggleStatus,
  };
};

import { API } from "@/constants/api";
import { apiFetch } from "@/services/apiClient";
import { BrandDTO, CreateBrandDTO, UpdateBrandDTO } from "../Dto/Brand.dto";

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  traceId: string;
}

export const brandsService = {
  /* ========== LIST ========== */
  list: async (): Promise<BrandDTO[]> => {
  const res = await apiFetch<ApiResponse<BrandDTO[]>>(
    API.brands.list,
    { method: "GET" }
  );

  return res.data; 
},


  create: async (payload: CreateBrandDTO): Promise<void> => {
  const fd = new FormData();
  fd.append("name", payload.name);
  fd.append("logo", payload.logo);

  await apiFetch(API.brands.create, {
    method: "POST",
    body: fd,
  });
},

  /* ========== UPDATE ========== */
  update: async (payload: UpdateBrandDTO): Promise<void> => {
    const fd = new FormData();
    fd.append("name", payload.name);
    fd.append("slug", payload.slug);
    if (payload.logo) fd.append("logo", payload.logo);

    await apiFetch(API.brands.update(payload.id), {
      method: "PUT",
      body: fd,
    });
  },

  /* ========== DELETE ========== */
  remove: async (id: string): Promise<void> => {
    await apiFetch(API.brands.delete(id), { method: "DELETE" });
  },

  /* ========== STATUS TOGGLE ========== */
  toggleStatus: async (id: string): Promise<void> => {
    await apiFetch(API.brands.status(id), {
      method: "PATCH",
    });
  },
};

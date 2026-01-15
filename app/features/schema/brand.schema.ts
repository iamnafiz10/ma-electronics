import { z } from "zod";

export const createBrandSchema = z.object({
  name: z.string().min(2, "Brand name is required"),
  logo: z
    .any()
    .refine(file => file instanceof File, "Logo is required"),
});

export const updateBrandSchema = z.object({
  id: z.string(),
  name: z.string().min(2),
  slug: z.string().min(2),
  logo: z.any().optional(),
});

export interface BrandDTO {
  id: string;
  name: string;
  slug: string;
  logoUrl: string;
  isActive: boolean;
}

export interface CreateBrandDTO {
  name: string;
  logo: File;
  slug: string;
}

export interface UpdateBrandDTO {
  id: string;
  name: string;
  slug: string;
  logo?: File;
}

export interface CategoryDTO {
  id: string;
  name: string;
  iconUrl: string;
  isHighlight: boolean;
  isActive: boolean;
}

export interface CreateCategoryDTO {
  name: string;
  slug: string;
  icon: File[];
  isHighlight: boolean;
  serial: number;
  isActive: boolean;
  parentCategoryId?: string;
  metaKeywords: string[];
}

export interface UpdateCategoryDTO extends CreateCategoryDTO {
  id: string;
}
// features/auth/Dto/MenuDTO.ts
export type MenuDTO = {
  id?: number;
  title: string;
  url: string;
  parentId: number | null;
  icon?: string | null;
  sequence?: number | null;
  description: string;
  withoutView?: boolean;
};

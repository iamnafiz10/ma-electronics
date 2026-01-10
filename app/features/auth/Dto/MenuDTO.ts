export type MenuDTO = {
   id?: string;               
   title: string;
   parentId?: string | null;  
   description: string;
   url: string;
   icon?: string | null;
   sequence?: number | null;
   withoutView?: boolean;
};
export type MenuNode = {
  id: number;
  title: string;
  url: string;
  icon?: string | null;
  withoutView?: boolean;
  children?: MenuNode[];
};
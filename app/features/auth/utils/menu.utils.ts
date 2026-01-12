export type MenuItem = {
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

export function pickArray(res: any): any[] {
  const arr =
    res?.responseObj ??
    res?.data?.responseObj ??
    res?.responseObj?.responseObj ??
    res?.data ??
    res;

  return Array.isArray(arr) ? arr : [];
}

export function normalizeMenus(res: any): MenuItem[] {
  const raw = pickArray(res);

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

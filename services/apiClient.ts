import { API } from "@/constants/api";

export type ApiErrorShape = {
  message?: string;
  errors?: Record<string, string[]>;
  statusCode?: number;
  traceId?: string;
};

export class ApiError extends Error {
  status: number;
  data?: ApiErrorShape | any;

  constructor(status: number, message: string, data?: any) {
    super(message);
    this.status = status;
    this.data = data;
  }
}

async function readJsonSafe(res: Response) {
  const text = await res.text();
  if (!text) return null;
  try { return JSON.parse(text); } catch { return text; }
}

export async function apiFetch<T>(
  url: string,
  init?: RequestInit
): Promise<T> {
  const res = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    }, 
    credentials: "same-origin",
  });

  if (!res.ok) {
    const data = await readJsonSafe(res);
    const msg = (data && (data.message || data.title)) || `Request failed (${res.status})`;
    throw new ApiError(res.status, msg, data);
  }

  const data = await readJsonSafe(res);
  return data as T;
}

export async function proxyGet<T>(path: string) {
  return apiFetch<T>(API.proxy(path), { method: "GET" });
}
export async function proxyPost<T>(path: string, body?: any) {
  return apiFetch<T>(API.proxy(path), { method: "POST", body: JSON.stringify(body ?? {}) });
}
export async function proxyPut<T>(path: string, body?: any) {
  return apiFetch<T>(API.proxy(path), { method: "PUT", body: JSON.stringify(body ?? {}) });
}
export async function proxyDelete<T>(path: string) {
  return apiFetch<T>(API.proxy(path), { method: "DELETE" });
}

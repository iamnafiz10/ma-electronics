// services/apiClient.ts

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export async function apiFetch<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  // ✅ Get token from localStorage (client-side only)
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("access_token")
      : null;

  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });

  // 🔴 Handle error responses
  if (!res.ok) {
    let message = "Request failed";

    try {
      const data = await res.json();
      message = data?.message || message;
    } catch {
      // non-JSON response
    }

    throw new ApiError(message, res.status);
  }

  if (res.status === 204) {
    return {} as T;
  }

  // 🟢 Normal JSON response
  return res.json();
}

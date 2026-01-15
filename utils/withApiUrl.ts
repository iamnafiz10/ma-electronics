export const withApiUrl = (path?: string) =>
  path ? `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/${path}` : "";

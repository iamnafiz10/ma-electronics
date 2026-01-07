import { proxyGet, proxyPost } from "@/src/services/apiClient";

export const shopService = {
  getProducts: () => proxyGet("products"),
  createOrder: (payload: any) => proxyPost("orders", payload),
};




// user for component
// const products = await shopService.getProducts();

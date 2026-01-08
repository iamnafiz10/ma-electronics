import { API } from "@/constants/api";
import { proxyGet, proxyPost } from "@/services/apiClient";

export const shopService = {
  getProducts: () => proxyGet("products"),
  createOrder: (payload: any) => proxyPost("orders", payload),
};




// user for component
// const products = await shopService.getProducts();

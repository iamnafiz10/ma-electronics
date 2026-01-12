
import { API } from "@/constants/api";
import { proxyGet, proxyPost } from "@/services/apiClient";

export class UserService {
  static getProfile() {
    return proxyGet(API.backend.me);
  }

  static getUsers() {
    return proxyGet(API.backend.me);
  }
}

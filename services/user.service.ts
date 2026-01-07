import { HttpService } from './http.service';
import { API_URL } from '@/constants/url.constants';

export class UserService {
  static getProfile() {
    return HttpService.get(API_URL.USER.PROFILE);
  }

  static getUsers() {
    return HttpService.get(API_URL.USER.LIST);
  }
}

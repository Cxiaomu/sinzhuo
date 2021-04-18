import {
  get,
  post,
  del
} from "@/utils/httpService";

// 登录 获取用户信息
export function getUserInfo(params) {
  return get("/users/login", params);
}

// 注册
export function registerUser(params) {
  return post("/users/register", params);
}

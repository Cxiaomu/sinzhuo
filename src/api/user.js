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

// 获取个人信息 根据id
export function getUser(params) {
  return get("/users/uerInfo", params);
}

// 修改密码
export function changePwd(params) {
  return post("/users/updatePwd", params);
}

// 修改个人信息
export function changeInfo(params) {
  return post("/users/updateInfo", params);
}

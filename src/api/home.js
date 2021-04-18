import {
  get,
  post,
  del
} from "@/utils/httpService";

// 获取导航栏菜单
export function getMenu() {
  return get("/menuList");
}

// 获取个人中心侧边栏
export async function getNav() {
  return get("/navList");
}

// 获取项目进度列表
export async function getProjectPhase() {
  return get("/projectPhase");
}

// 获取项目领域列表
export async function getProjectField() {
  return get("/projectField");
}

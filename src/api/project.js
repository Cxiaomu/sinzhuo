import {
  get,
  post,
  del
} from "@/utils/httpService";

// 根据筛选条件获取项目列表
export function getProjectList(params) {
  return get("/project/projectList", params);
}

// 获取项目详情
export function getProjectDetail(params) {
  return get("/project/projectDetail", params);
}

// 获取我的项目列表
export function getMyProject(params) {
  return get("/project/projectOwn", params);
}

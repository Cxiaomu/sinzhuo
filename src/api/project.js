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

// 新建项目
export function createProject(params) {
  return post("/project/createProject", params);
}

// 编辑项目
export function updateProject(params) {
  return post("/project/updateProject", params);
}

// 删除项目
export function delProject(params) {
  return get("/project/delProject", params);
}
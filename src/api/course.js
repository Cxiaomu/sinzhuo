import {
  get,
  post,
  del
} from "@/utils/httpService";

// 根据筛选条件获取岗位列表
export function getCourseList(params) {
  return get("/course/filter", params);
}

// 获取课程总条数
export function getCourseTotal() {
  return get("/course/courseTotal");
}

// 根据关键字获取课程列表
export function getCourseListByKey(params) {
  return get("/course/keywords", params);
}

// 获取课程详情
export function getCourseDetail(params) {
  return get("/course/courseDetail", params);
}

// 获取我的课程列表
export function getMyCourse(params) {
  return get("/course/courseOwn", params);
}

// 新建课程
export function createCourse(params) {
  return post("/course/createCourse", params);
}

// 编辑课程
export function updateCourse(params) {
  return post("/course/updateCourse", params);
}

// 删除课程
export function delCourse(params) {
  return get("/course/delCourse", params);
}

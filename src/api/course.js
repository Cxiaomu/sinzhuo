import {
  get,
  post,
  del
} from "@/utils/httpService";

// 根据筛选条件获取课程列表
export function getCourseList(params) {
  return get("/course/courseList", params);
}

// 获取课程详情
export function getCourseDetail(params) {
  return get("/course/courseDetail", params);
}

// 获取我的课程列表
export function getMyCourse(params) {
  return get("/course/courseOwn", params);
}

import {
  get,
  post,
  del
} from "@/utils/httpService";

// 根据筛选条件获取岗位列表
export function getPostList(params) {
  return get("/post/postList", params);
}

// 获取岗位详情
export function getPostDetail(params) {
  return get("/post/postDetail", params);
}

// 获取我的岗位列表
export function getMyPost(params) {
  return get("/post/postOwn", params);
}

// 新建岗位
export function createPost(params) {
  return post("/post/createPost", params);
}

// 编辑岗位
export function updatePost(params) {
  return post("/post/updatePost", params);
}

// 删除岗位
export function delPost(params) {
  return get("/post/delPost", params);
}
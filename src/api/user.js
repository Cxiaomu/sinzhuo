import {get, post, del}  from "@/utils/httpService";

export function getUserInfo(params) {
  return get("/users/login", params);
}

export function registerUser(params) {
  return post("/users/register", params);
}
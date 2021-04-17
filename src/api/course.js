import {get, post, del}  from "@/utils/httpService";

export function getUserInfo(data) {
  return get("/users/login", data);
}
import {get, post, del}  from "@/utils/httpService";

export function getProjectList(params) {
  return get("/project/projectList", params);
}
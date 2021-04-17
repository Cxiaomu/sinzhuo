import {get, post, del}  from "@/utils/httpService";

export  function getMenu() {
  return get("/menuList");
}

export async function getNav() {
  return get("/navList");
}

export async function getProjectPhase() {
  return get("/projectPhase");
}

export async function getProjectField() {
  return get("/projectField");
}



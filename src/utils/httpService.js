// axios 请求方法封装
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.timeout = 3000;

export const get = function (url, params) {
  return axios.get(url, {
      params: params,
      headers: {
        'content-type': 'application/json;charset=utf-8"'
      },
    })
    .then(res => res.data)
    .catch((err) => {
      console.log(err)
      throw err;
    })
}

export const post = function (url, params) {
  return axios.post(url, params)
    .then(res => res.data)
    .catch((err) => {
      console.log(err)
      throw err;
    })
}

export const postImg = function (url, params) {
  return axios.post(url, params, {
      headers: {
        "content-type": "multipart/form-data"
      }
    }).then((res) => res.data)
    .catch((err) => {
      console.log(err)
      throw err;
    })
}

export const del = function (url, params) {
  return axios.delete(url, {
      params: params
    })
    .then(res => res.data)
    .catch((err) => {
      console.log(err)
      throw err;
    })
}

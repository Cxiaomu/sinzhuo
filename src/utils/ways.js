// 验证手机号
export const RegTel = function (tel) {
  let patt = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
  return patt.test(tel);
}

// 时间格式化
export const formateDate = (date, fmt = "YYYY-MM-DD") => {
  function padLeftZero(n) {
    n = n.toString();
    return n[1] ? n : "0" + n;
  }
  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  const o = {
    "M+": date.getMonth() + 1,
    "D+": date.getDate(),
    "H+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + "";
      // 根据模板来替换
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }
  return fmt;
};

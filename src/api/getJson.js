export function getMenu(that) {
  return that.$axios.get('/api/menuList').then((res) => {
    if (res.data && res.data.errno === 0) {
      return res.data
    }
  }).catch(() => {
    that.$message({
      message: "请求导航栏数据出错，请稍后再试！",
      type: "error"
    })
    return -1;
  })
}

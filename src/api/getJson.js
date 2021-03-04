export async function getMenu(that) {
  let data;
  await that.$axios.get('/api/menuList').then((res) => {
    if (res.data && res.data.errno === 0) {
      data = res.data.data
    }
  }).catch(() => {
    that.$message({
      message: "请求导航栏数据出错，请稍后再试！",
      type: "error"
    })
    data = -1;
  })
  return data
}

export async function getNav(that) {
  let data;
  await that.$axios.get('/api/navList').then((res) => {
    if (res.data && res.data.errno === 0) {
      data = res.data.data
    }
  }).catch(() => {
    that.$message({
      message: "请求导航栏数据出错，请稍后再试！",
      type: "error"
    })
    data = -1;
  })
  return data
}

export async function getProjectPhase(that) {
  let data;
  await that.$axios.get('/api/projectPhase').then((res) => {
    if (res.data && res.data.errno === 0) {
      data = res.data.data
    }
  }).catch(() => {
    that.$message({
      message: "请求项目阶段出错，请稍后再试！",
      type: "error"
    })
    data = -1;
  })
  return data;
}

export async function getProjectField(that) {
  let data;
  await that.$axios.get('/api/projectField').then((res) => {
    if (res.data && res.data.errno === 0) {
      data = res.data.data
    }
  }).catch(() => {
    that.$message({
      message: "请求项目所属领域出错，请稍后再试！",
      type: "error"
    })
    data = -1;
  })
  return data;
}



import request from "../index";

const user = {
  // 微信登录
  wxUserLogin(params) {
    return request.post("/user/loginWithWxMa", params);
  },
  updateUserWxMa(params) {
    return request.post("/user/updateUserWxMa", params);
  },
  updateGrade(params) {
    return request.post("/user/updateGrade", params)
  },
  addZan(params) {
    return request.get("/user/zan", params)
  },
  addCollect(params) {
    return request.get("/user/collect", params)
  },
  changeIdentity(params) {
    return request.post("/user/updateUserType", params)
  },
  listCollect(params) {
    return request.get("/user/listCollect", params)
  },
  uploadFormId (params) {
    return request.post("/user/uploadFormId", params)
  }
};

export default user;

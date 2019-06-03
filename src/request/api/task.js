import request from "../index";

const task = {
  // 微信登录
  getTodaySignInRecord() {
    return request.get("/task/getTodaySignInRecord");
  },
  getUserAccountMsg(params) {
    return request.get("/task/getUserAccountMsg", params);
  },
  invitedRecord(params) {
    return request.get("/task/invitedRecord", params)
  },
  rankingList(params) {
    return request.get("/task/rankingList", params);
  },
  todaySignIn() {
    return request.get("/task/todaySignIn");
  },
  getShareInfoDetails(params) {
    return request.get('/task/getShareInfoDetails', params)
  },
  getKfInfo(params) {
    return request.get('/task/getKfInfo', params)
  },
  getShareInfo(params) {
    return request.get('/task/getShareInfo', params)
  }
};

export default task;

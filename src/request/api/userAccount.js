import request from "../index";

const userAccount = {
  // 我的账户信息
  accountInfo(params) {
    return request.get("/userAccount/accountInfo", params);
  },
  // 收支详情
  getUserAccountIncomeList(params) {
    return request.get("/userAccount/getUserAccountIncomeList", params);
  },
  // 我的页面
  myInfo(params) {
    return request.get("/userAccount/myInfo", params);
  },
  // 首页提示
  homeRemind(params) {
    return request.get("/userAccount/remind", params);
  }
};

export default userAccount;

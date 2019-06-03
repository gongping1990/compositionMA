import request from "../index";

const banner = {
  listShow() {
    return request.get("/banner/listShow");
  }
};

export default banner;

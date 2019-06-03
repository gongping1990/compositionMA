import request from "../index";

const material = {
  subjectList() {
    return request.get("/material//subject/list");
  },
  catalogList(params) {
    return request.get('/material/catalog/list', params)
  },
  listMaterial(params) {
    return request.get('/material/listMaterial', params)
  },
  ownView(params) {
    return request.post('/material/ownView', params)
  },
  countTotal(params) {
    return request.get('/material/countTotal', params)
  }
};

export default material;

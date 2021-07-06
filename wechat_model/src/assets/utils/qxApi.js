import request from "./request";
import store from "store";
import webconfig from "../../web.config";

//url
const baseURL = webconfig.domain;
const qxApi = {
  GetWXConfig: () => request.post(`${baseURL}OAuth2/GetWXConfig`)
};

export default qxApi;

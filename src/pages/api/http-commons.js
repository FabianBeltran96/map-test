import axios from "axios";
import JwtService from "@/jwt-service";

const HTTP = {
  init() {
    axios.defaults.baseURL = process.env.VUE_APP_URL_API;
  },

  setHeader(val, file) {
    if (val) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${JwtService.getToken()}`;
      axios.defaults.headers["Content-Type"] = "application/json";
      // axios.defaults.headers["language"] = es
      axios.responseType = "application/json";
    } else {
      axios.defaults.headers.common["Authorization"] = `null`;
      axios.defaults.headers.common["Access-Control-Allow-Origin"] = `*`;
    }
    if (file) {
      axios.defaults.headers["Accept"] = "application/json";
      axios.defaults.headers["Content-Type"] = "multipart/form-data";
      axios.defaults.headers["language"] = es;
    }
  },
  setRouter() {
    axios.defaults.headers.common[
      "Authorization"
    ] = `token ${localStorage.getItem("TokenRoute")}`;
    axios.defaults.headers["Content-Type"] = "application/json";
    // axios.defaults.headers["language"] = es
    axios.responseType = "application/json";
  },
  setPostDownloadHeader() {
    axios.defaults.responseType = "blob";
    axios.defaults.headers.common[
      "Authorization"
    ] = `JWT ${JwtService.getToken()}`;
    axios.defaults.headers["company"] = JSON.parse(
      localStorage.getItem("userInfo")
    ).company_id.id;
    axios.defaults.headers["Content-Type"] = "application/json";
    axios.defaults.headers["language"] = es;
  },

  query(resource, params) {
    this.setHeader(true);
    return axios.get(resource, { params }).catch(() => {
      // throw new Error(`[RWV] ApiService ${error}`)
    });
  },
  query_(resource, params) {
    return axios.get(resource, { params }).catch(() => {
      // throw new Error(`[RWV] ApiService ${error}`)
    });
  },
  getArchive(resource, params) {
    this.setHeader(true);
    return axios({
      url: resource,
      params: params,
      method: "GET",
      responseType: "blob", // important
    }).catch(() => {
      // throw new Error(`[RWV] ApiService ${error}`)
    });
  },
  queryList(url, httpOptions) {
    return axios.get(url, httpOptions).catch(() => {
      // throw new Error(`[RWV] ApiService ${error}`)
    });
  },

  get(resource, slug) {
    this.setHeader(true);
    return axios.get(resource + (slug ? "/" + slug : "")).catch(() => {
      // throw new Error(`[RWV] ApiService ${error}`)
    });
  },

  getSimple(resource) {
    this.setHeader(true);
    return axios.get(resource);
  },

  downloadArchiveWithPost(resource, body) {
    this.setPostDownloadHeader();
    return axios.post(resource, body).catch(() => {
      // throw new Error(`[RWV] ApiService ${error}`)
    });
  },

  post(resource, params) {
    return axios.post(resource, params);
  },

  update(resource, slug, params) {
    return axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return axios.put(`${resource}`, params);
  },

  patch(resource, params) {
    this.setHeader(true);
    return axios.patch(`${resource}`, params);
  },

  delete(resource, params) {
    return axios.delete(resource, params);
  },
};

export default HTTP;

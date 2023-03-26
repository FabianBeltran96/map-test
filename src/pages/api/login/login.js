import axios from "axios";

export const loginURL = "https://new-srouter-qa.smartquick.com.co/api/login/";

export const fecthLogin = async (url) => {
  return axios(url).then((res) => res.json());
};

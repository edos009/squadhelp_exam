import axios from "axios";
import CONSTANTS from "../constants";
import history from "../browserHistory";

const instance = axios.create({
  baseURL: CONSTANTS.BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem(CONSTANTS.ACCESS_TOKEN);
    if (token) {
      config.headers = { ...config.headers, Authorization: token };
    }
    return config;
  },
  (err) => Promise.reject(err)
);

instance.interceptors.response.use(
  (response) => {
    if (response.data.token) {
      window.localStorage.setItem(CONSTANTS.ACCESS_TOKEN, response.data.token);
    }
    return response;
  },
  (err) => {
    if (
      err.response.status === 408 &&
      history.location.pathname !== "/sign-in" &&
      history.location.pathname !== "/sign-up" &&
      history.location.pathname !== "/"
    ) {
      history.replace("/sign-in");
    }
    return Promise.reject(err);
  }
);

export default instance;

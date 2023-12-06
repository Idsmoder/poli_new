/* eslint-disable no-unused-vars */
import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL:
    window.location.hostname === "http://poly1.gx.uz/"
      ? "https://map.gx.uz/api"
      : "https://map.gx.uz/api",
});

// Request interceptor for API calls
api.interceptors.request.use(
  async (config) => {
    const access_token = Cookies.get("access_token");
    config.headers = {
      Authorization: `Bearer ${access_token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for API calls

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (!error.response) {
      error["response"] = {
        data: {
          errors: [
            {
              message:
                "Проверьте подключение к Интернету или Сервер не отвечает",
            },
          ],
        },
      };
      return Promise.reject(error);
    }
    if (error.response.status === 401) {
      return Promise.reject(error);
    } else {
      return Promise.reject(error);
    }
  }
);

async function refreshToken(errorConfig) {
  return await api
    .post("api/login", {
      refresh_token: Cookies.get("refresh_token"),
    })
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
        return api.request(errorConfig);
      } else {
        return Promise.reject(response);
      }
    })
    .catch((err) => {
      if (err.response.status === 400) {
        window.location.href = "/#/unsigned/login";
      }
      return Promise.reject(err);
    });
}

export { api };

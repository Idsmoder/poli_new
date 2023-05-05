import Cookies from "js-cookie";
import { api } from "./api";

function clearToken() {
  Cookies.remove("access_token");
  Cookies.remove("refresh_token");
}

export { clearToken };

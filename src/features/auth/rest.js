import { transformers } from "redux-api";
import { AUTH_API_LOGIN, AUTH_API_REGISTER, AUTH_API_ACTIVATE } from "../../utils/Apis";
import headers from "../../utils/headers";

export default {
  authLogin: {
    url: AUTH_API_LOGIN,
    options: {
      headers,
      method: "post"
    },
    transformer: transformers.object
  },
  authRegister: {
    url: AUTH_API_REGISTER,
    options: {
      headers,
      method: "post"
    },
    transformer: transformers.object
  },
  authActivate: {
    url: AUTH_API_ACTIVATE,
    options: {
      headers,
      method: "post"
    },
    transformer: transformers.object
  },
};

import { transformers } from 'redux-api';
import { AUTH_API_LOGIN, AUTH_API_LOGOUT, AUTH_API_REGISTER, AUTH_API_ACTIVATE } from "../../utils/apis";
import { unsafeHeaders } from "../../utils/headers";

export default {
  authLogin: {
    url: AUTH_API_LOGIN,
    options: {
      headers: unsafeHeaders,
      method: "post"
    },
    transformer: transformers.object
  },
  authRegister: {
    url: AUTH_API_REGISTER,
    options: {
      headers: unsafeHeaders,
      method: "post"
    },
    transformer: transformers.object
  },
  authActivate: {
    url: AUTH_API_ACTIVATE,
    options: {
      headers: unsafeHeaders,
      method: "post"
    },
    transformer: transformers.object
  },
};

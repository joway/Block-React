import { transformers } from 'redux-api';
import safeHeaders from "../../utils/headers";
import { AUTH_API_LOGIN, AUTH_API_LOGOUT } from "../../utils/apis";
import { unsafeHeaders } from "../../utils/headers";

export default {
  login: {
    url: AUTH_API_LOGIN,
    options: {
      unsafeHeaders,
      method: 'POST'
    },
    transformer: transformers.object
  },
};

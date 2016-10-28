import { transformers } from "redux-api";
import { USER_API } from "../../utils/Apis";
import { unsafeHeaders } from "../../utils/headers";


export default {
  user: {
    url: USER_API,
    options: {
      headers: unsafeHeaders
    },
    transformer: transformers.object
  },
};

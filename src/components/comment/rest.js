import { transformers } from "redux-api";
import { COMMENT_API } from "../../utils/Apis";
import headers from "../../utils/headers";

export default {
  comment: {
    url: COMMENT_API,
    options: {
      headers,
      method: 'POST'
    },
    transformer: transformers.object
  },
};

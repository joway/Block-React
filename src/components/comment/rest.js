import { transformers } from 'redux-api';
import { COMMENT_API } from "../../utils/apis";

const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json",
};

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

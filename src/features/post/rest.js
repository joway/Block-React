import { transformers } from 'redux-api';
import { ARTICLE_DETAIL_API } from "../../utils/apis";

const headers = {
  Accept: "application/json"
};

export default {
  article: {
    url: ARTICLE_DETAIL_API,
    options: {
      headers,
    },
    transformer: transformers.object
  },
};

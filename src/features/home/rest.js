import { transformers } from "redux-api";
import { ARTICLE_LIST_API } from "../../utils/Apis";

const headers = {
  Accept: "application/json"
};

export default {
  articles: {
    url: ARTICLE_LIST_API,
    options: {
      headers,
    },
    transformer: transformers.object
  },
};

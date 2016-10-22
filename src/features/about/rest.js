import { transformers } from 'redux-api';
import { ARTICLE_ABOUT_API } from "../../utils/apis";

const headers = {
  Accept: "application/json"
};

export default {
  articleAbout: {
    url: ARTICLE_ABOUT_API,
    options: {
      headers,
    },
    transformer: transformers.object
  },
};

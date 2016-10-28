import { transformers } from "redux-api";
import { ARTICLE_ABOUT_API } from "../../utils/Apis";
import headers from "../../utils/headers";

export default {
  articleAbout: {
    url: ARTICLE_ABOUT_API,
    options: {
      headers,
    },
    transformer: transformers.object
  },
};

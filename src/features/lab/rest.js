import { transformers } from 'redux-api';
import { GITHUB_REPOS_API } from "../../utils/apis";

const headers = {
  Accept: "application/json"
};

export default {
  githubRepos: {
    url: GITHUB_REPOS_API,
    options: {
      headers,
      JWT: false,
    },
    transformer: transformers.array
  },
};

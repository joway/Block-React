import { transformers } from 'redux-api';

const headers = {
  Accept: "application/json"
};

export default {
  v2ex: {
    url: 'https://api.github.com/users/joway/orgs',
    options: {
      headers,
    },
    transformer: transformers.array
  },
};

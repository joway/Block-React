import reduxApi from 'redux-api';
import Rests from '../Rests';

const adapter = (fetch) => {
  return function (url, opts) {
    opts.mode = 'no-cors';
    return fetch(url, opts).then((response) => {
      if (response.status != 200) {
        return response.json().then((data) => {
          return {
            status: response.status,
            data,
          };
        });
      }
      return response.json();
    });
  };
};
export default reduxApi(Rests).use("fetch", adapter(fetch));


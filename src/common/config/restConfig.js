import reduxApi from 'redux-api';
import Rests from '../Rests';
import { browserHistory } from 'react-router'

const adapter = (fetch) => {
  return function (url, opts) {
    const token = localStorage.getItem('token');
    if (token != null && token != undefined) {
      if (opts.JWT != false) {
        opts.headers = { ...opts.headers, Authorization: `JWT ${token}` };
      }
    } else {
      delete opts.headers['Authorization']
    }
    return fetch(url, opts).then((response) => {
      if (response.status != 200) {
        return response.json().then((data) => {
          return {
            error: true,
            status: response.status,
            detail: data.detail
          };
        });
      }
      return response.json();
    });
  };
};
export default reduxApi(Rests).use("fetch", adapter(fetch));


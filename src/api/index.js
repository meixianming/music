import axios from 'axios';
import qs from 'qs';

axios.defaults.baseURL = window.location.hostname === 'https://www.baidu.com/' ? 'http://120.79.162.149:3000' : 'http://120.79.162.149:3000';
export const Request = (payload) => {
  return axios.get(payload.url, {
      params: payload.data
    })
    .then(response => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch(error => {
      return error;
    })
}
export const getBanners = () => {
  return Request({
    url: "/banner"
  })
}

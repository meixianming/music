import axios from 'axios';
import qs from 'qs';
import {
  request
} from 'https';

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

//推荐模块接口
export const getBanners = () => {
  return Request({
    url: "/banner"
  })
}
export const getPersonalized = () => {
  return Request({
    url: "/personalized"
  })
}
export const getNewSong = () => {
  return Request({
    url: "/personalized/newsong"
  })
}

//排名模块
export const getRankInfo = (idx) => {
  return Request({
    url: "/top/list?idx=" + idx
  })
}

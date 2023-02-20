import { auth } from './../../lib/Login/auth';
import axios from 'axios'
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: process.env.BASE_URL
})

api.interceptors.request.use(function (config) {
  const isAuthenticate = auth(Cookies.get('token'))
  if (!isAuthenticate) {
    throw new Error()
  }
  return config
}, function (error) {
  window.location.replace('/')
  return Promise.reject(error);
});
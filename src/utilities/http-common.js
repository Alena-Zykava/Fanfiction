import axios from 'axios';
import { urlServer } from '../constants/constants';

export const httpFanfic = axios.create({
  baseURL: `${urlServer}`,
  headers: {
      'Content-type': 'application/json'
  }
});

export const httpUsersTableAuth = ({ token }) => axios.create({
    baseURL: `${urlServer}auth/`,
    headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
    }
  });
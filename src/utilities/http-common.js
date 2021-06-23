import axios from 'axios';
import { urlServer } from '../constants/constants';

export const httpUsersTable = axios.create({
  baseURL: `${urlServer}auth/`,
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
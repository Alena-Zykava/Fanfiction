import { httpUsersTable, httpUsersTableAuth } from './http-common';

export const getUsers = (token) => httpUsersTableAuth({token}).get(`/users`);

export const registration = (params) => httpUsersTable.post('auth/registration', params);

export const deleteUser = (params) => httpUsersTable.post('auth/delete', params);

export const updateUser = (params) => httpUsersTable.post('auth/update', params);

export const loginUser = (params) => httpUsersTable.post('auth/login', params);

export const getFanfics = (params) => httpUsersTable.get('/fanfic/', params);


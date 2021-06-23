import { httpUsersTable, httpUsersTableAuth } from './http-common';

export const getUsers = (token) => httpUsersTableAuth({token}).get(`/users`);

export const registration = (params) => httpUsersTable.post('/registration', params);

export const deleteUser = (params) => httpUsersTable.post('/delete', params);

export const updateUser = (params) => httpUsersTable.post('/update', params);

export const loginUser = (params) => httpUsersTable.post('/login', params);


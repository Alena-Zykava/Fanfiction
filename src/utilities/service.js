import { httpFanfic, httpUsersTableAuth } from './http-common';

export const getUsers = (token) => httpUsersTableAuth({token}).get(`/users`);

export const registration = (params) => httpFanfic.post('auth/registration', params);

export const deleteUser = (params) => httpFanfic.post('auth/delete', params);

export const updateUser = (params) => httpFanfic.post('auth/update', params);

export const loginUser = (params) => httpFanfic.post('auth/login', params);



export const getFanfics = (params) => httpFanfic.get('/fanfic/', params);

export const getFanfic = (id) => httpFanfic.get(`/fanfic/${id}`);

export const addNewFanfic = (params) => httpFanfic.post('/fanfic/add', params);

export const getUserFanfics = (userId) => httpFanfic.get(`/fanfic/user/${userId}`);

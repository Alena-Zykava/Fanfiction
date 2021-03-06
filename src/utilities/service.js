import { httpFanfic, httpUsersTableAuth } from './http-common';

export const getUsers = (token) => httpUsersTableAuth({token}).get(`/users`);

export const registration = (params) => httpFanfic.post('auth/registration', params);

export const deleteUser = (params) => httpFanfic.post('auth/delete', params);

export const updateUserStatus = (params) => httpFanfic.post('auth/update_status', params);

export const updateUserRoles = (params) => httpFanfic.post('auth/update_roles', params);

export const loginUser = (params) => httpFanfic.post('auth/login', params);



export const getFanfics = (params) => httpFanfic.get('/fanfic/', params);

export const getFanfic = (id) => httpFanfic.get(`/fanfic/${id}`);

export const addNewFanfic = (params) => httpFanfic.post('/fanfic/add', params);

export const getUserFanfics = (userId) => httpFanfic.get(`/fanfic/user/${userId}`);

export const deleteFanfic = (params) => httpFanfic.delete(`/fanfic/delete/${params}`);

export const updateFanfic = (params) => httpFanfic.patch('/fanfic/update', params);



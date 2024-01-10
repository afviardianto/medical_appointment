import axios from 'axios';

const USER_BASE_URL = 'http://localhost:3000/api/user';
const COMMON_BASE_URL = 'http://localhost:3000/api';

export const userApi = axios.create({ baseURL: USER_BASE_URL });
export const commonApi = axios.create({ baseURL: COMMON_BASE_URL });

export const createChat = (data) => commonApi.post('/conversation/', data);
export const userChats = (id) => commonApi.get(`/conversation/${id}`);

export const getMessages = (id) => commonApi.get(`/api/message/${id}`);
export const addMessage = (data) => commonApi.post('/api/message/', data, { headers: { 'Content-Type': 'multipart/form-data' } } );

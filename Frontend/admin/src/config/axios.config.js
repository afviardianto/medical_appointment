import axios from 'axios';

const ADMIN_BASE_URL = 'http://localhost:3000/api/admin';
const API_BASE_URL = 'http://localhost:3000/api';
const CLOUDINARY_UPLOAD_URL = ''; /* CLOUDINARY_URL */

export const backendApi = axios.create({ baseURL: ADMIN_BASE_URL });
export const commonApi = axios.create({ baseURL: API_BASE_URL });

export const cloudinaryUpload = axios.create({ baseURL: CLOUDINARY_UPLOAD_URL });

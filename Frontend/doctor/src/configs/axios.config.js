import axios from 'axios';

const DOCTOR_BASE_URL = 'http://localhost:3000/api/doctor';
const COMMON_URL = 'http://localhost:3000/api';
const CLOUDINARY_UPLOAD_URL = ''; /* CLOUDINARY_URL */

export const backend = axios.create({ baseURL: DOCTOR_BASE_URL });
export const commonApi = axios.create({ baseURL: COMMON_URL });
export const cloudinaryUpload = axios.create({ baseURL: CLOUDINARY_UPLOAD_URL });

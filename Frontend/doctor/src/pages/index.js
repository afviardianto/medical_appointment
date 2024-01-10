import { lazy } from 'react';

const HOME = lazy(() => import('./Home'));
const LOGIN = lazy(() => import('./Login'));
const APPOINTMENTS = lazy(() => import('./Appointments'));
const INACTIVE_APPOINTMENTS = lazy(() => import('./InactiveAppointments'));
const ADD_BLOG = lazy(() => import('./Add_Blog'));
const BLOGS = lazy(() => import('./Blogs'));
const VIEW_APPOINTMENT = lazy(() => import('./View_Appointment'));
const PROFILE = lazy(() => import('./Profile'));
const EDIT_PROFILE = lazy(() => import('./Edit_Profile'));
const CHAT = lazy(() => import('./Chat'));
const VIDEO_CALL = lazy(() => import('./Video_Call'));
const ADD_PRESCRIPTION = lazy(() => import('./Add_Prescription'));

export {
  HOME,
  LOGIN,
  APPOINTMENTS,
  BLOGS,
  ADD_BLOG,
  VIEW_APPOINTMENT,
  PROFILE,
  EDIT_PROFILE,
  CHAT,
  VIDEO_CALL,
  ADD_PRESCRIPTION,
  INACTIVE_APPOINTMENTS,
};

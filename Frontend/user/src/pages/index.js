import { lazy } from 'react';

const HOME = lazy(() => import('./Home'));
const LOGIN = lazy(() => import('./Login'));
const SIGNUP = lazy(() => import('./Signup'));
const BLOG = lazy(() => import('./Blog'));
const APPOINTMENTS = lazy(() => import('./Appointments'));
const HISTORY = lazy(() => import('./history'));
const UPCOMINGAPPOINTMENTS = lazy(() => import('./Upcoming_Appointments'));
const BOOKAPPOINTMENT = lazy(() => import('./BookAppointments'));
const DOCTORS = lazy(() => import('./Doctors'));
const PROFILE = lazy(() => import('./Profile'));
const PAYMENT_SUCCESS = lazy(() => import('./PaymentSuccess'));
const CHAT = lazy(() => import('./Chat'));
const VIDEO_CALL = lazy(() => import('./Video_Call'));
const VIDEO = lazy(() => import('./Video'));
const EDIT_PROFILE = lazy(() => import('./Edit_Profile'));


export {
  HOME,
  LOGIN,
  SIGNUP,
  BLOG,
  APPOINTMENTS,
  HISTORY,
  UPCOMINGAPPOINTMENTS,
  BOOKAPPOINTMENT,
  DOCTORS,
  PROFILE,
  PAYMENT_SUCCESS,
  CHAT,
  VIDEO_CALL,
  VIDEO,
  EDIT_PROFILE,
};

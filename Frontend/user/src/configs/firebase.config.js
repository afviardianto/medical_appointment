import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "", /**apiKey  */
  authDomain: "",/** authDomain */
  projectId: "",/** projectId */
  storageBucket: "", /**storageBucket */
  messagingSenderId: "", /** messagingSenderId */
  appId: "", /** appId */
  measurementId: "" /** measurementId */
};

// Initialize Firebase
export const appConfig = initializeApp(firebaseConfig);
export const authConfig = getAuth(appConfig);

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_apiKey ,
//   authDomain:import.meta.env.VITE_authDomain ,
//   projectId:import.meta.env.VITE_projectId ,
//   storageBucket:import.meta.env.VITE_storageBucket ,
//   messagingSenderId:import.meta.env.VITE_messagingSenderId ,
//   appId:import.meta.env.VITE_appId
// };
const firebaseConfig = {
  apiKey: "AIzaSyBgjXY0Rqt4ohoNXEx13Abxb-w-SjlRkmE",
  authDomain: "assignment12-58fdc.firebaseapp.com",
  projectId: "assignment12-58fdc",
  storageBucket: "assignment12-58fdc.appspot.com",
  messagingSenderId: "958136894542",
  appId: "1:958136894542:web:53acfe4e40003e86c6ef1f",
  measurementId: "G-C1DRRQYQQG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnR7HPhszULew0dUX9gADOBcFO5C_cUGM",
  authDomain: "media-server-87eda.firebaseapp.com",
  projectId: "media-server-87eda",
  storageBucket: "media-server-87eda.appspot.com",
  messagingSenderId: "210714695427",
  appId: "1:210714695427:web:e1d4bfc985d3f851bdbb36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDTU3bo86T534g9yCa_mNBUd2EfHjjf8Ho",
  authDomain: "swiggy-clone-ad1e7.firebaseapp.com",
  projectId: "swiggy-clone-ad1e7",
  storageBucket: "swiggy-clone-ad1e7.appspot.com",
  messagingSenderId: "722234930826",
  appId: "1:722234930826:web:d4d4c4a6885d973015df73"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
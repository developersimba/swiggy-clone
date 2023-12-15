import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,GithubAuthProvider,FacebookAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAu7Ad3rTdKCm2Aw-15hqBzYRVl4-it5Vg",
  authDomain: "newyorktimes-clone.firebaseapp.com",
  projectId: "newyorktimes-clone",
  storageBucket: "newyorktimes-clone.appspot.com",
  messagingSenderId: "1021524648495",
  appId: "1:1021524648495:web:196c60322d9386bde69cda"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const gitProvider = new GithubAuthProvider()
export const facebookProvider = new FacebookAuthProvider()
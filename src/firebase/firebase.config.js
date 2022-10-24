// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAbKtz7qqq3bDPzmxJOimvvV2j5Kq2-bg",
  authDomain: "hotel-booking-auth-client.firebaseapp.com",
  projectId: "hotel-booking-auth-client",
  storageBucket: "hotel-booking-auth-client.appspot.com",
  messagingSenderId: "1013840698149",
  appId: "1:1013840698149:web:df5160c83dafae377d18cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA1oImquC6OYKbeJr187RiMUjAKVxPW58",
  authDomain: "dream-forecast-auth.firebaseapp.com",
  projectId: "dream-forecast-auth",
  storageBucket: "dream-forecast-auth.appspot.com",
  messagingSenderId: "114749666890",
  appId: "1:114749666890:web:f4ae40f2fea55836f398b3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize firebase auth
// const auth = getAuth(app);

// export { firebase, auth };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize firebase auth
// const auth = getAuth(app);

// export { firebase, auth };
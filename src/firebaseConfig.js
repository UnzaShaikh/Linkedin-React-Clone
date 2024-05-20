import firebase from  'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHY25ydn4cEnWXPmz6NXfRPCkLlHVUm7o",
  authDomain: "linkedin-clone-yt-5f204.firebaseapp.com",
  projectId: "linkedin-clone-yt-5f204",
  storageBucket: "linkedin-clone-yt-5f204.appspot.com",
  messagingSenderId: "324362724368",
  appId: "1:324362724368:web:1416ef19ad54369d565695"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export  { firebase, db , auth }; // Export both firebase and db

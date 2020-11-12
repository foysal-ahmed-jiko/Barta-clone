import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCveXLhJRKoBJ6p19iraUXoffRjQeuXA5s",
  authDomain: "whats-app-clone-eb925.firebaseapp.com",
  databaseURL: "https://whats-app-clone-eb925.firebaseio.com",
  projectId: "whats-app-clone-eb925",
  storageBucket: "whats-app-clone-eb925.appspot.com",
  messagingSenderId: "1091787184098",
  appId: "1:1091787184098:web:c0d2ab9b00216fde8b0bbb",
  measurementId: "G-VGJ47EXJRQ",
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider};
  export default db; 

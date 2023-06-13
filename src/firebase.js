import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6Qc4fmPL4WKOiJUn90ixEaHhAM4gaeqk",
  authDomain: "instagram-clone-db134.firebaseapp.com",
  projectId: "instagram-clone-db134",
  storageBucket: "instagram-clone-db134.appspot.com",
  messagingSenderId: "427075946610",
  appId: "1:427075946610:web:ba02b4a042f1568609daeb",
  measurementId: "G-8GEKEGG0R1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

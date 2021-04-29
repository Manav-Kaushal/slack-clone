import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBk_E2a47J1b0isnBHNbBif6a4G6Lpej-8",
  authDomain: "slack-clone-782ab.firebaseapp.com",
  projectId: "slack-clone-782ab",
  storageBucket: "slack-clone-782ab.appspot.com",
  messagingSenderId: "953036045598",
  appId: "1:953036045598:web:55c158c22100cf67a99d0f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

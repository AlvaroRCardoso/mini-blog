import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhHr9SVgPrjqEAbVrHzoR0c0YRoOyamuQ",
  authDomain: "miniblog-6f05a.firebaseapp.com",
  projectId: "miniblog-6f05a",
  storageBucket: "miniblog-6f05a.appspot.com",
  messagingSenderId: "250957507172",
  appId: "1:250957507172:web:6bbee84757bd5725058d71",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, app };

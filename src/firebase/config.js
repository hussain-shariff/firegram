import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAEtokSnn6KmnrElWHaILb4cAthAub21ts",
    authDomain: "firegram-270f1.firebaseapp.com",
    projectId: "firegram-270f1",
    storageBucket: "firegram-270f1.appspot.com",
    messagingSenderId: "381805771572",
    appId: "1:381805771572:web:d63594d2f8136e612d0361"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);

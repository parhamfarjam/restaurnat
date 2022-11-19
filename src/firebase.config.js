import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBT0LOFJkCuni2L5y78AeXB2IN0XMkQPXo",
    authDomain: "restaurant-da9e0.firebaseapp.com",
    databaseURL: "https://restaurant-da9e0-default-rtdb.firebaseio.com",
    projectId: "restaurant-da9e0",
    storageBucket: "restaurant-da9e0.appspot.com",
    messagingSenderId: "723838650804",
    appId: "1:723838650804:web:c2c3c1b465d2865e568ae1"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
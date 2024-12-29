import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyAcVvIIfOiZk_0HHftn71W-xamg6FFvr8Y",
  authDomain: "amhc-eb2a4.firebaseapp.com",
  projectId: "amhc-eb2a4",
  storageBucket: "amhc-eb2a4.firebasestorage.app",
  messagingSenderId: "594172964291",
  appId: "1:594172964291:web:badb0fb2771ebb7677a176",
  measurementId: "G-FZBC2XZWDH",
};

export const app = initializeApp(firebaseConfig);

//export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const store = getStorage(app);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import { getAnalytics} from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBtj-gkFtf6OjWpY8ja8kVMoBvUh-HiwWw",
    authDomain: "muro-interactivo-a2026.firebaseapp.com",
    projectId: "muro-interactivo-a2026",
    storageBucket: "muro-interactivo-a2026.appspot.com",
    messagingSenderId: "717021215864",
    appId: "1:717021215864:web:dfaccbb9e14e5c8bebc18d",
    measurementId: "G-QKVN14MN3G"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const firestore = getFirestore(app);

export const storage = getStorage(app);
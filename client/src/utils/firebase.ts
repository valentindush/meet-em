import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs , doc, setDoc} from 'firebase/firestore/lite';

export const firebaseConfig = {
    apiKey: "AIzaSyDi9NYR6V6HPq-aiDl-s8uIaj_pu24VFUA",
    authDomain: "meet--em.firebaseapp.com",
    projectId: "meet--em",
    storageBucket: "meet--em.appspot.com",
    messagingSenderId: "82799390152",
    appId: "1:82799390152:web:c240b72359293e874a64fd",
    measurementId: "G-5TG5S3MJ57"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
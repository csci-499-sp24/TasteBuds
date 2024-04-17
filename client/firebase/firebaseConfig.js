import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCfX7oWswUtw22qgP6erQzu8ncXOb1EQJ0",
    authDomain: "capstone-theband.firebaseapp.com",
    databaseURL: "https://capstone-theband-default-rtdb.firebaseio.com",
    projectId: "capstone-theband",
    storageBucket: "capstone-theband.appspot.com",
    messagingSenderId: "62705822029",
    appId: "1:62705822029:web:ded54a024c936076132f04",
    measurementId: "G-69BPDF82M0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export const testFirestore = async () => {
    try {
        const snapshot = await getDocs(collection(firestore, 'users'));
        snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
        });
    } catch (error) {
        console.error("Error accessing Firestore:", error);
    }
};
 
export { firestore, auth };
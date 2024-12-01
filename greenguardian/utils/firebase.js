import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAL4yv2WNyuRH28_PC5JcD0Nh1xpJFW2d4",
    authDomain: "green-guardian-24e08.firebaseapp.com",
    databaseURL: "https://green-guardian-24e08-default-rtdb.firebaseio.com",
    projectId: "green-guardian-24e08",
    storageBucket: "green-guardian-24e08.firebasestorage.app",
    messagingSenderId: "87325763255",
    appId: "1:87325763255:web:8a0bc806fc18803cfa8f32",
    measurementId: "G-HK3P8PKBHB"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue, set };
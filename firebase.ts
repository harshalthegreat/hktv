// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCD7V3JV21xgnZUr1AgHE7_RDoe48Rypfg",
    authDomain: "hkflix-c6309.firebaseapp.com",
    projectId: "hkflix-c6309",
    storageBucket: "hkflix-c6309.appspot.com",
    messagingSenderId: "643143449705",
    appId: "1:643143449705:web:8fb08cd9ee35818ae036f8"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
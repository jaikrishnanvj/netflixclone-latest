// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,signOut} from 'firebase/auth'
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-JAkSzeBHX6YKtipg0F6gYtjVAeNIBG4",
  authDomain: "netflix-a712d.firebaseapp.com",
  projectId: "netflix-a712d",
  storageBucket: "netflix-a712d.firebasestorage.app",
  messagingSenderId: "181100357661",
  appId: "1:181100357661:web:0f13f0f478c97b0ea27ef4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db=getFirestore(app) 

const signup=async (name,email,password) =>{
    try {
        const res=await createUserWithEmailAndPassword(auth,email,password)
        const user=res.user
        await addDoc(collection(db,'user'),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,
        }) 
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '))
        
    }
    
}

const login=async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
        
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '))
        
    }


}

const logout=()=>{
    signOut(auth)
}

export {auth,db,login,signup,logout}
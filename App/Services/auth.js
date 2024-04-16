import axios from "axios";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
const API =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC_uToEHwhPazT6sUSG2u-tlCmamnYTh08";

const firebaseConfig = {
  apiKey: "AIzaSyC_uToEHwhPazT6sUSG2u-tlCmamnYTh08",
  authDomain: "hrx247-68bcf.firebaseapp.com",
  projectId: "hrx247-68bcf",
  storageBucket: "hrx247-68bcf.appspot.com",
  messagingSenderId: "1023136582682",
  appId: "1:1023136582682:web:d27268e8f8b55c72d355a3",
  measurementId: "G-PTL51QE1DZ",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

async function createUser(data) {
  const { email, password } = data;
  try {
    await axios.post(API, {
      email,
      password,
      returnSecureToken: true,
    });
    console.log(email);
    console.log("this is from auth");
    await addNewUser(data);
  } catch (error) {
    console.log(error.message);
    console.log("---------");
  }
}
export default createUser;

export async function addNewUser(data) {
  try {
    const docref = await addDoc(collection(db, "users"), data);
    console.log("data uploaded");
  } catch (error) {
    console.log(error);
  }
}

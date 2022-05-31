import firebase from 'firebase/compat/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

export const firebaseLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const firebaseRegister = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const firebaseSignOut = (email, password) => signOut(auth, email, password);
import { firebaseLogin, firebaseRegister, firebaseSignOut } from '../config/firebaseInit';

export function register(email, pass) {
    return firebaseRegister(email, pass)
        .then(() => login(email, pass))
        .catch((error) => console.log(error))
}

export function login(email, pass) {
    return firebaseLogin(email, pass);
}

export function logout() {
    return firebaseSignOut;
}

export function activeUser(uid, email) {
    localStorage.setItem('uid', uid);
    localStorage.setItem('email', email);
}
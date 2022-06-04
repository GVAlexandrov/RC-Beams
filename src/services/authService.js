import { firebaseLogin, firebaseRegister, firebaseSignOut } from '../config/firebaseInit';

export function register(username, pass) {
    return firebaseRegister(username, pass)
        .then(() => login(username, pass))
        .catch((error) => console.log(error))
}

export function login(username, pass) {
    return firebaseLogin(username, pass);
}

export function logout() {
    return firebaseSignOut;
}

export function activeUser(uid, username) {
    localStorage.setItem('uid', uid);
    localStorage.setItem('username', username);
}
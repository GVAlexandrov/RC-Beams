import { URL } from '../config/config';
import { auth } from '../config/firebaseInit';

export const addNewBeam = (height, width, concrete, steel, rebar) => {
    const uid = localStorage.uid;
    console.log(uid);

    let newExpense = {
        height,
        width,
        concrete,
        steel,
        rebar
    }

    return auth.currentUser.getIdToken(false)
        .then((token) => {
            return fetch(`${URL}beams/${uid}/.json?auth=${token}`, {
                method: "POST",
                body: JSON.stringify(newExpense)
            })
        })

}
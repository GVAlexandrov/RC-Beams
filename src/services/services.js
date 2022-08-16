import { URL } from '../config/config';
import { auth } from '../config/firebaseInit';

const uid = localStorage.uid;

export const addNewBeam = (height, width, concrete, steel, rebar) => {
    let newBeam = { height, width, concrete, steel, rebar }

    return auth.currentUser.getIdToken(false)
        .then((token) => {
            return fetch(`${URL}beams/${uid}/.json?auth=${token}`, {
                method: "POST",
                body: JSON.stringify(newBeam)
            })
        })
}

export const getAllBeams = () => {
    return fetch(`${URL}beams/${uid}/.json`)
        .then(response => response.json())
        .then(result => {
            return result;
        })
        .catch(error => console.log(error));
}

export const getOneBeam = (beamId) => {
    return fetch(`${URL}beams/${uid}/${beamId}/.json`)
        .then(response => response.json())
        .then(result => {
            return result;
        })
        .catch(error => console.log(error));
}

export const deleteOneBeam = (event, elementId) => {
    // let parentNode = event.target.nodeName === 'TD' ? event.target.parentNode.parentNode : event.target.parentNode.parentNode.parentNode;

    return auth.currentUser.getIdToken(false)
        .then((token) => {
            return fetch(`${URL}beams/${uid}/${elementId}/.json?auth=${token}`, {
                method: "DELETE",
            })
        })
    // .then(() => {
    //     getAllBeams()
    // })
    // .then(res => {
    //     parentNode.setBeams(res);
    // })    
}

export const editBeam = (height, width, concrete, steel, rebar, beamId) => {
    let newBeam = { height, width, concrete, steel, rebar }

    return auth.currentUser.getIdToken(false)
        .then((token) => {
            return fetch(`${URL}beams/${uid}/${beamId}/.json?auth=${token}`, {
                method: "PUT",
                body: JSON.stringify(newBeam)
            })
        })
}

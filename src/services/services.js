import { URL } from '../config/config';
import { auth } from '../config/firebaseInit';

let uid = localStorage.uid;


export const addNewBeam = (
    projectName,
    beamLevel,
    beamNumberString,
    rebarPosition,
    concrete,
    alphaCC,
    gammaMC,
    steel,
    gammaMS,
    steelModulus,
    width,
    height,
    d1,
    bendingMoment,
    shearForce,
    torsion,
    rebar
) => {
    let newBeam = {
        projectName,
        beamLevel,
        beamNumberString,
        rebarPosition,
        concrete,
        alphaCC,
        gammaMC,
        steel,
        gammaMS,
        steelModulus,
        width,
        height,
        d1,
        bendingMoment,
        shearForce,
        torsion,
        rebar
    }
    uid = localStorage.uid;

    return auth.currentUser.getIdToken(false)
        .then((token) => {
            return fetch(`${URL}beams/${uid}/.json?auth=${token}`, {
                method: "POST",
                body: JSON.stringify(newBeam)
            })
        })
}



export const getAllBeams = () => {
    uid = localStorage.uid;
    return fetch(`${URL}beams/${uid}/.json`)
        .then(response => response.json())
        .then(result => {
            return result;
        })
        .catch(error => console.log(error));
}



export const getAllWalls = () => {
    uid = localStorage.uid;
    return fetch(`${URL}walls/${uid}/.json`)
        .then(response => response.json())
        .then(result => {
            return result;
        })
        .catch(error => console.log(error));
}


export const getOneBeam = (beamId) => {
    uid = localStorage.uid;
    return fetch(`${URL}beams/${uid}/${beamId}/.json`)
        .then(response => response.json())
        .then(result => {
            return result;
        })
        .catch(error => console.log(error));
}



export const deleteOneBeam = (event, elementId, refresh) => {
    // let parentNode = event.target.nodeName === 'TD' ? event.target.parentNode.parentNode : event.target.parentNode.parentNode.parentNode;
    uid = localStorage.uid;

    return auth.currentUser.getIdToken(false)
        .then((token) => {
            return fetch(`${URL}beams/${uid}/${elementId}/.json?auth=${token}`, {
                method: "DELETE",
            })
        })
        .then(() => {
            refresh();
        })
    // .then(res => {
    //     parentNode.setBeams(res);
    // })    
}



export const editBeam = (
    projectName,
    beamLevel,
    beamNumberString,
    rebarPosition,
    concrete,
    alphaCC,
    gammaMC,
    steel,
    gammaMS,
    steelModulus,
    width,
    height,
    d1,
    bendingMoment,
    shearForce,
    torsion,
    rebar,
    beamId
) => {
    let newBeam = {
        projectName,
        beamLevel,
        beamNumberString,
        rebarPosition,
        concrete,
        alphaCC,
        gammaMC,
        steel,
        gammaMS,
        steelModulus,
        width,
        height,
        d1,
        bendingMoment,
        shearForce,
        torsion,
        rebar
    }
    uid = localStorage.uid;

    return auth.currentUser.getIdToken(false)
        .then((token) => {
            return fetch(`${URL}beams/${uid}/${beamId}/.json?auth=${token}`, {
                method: "PUT",
                body: JSON.stringify(newBeam)
            })
        })
}


export const addNewWall = (
    projectName,
    wallLevel,
    wallNumberString,
    concrete,
    alphaCC,
    gammaMC,
    steel,
    gammaMS,
    steelModulus,
    width,
    length,
    d1,
    rebarAreaEndZone,
    rebarAreaMiddleZone
) => {
    let newWall = {
        projectName,
        wallLevel,
        wallNumberString,
        concrete,
        alphaCC,
        gammaMC,
        steel,
        gammaMS,
        steelModulus,
        width,
        length,
        d1,
        rebarAreaEndZone,
        rebarAreaMiddleZone
    }
    uid = localStorage.uid;

    return auth.currentUser.getIdToken(false)
        .then((token) => {
            return fetch(`${URL}walls/${uid}/.json?auth=${token}`, {
                method: "POST",
                body: JSON.stringify(newWall)
            })
        })
}
import { useState } from 'react';

import * as structuralData from '../../services/structuralData';

import WallInfo from './WallInfo';
import MaterialsInfo from '../NewBeam2/MaterialsInfo01';
import GeometryAndForces from './GeometryAndForces';

const NewWall = () => {
    let [projectName, setProjectName] = useState('');
    let [wallLevel, setWallLevel] = useState(0);
    let [wallNumberString, setWallNumberString] = useState('');
    let [rebarPosition, setRebarPosition] = useState('');

    let [concreteGrade, setConcreteGrade] = useState('');
    let [alphaCC, setAlphaCC] = useState(0);
    let [gammaMC, setGammaMC] = useState(0);
    let [steelGrade, setSteelGrade] = useState('');
    let [gammaMS, setGammaMS] = useState(0);
    let [steelModulus, setSteelModulus] = useState(0);
    let [width, setWidth] = useState(0);
    let [length, setLength] = useState(0);
    let [rebarAreaEndZone, setRebarAreaEndZone] = useState(0);
    let [rebarAreaMiddleZone, setRebarAreaMiddleZone] = useState(0);
    let [d1, setD1] = useState(0);

    // console.log(d1);

    let fck = 0;
    let fcd = 0;
    let fy = 0;
    let fyd = 0;
    let fcm = 0;
    let fctm = 0;
    let fctk05 = 0;
    let fctk95 = 0;
    let Ecm = 0;
    let epsilonYD = 0;

    return (
        <>
            <h1>Wall Info</h1>

            <WallInfo />

            <MaterialsInfo
                setConcreteGrade={setConcreteGrade}
                structuralData={structuralData}
                setAlphaCC={setAlphaCC}
                setGammaMC={setGammaMC}
                setSteelGrade={setSteelGrade}
                setGammaMS={setGammaMS}
                fcd={fcd}
                fyd={fyd}
                fcm={fcm}
                fctm={fctm}
                fctk05={fctk05}
                fctk95={fctk95}
                Ecm={Ecm}
                setSteelModulus={setSteelModulus}
                epsilonYD={epsilonYD}
            />

            <GeometryAndForces
                setWidth={setWidth}
                width={width}
                setLength={setLength}
                length={length}
                setRebarAreaEndZone={setRebarAreaEndZone}
                rebarAreaEndZone={rebarAreaEndZone}
                setRebarAreaMiddleZone={setRebarAreaMiddleZone}
                rebarAreaMiddleZone={rebarAreaMiddleZone}
                setD1={setD1}
                d1={d1}
            />

        </>
    )
}

export default NewWall;
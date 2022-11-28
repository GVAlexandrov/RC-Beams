import { useState } from 'react';

import * as structuralData from '../../services/structuralData';

import WallInfo from './WallInfo';
import WallCanvas from './WallCanvas';
import MaterialsInfo from '../NewBeam2/MaterialsInfo01';
import GeometryAndForces from './GeometryAndForces';

import { fcdCalculate, fcmCalculate, fctmCalculate, fydCalculate, } from '../../services/formulas';

const NewWall = () => {
    let [projectName, setProjectName] = useState('');
    let [wallLevel, setWallLevel] = useState(0);
    let [wallNumberString, setWallNumberString] = useState('');

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

    // console.log(fck);

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

    fck = Number(concreteGrade.slice(1, 3));
    fcd = fcdCalculate(fck, alphaCC, gammaMC);
    fy = Number(steelGrade.slice(1, 4));
    fyd = fydCalculate(fy, gammaMS);
    fcm = (isNaN(fcmCalculate(fck)) || !isFinite(fcmCalculate(fck)))
        ? 0
        : Number(fcmCalculate(fck));
    fctm = (isNaN(fctmCalculate(fck, fcm)) || !isFinite(fctmCalculate(fck, fcm)))
        ? 0
        : Number(fctmCalculate(fck, fcm));
    fctk05 = (isNaN((0.7 * fctm)) || !isFinite((0.7 * fctm)))
        ? 0
        : Number((0.7 * fctm));
    fctk95 = (isNaN((1.3 * fctm)) || !isFinite((1.3 * fctm)))
        ? 0
        : Number((1.3 * fctm));
    Ecm = (isNaN(22 * (fcm / 10) ** 0.3) || !isFinite(22 * (fcm / 10) ** 0.3))
        ? 0
        : Number(22 * (fcm / 10) ** 0.3);
    epsilonYD = (isNaN(fyd / steelModulus) || !isFinite(fyd / steelModulus))
        ? '-'
        : (fyd / steelModulus);


    return (
        <>
            <h1>Wall Info</h1>

            <WallInfo
                setProjectName={setProjectName}
                projectName={projectName}
                setWallLevel={setWallLevel}
                wallLevel={wallLevel}
                setWallNumberString={setWallNumberString}
                wallNumberString={wallNumberString}
                setConcreteGrade={setConcreteGrade}
                concreteGrade={concreteGrade}
                setSteelGrade={setSteelGrade}
                steelGrade={steelGrade}
                structuralData={structuralData}
            />

            <MaterialsInfo
                structuralData={structuralData}
                setAlphaCC={setAlphaCC}
                setGammaMC={setGammaMC}
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

            <WallCanvas
                width={width}
            />

        </>
    )
}

export default NewWall;
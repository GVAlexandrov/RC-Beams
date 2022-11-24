import { useState } from 'react';

import * as structuralData from '../../services/structuralData';

import WallInfo from './WallInfo';
import MaterialsInfo from '../NewBeam2/MaterialsInfo01';
import GeometryAndForces from './GeometryAndForces';

const NewWall = () => {
    let [projectName, setProjectName] = useState('');
    let [beamLevel, setBeamLevel] = useState(0);
    let [beamNumberString, setbeamNumberString] = useState('');
    let [rebarPosition, setRebarPosition] = useState('');

    let [concreteGrade, setConcreteGrade] = useState('');
    let [alphaCC, setAlphaCC] = useState(0);
    let [gammaMC, setGammaMC] = useState(0);
    let [steelGrade, setSteelGrade] = useState('');
    let [gammaMS, setGammaMS] = useState(0);
    let [steelModulus, setSteelModulus] = useState(0);
    let [width, setWidth] = useState(0);
    let [height, setHeight] = useState(0);
    let [d1, setD1] = useState(0);
    let [mEd, setMEd] = useState(0);
    let [vEd, setVEd] = useState(0);
    let [tEd, setTEd] = useState(0);
    let [rebarDiameter, setRebarDiameter] = useState(0);

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

            <GeometryAndForces />

        </>
    )
}

export default NewWall;
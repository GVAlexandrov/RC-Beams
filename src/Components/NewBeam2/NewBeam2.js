import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as structuralData from '../../services/structuralData';
import * as beamService from '../../services/services';

import { ButtonStyled, DivErrorStyled, PErrorStyled } from './newBeam2Styled';

import BeamInfo from './BeamInfo';
import MaterialsInfo from './MaterialsInfo';
import GeometryAndForces from './GeometryAndForces.js';
import BendingCalcs01 from './BendingCalcs01';

import { fcdCalculate, fcmCalculate, fctmCalculate, fydCalculate, miuCalculate, ksiCalculate } from '../../services/formulas';
import validateNewElements from '../../validations/newDataValidations';
import BendingCalcs02 from './BendingCalcs02';


const NewBeam2 = () => {
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

    let [error, setError] = useState('');

    const navigate = useNavigate();

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

    let d = 0;

    let miu = 0;
    let ksi = 0;
    let x = 0;
    let ksiMax = 0;
    let xMax = 0;
    let roLMin = 0;
    let roLMax = 0;
    let roS1 = 0;
    let ceta = 0;
    let z = 0;
    let As1 = 0;
    let As1_1 = 0;
    let numberOfRebarsNeeded = 0;
    let As1Provided = 0;
    let roL = 0;
    let Fc = 0;



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


    d = (height - d1);


    miu = (isNaN(miuCalculate(fcd, width, d, mEd)) || !isFinite(miuCalculate(fcd, width, d, mEd)))
        ? 0
        : Number(miuCalculate(fcd, width, d, mEd));
    ksi = isNaN(ksiCalculate(fcd, width, d, mEd))
        ? 0
        : Number(ksiCalculate(fcd, width, d, mEd));
    x = (isNaN(Number(ksi * d)) || !isFinite(Number(ksi * d)))
        ? '-'
        : Number(ksi * d);
    ksiMax = isNaN((3.5 / (3.5 + epsilonYD)))
        ? '-'
        : (3.5 / (3.5 + epsilonYD));
    xMax = isNaN((ksiMax * d))
        ? '-'
        : (ksiMax * d);
    roLMin = (isNaN(Number(Math.max(100 * 0.26 * fctm / fy, 0.13))) || !isFinite(Number(Math.max(100 * 0.26 * fctm / fy, 0.13))))
        ? 0
        : Number(Math.max(100 * 0.26 * fctm / fy, 0.13));
    roLMax = (isNaN(Number(100 * 0.8 * ksiMax * fcd / fyd)) || !isFinite(Number(100 * 0.8 * ksiMax * fcd / fyd)))
        ? 0
        : Number(100 * 0.8 * ksiMax * fcd / fyd);

    if (isNaN(Number(100 * 0.8 * ksi * fcd / fyd)) || isNaN(Number(roLMin)) || isNaN(Number(roLMax))) {
        roS1 = '-';
    } else {
        roS1 = ((100 * 0.8 * ksi * fcd / fyd >= roLMin && 100 * 0.8 * ksi * fcd / fyd <= roLMax))
            ? Number(100 * 0.8 * ksi * fcd / fyd).toFixed(3)
            : 'OUT';
    }

    ceta = (isNaN(Number(1 - .4 * ksi)) || !isFinite(Number(1 - .4 * ksi)))
        ? '-'
        : Number(1 - .4 * ksi);
    z = (isNaN(Number(d * ceta)) || !isFinite(Number(d * ceta)))
        ? '-'
        : Number(d * ceta);
    As1 = (isNaN(Number((roS1 * 0.01 * width * d) / 100)) || !isFinite(Number((roS1 * 0.01 * width * d) / 100)))
        ? '-'
        : Number((roS1 * 0.01 * width * d) / 100);
    As1_1 = (isNaN(Number((Math.PI * 0.25 * rebarDiameter ** 2) / 100)) || !isFinite(Number((Math.PI * 0.25 * rebarDiameter ** 2) / 100)))
        ? '-'
        : Number((Math.PI * 0.25 * rebarDiameter ** 2) / 100);
    numberOfRebarsNeeded = (isNaN(Number(Math.ceil(As1 / As1_1)))) || !isFinite(Number(Math.ceil(As1 / As1_1)))
        ? '-'
        : Number(Math.ceil(As1 / As1_1));
    As1Provided = (isNaN(Number(As1_1 * numberOfRebarsNeeded))) || !isFinite(Number(As1_1 * numberOfRebarsNeeded))
        ? '-'
        : Number(As1_1 * numberOfRebarsNeeded);

    if (isNaN(Number(100 * (numberOfRebarsNeeded * As1_1 * 100) / (width * d))) || !isFinite(Number(100 * (numberOfRebarsNeeded * As1_1 * 100) / (width * d)))) {
        roL = '-';
    } else {
        roL = ((100 * (numberOfRebarsNeeded * As1_1 * 100) / (width * d) >= roLMin && 100 * (numberOfRebarsNeeded * As1_1 * 100) / (width * d) <= roLMax))
            ? Number(100 * (numberOfRebarsNeeded * As1_1 * 100) / (width * d))
            : 'OUT';
    }

    Fc = (isNaN(Number((0.8 * width * x * fcd) / 1000))) || !isFinite(Number((0.8 * width * x * fcd) / 1000))
        ? '-'
        : Number((0.8 * width * x * fcd) / 1000);



    const onSubmitHandler = (e) => {
        const projectNameTextError = validateNewElements.projectName(projectName);
        const beamLevelTextError = validateNewElements.beamLevel(beamLevel);
        const beamNumberTextError = validateNewElements.beamNumber(beamNumberString);
        const rebarPositionTextError = validateNewElements.rebarPosition(rebarPosition);
        const concreteTextError = validateNewElements.concrete(fck);
        const alphaCCTextError = validateNewElements.alphaCC(alphaCC);
        const gammaMCTextError = validateNewElements.gammaMC(gammaMC);
        const steelTextError = validateNewElements.steel(fy);
        const gammaMSTextError = validateNewElements.gammaMS(gammaMS);
        const EsTextError = validateNewElements.Es(steelModulus);
        const heightTextError = validateNewElements.height(height.valueOf());
        const widthTextError = validateNewElements.width(width.valueOf());
        const d1TextError = validateNewElements.d1(d1.valueOf());
        const bendingMomentTextError = validateNewElements.bendingMoment(mEd);
        const shearForceTextError = validateNewElements.shearForce(vEd);
        const torsionTextError = validateNewElements.torsion(tEd);
        const roS1TextError = validateNewElements.roS1(roS1);
        const roLTextError = validateNewElements.roL(roL);
        const rebarTextError = validateNewElements.rebar(rebarDiameter);

        if (projectNameTextError ||
            beamLevelTextError ||
            beamNumberTextError ||
            rebarPositionTextError ||
            concreteTextError ||
            alphaCCTextError ||
            gammaMCTextError ||
            steelTextError ||
            gammaMSTextError ||
            EsTextError ||
            widthTextError ||
            heightTextError ||
            d1TextError ||
            bendingMomentTextError ||
            shearForceTextError ||
            torsionTextError ||
            rebarTextError ||
            roS1TextError ||
            roLTextError
        ) {
            setError(projectNameTextError ||
                beamLevelTextError ||
                beamNumberTextError ||
                rebarPositionTextError ||
                concreteTextError ||
                alphaCCTextError ||
                gammaMCTextError ||
                steelTextError ||
                gammaMSTextError ||
                EsTextError ||
                widthTextError ||
                heightTextError ||
                d1TextError ||
                bendingMomentTextError ||
                shearForceTextError ||
                torsionTextError ||
                rebarTextError ||
                roS1TextError ||
                roLTextError
            );

            setTimeout(() => {
                setError('');
            }, 5000);

            return;
        };


        beamService
            .addNewBeam(
                projectName,
                Number(beamLevel),
                beamNumberString,
                rebarPosition,
                concreteGrade,
                Number(alphaCC),
                Number(gammaMC),
                steelGrade,
                Number(gammaMS),
                Number(steelModulus),
                Number(width),
                Number(height),
                Number(d1),
                Number(mEd),
                Number(vEd),
                Number(tEd),
                Number(rebarDiameter),
            )
            .then(responce => {
                if (responce.statusText === 'OK') {
                    navigate('/beams');
                }
            })
            .catch(console.log);
    }



    return (
        <>
            <h1 style={{ color: 'red' }}>The module "New Beam2" is to substitute "New Beam"</h1>

            <BeamInfo
                projectName={projectName}
                setProjectName={setProjectName}
                beamLevel={beamLevel}
                setBeamLevel={setBeamLevel}
                beamNumberString={beamNumberString}
                setbeamNumberString={setbeamNumberString}
                setRebarPosition={setRebarPosition}
            />


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
                setHeight={setHeight}
                height={height}
                setD1={setD1}
                d1={d1}
                d={d}
                setMEd={setMEd}
                mEd={mEd}
                setVEd={setVEd}
                vEd={vEd}
                setTEd={setTEd}
                tEd={tEd}
            />


            <BendingCalcs01
                miu={miu}
                ksi={ksi}
                x={x}
                ksiMax={ksiMax}
                xMax={xMax}
                roLMin={roLMin}
                roS1={roS1}
                roLMax={roLMax}
                ceta={ceta}
                z={z}
            />


            <BendingCalcs02
                As1={As1}
                setRebarDiameter={setRebarDiameter}
                As1_1={As1_1}
                numberOfRebarsNeeded={numberOfRebarsNeeded}
                As1Provided={As1Provided}
                roL={roL}
                roLMax={roLMax}
                Fc={Fc}
                fyd={fyd}
                fctk95={fctk95}
                fctk05={fctk05}
                width={width}
                height={height}
                structuralData={structuralData}
            />


            {error
                ? (
                    <DivErrorStyled >
                        <PErrorStyled>{error}</PErrorStyled>
                    </DivErrorStyled>
                )
                : (<></>)
            }


            <ButtonStyled onClick={onSubmitHandler}>Save</ButtonStyled>
        </>
    );
}


export default NewBeam2;
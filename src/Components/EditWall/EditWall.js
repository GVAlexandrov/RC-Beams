import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import * as structuralData from '../../services/structuralData';
import * as wallService from '../../services/services';

import WallInfo from './WallInfo';
import WallCanvas from './WallCanvas';
import MaterialsInfo from '../NewBeam2/MaterialsInfo01';
import GeometryAndForces from './GeometryAndForces';
import GeometryCanvas from './GeometryCanvas';

import validateNewElements from '../../validations/newDataValidations';

import { fcdCalculate, fcmCalculate, fctmCalculate, fydCalculate, } from '../../services/formulas';

const EditWall = () => {
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
    let [d2, setD2] = useState(0);
    let [d3, setD3] = useState(0);
    let [d4, setD4] = useState(0);
    let [d5, setD5] = useState(0);

    let [error, setError] = useState('');
    let [wall, setWall] = useState(null);

    const navigate = useNavigate();

    let { wallID } = useParams();

    useEffect(() => {
        wallService.getOneWall(wallID)
            .then(wallObj => setWall(wallObj))
    }, []);

    useEffect(() => {
        setProjectName(wall?.projectName || '');
        setWallLevel(wall?.wallLevel || 0);
        setWallNumberString(wall?.wallNumberString || '');
        setConcreteGrade(wall?.concrete || '');
        setAlphaCC(wall?.alphaCC || 0);
        setGammaMC(wall?.gammaMC || 0);
        setSteelGrade(wall?.steel || '');
        setGammaMS(wall?.gammaMS || 0);
        setSteelModulus(wall?.steelModulus || 0);
        setWidth(wall?.width || 0);
        setLength(wall?.length || 0);
        setD1(wall?.d1 || 0);
        setRebarAreaEndZone(wall?.rebarAreaEndZone || 0);
        setRebarAreaMiddleZone(wall?.rebarAreaMiddleZone || 0);
    }, [wall]);


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


    const onSubmitHandler = (e) => {
        e.preventDefault();

        const projectNameTextError = validateNewElements.projectName(projectName);
        const wallLevelTextError = validateNewElements.beamLevel(wallLevel);
        const wallNumberTextError = validateNewElements.beamNumber(wallNumberString);
        const concreteTextError = validateNewElements.concrete(fck);
        const alphaCCTextError = validateNewElements.alphaCC(alphaCC);
        const gammaMCTextError = validateNewElements.gammaMC(gammaMC);
        const steelTextError = validateNewElements.steel(fy);
        const gammaMSTextError = validateNewElements.gammaMS(gammaMS);
        const EsTextError = validateNewElements.Es(steelModulus);
        const lengthTextError = validateNewElements.height(length.valueOf());
        const widthTextError = validateNewElements.width(width.valueOf());
        const d1TextError = validateNewElements.d1(d1.valueOf());
        const rebarAreaEndZoneTextError = validateNewElements.rebarArea(rebarAreaEndZone.valueOf());
        const rebarAreaMiddleZoneTextError = validateNewElements.rebarArea(rebarAreaMiddleZone.valueOf());


        if (projectNameTextError ||
            wallLevelTextError ||
            wallNumberTextError ||
            concreteTextError ||
            alphaCCTextError ||
            gammaMCTextError ||
            steelTextError ||
            gammaMSTextError ||
            EsTextError ||
            lengthTextError ||
            widthTextError ||
            d1TextError ||
            rebarAreaEndZoneTextError ||
            rebarAreaMiddleZoneTextError
        ) {
            setError(projectNameTextError ||
                wallLevelTextError ||
                wallNumberTextError ||
                concreteTextError ||
                steelTextError ||
                alphaCCTextError ||
                gammaMCTextError ||
                gammaMSTextError ||
                EsTextError ||
                widthTextError ||
                lengthTextError ||
                d1TextError ||
                rebarAreaEndZoneTextError ||
                rebarAreaMiddleZoneTextError
            );

            setTimeout(() => {
                setError('');
            }, 5000);

            return;
        };


        if (!window.confirm('Are you sure you want to EDIT this item?')) {
            return;
        };

        wallService
            .editWall(
                projectName,
                Number(wallLevel),
                wallNumberString,
                concreteGrade,
                Number(alphaCC),
                Number(gammaMC),
                steelGrade,
                Number(gammaMS),
                Number(steelModulus),
                Number(width),
                Number(length),
                Number(d1),
                Number(rebarAreaEndZone),
                Number(rebarAreaMiddleZone),
                wallID
            )
            .then(responce => {
                if (responce.statusText === 'OK') {
                    navigate('/walls');
                }
            })
            .catch(console.log);
    }

    return (
        <>
            <h1>Edit Wall</h1>

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
                wall={wall}
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
                wall={wall}
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
                setD2={setD2}
                d2={d2}
                setD3={setD3}
                d3={d3}
                setD4={setD4}
                d4={d4}
                setD5={setD5}
                d5={d5}
            />

            <GeometryCanvas
                width={width}
                length={length}
                d1={d1}
                d2={d2}
                d3={d3}
                d4={d4}
                d5={d5}
                rebarAreaEndZone={rebarAreaEndZone}
                rebarAreaMiddleZone={rebarAreaMiddleZone}
            />

            <WallCanvas
                width={width}
                length={length}
                d1={d1}
                d2={d2}
                d3={d3}
                d4={d4}
                d5={d5}
                fyd={fyd}
                fcd={fcd}
                steelModulus={steelModulus}
                rebarAreaEndZone={rebarAreaEndZone}
                rebarAreaMiddleZone={rebarAreaMiddleZone}
                epsilonYD={epsilonYD}
            />

            {error
                ? (
                    <DivErrorStyled >
                        <PErrorStyled>{error}</PErrorStyled>
                    </DivErrorStyled>
                )
                : (<></>)
            }

            <br></br>
            <ButtonStyled onClick={onSubmitHandler}>Save</ButtonStyled>
            <ButtonStyled >Cancel</ButtonStyled>
        </>
    )
}


const ButtonStyled = styled.button`
display: inline-block;
margin:20px auto;
margin-bottom:20px;
font-size:16px;
background:#bdbbb7;
padding: 10px 50px;
border-radius:5px;
border-color:black;
cursor: pointer;
&:hover{
background-color:#969592;
}
&:active {
background-color:#bdbbb7;
/* background-color:black;
color:red;
border-color:red; */
}
`;


const DivErrorStyled = styled.span`
color:red;
background-color:white;
font-size:20px;
/* font-weight: bold; */
border: 1.5px solid red;
border-top-right-radius:15px;
border-bottom-left-radius:15px;
display: inline-block;
`;

const PErrorStyled = styled.p`
margin:auto;
padding:10px;
`;

export default EditWall;
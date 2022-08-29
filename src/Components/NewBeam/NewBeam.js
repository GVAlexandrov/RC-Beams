import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as beamService from '../../services/services';
import validateNewElements from '../../validations/newDataValidations';
import * as structuralData from '../../services/structuralData';
import { MainStyled, DivStyled, FormStyled, LabelStyledName, LabelStyledDimension, DivErrStyled, ButtonStyled } from './newBeamStyled'
import { fcdCalculate, fcmCalculate, fctmCalculate, fydCalculate } from '../../services/formulas';


const NewBeam = () => {
    let [heightError, setHeightError] = useState('');
    let [widthError, setWidthError] = useState('');
    let [concreteError, setConcreteError] = useState('');
    let [steelError, setSteelError] = useState('');
    let [rebarError, setRebarError] = useState('');

    let [fck, setFck] = useState(0);
    let [fy, setFy] = useState(0);
    let [alphaCC, setAlphaCC] = useState(0);
    let [gammaMC, setGammaMC] = useState(0);
    let [gammaMS, setGammaMS] = useState(0);
    let fcd = 0;
    let fcm = 0;
    let fctm = 0;
    let fyd = 0;

    const navigate = useNavigate();

    const onNewBeamSubmitHandler = (e) => {
        e.preventDefault();

        const { height, width, bendingMoment, concrete, steel, rebar } = e.target;

        const heightTextError = validateNewElements.height(height.value);
        const widthTextError = validateNewElements.width(width.value);
        const concreteTextError = validateNewElements.concrete(concrete.value);
        const steelTextError = validateNewElements.steel(steel.value);
        const rebarTextError = validateNewElements.rebar(rebar.value);

        if (heightTextError) {
            setHeightError(heightTextError);
            setTimeout(() => {
                setHeightError('');
            }, 1500);
        };

        if (widthTextError) {
            setWidthError(widthTextError);
            setTimeout(() => {
                setWidthError('');
            }, 1500);
        };

        if (concreteTextError) {
            setConcreteError(concreteTextError);
            setTimeout(() => {
                setConcreteError('');
            }, 1500);
        };

        if (steelTextError) {
            setSteelError(steelTextError);
            setTimeout(() => {
                setSteelError('');
            }, 1500);
        };

        if (rebarTextError) {
            setRebarError(rebarTextError);
            setTimeout(() => {
                setRebarError('');
            }, 1500);
        };

        if (heightTextError || widthTextError || concreteTextError || steelTextError || rebarTextError) return;

        beamService
            .addNewBeam(
                Number(height.value),
                Number(width.value),
                Number(bendingMoment.value),
                concrete.value,
                steel.value,
                Number(rebar.value),
            )
            .then(responce => {
                if (responce.statusText === 'OK') {
                    navigate('/beams');
                }
            })
            .catch(console.log);
    }

    fcd = fcdCalculate(fck, alphaCC, gammaMC);
    fcm = fcmCalculate(fck);
    fctm = fctmCalculate(fck, fcm);
    fyd = fydCalculate(fy, gammaMS);

    return (
        <MainStyled>
            <FormStyled onSubmit={onNewBeamSubmitHandler}>
                <h1>New Beam</h1>

                <DivStyled >
                    <LabelStyledName htmlFor="level">Level</LabelStyledName>
                    <input id="level" name='level' type="text" placeholder="First floor / +3.10" />
                    <LabelStyledDimension htmlFor="level">[-]</LabelStyledDimension>
                </DivStyled>

                <DivStyled >
                    <LabelStyledName htmlFor="beamsNumber">Beam's number</LabelStyledName>
                    <input id="beamsNumber" name='beamsNumber' type="text" placeholder="B01" />
                    <LabelStyledDimension htmlFor="beamsNumber">[-]</LabelStyledDimension>
                </DivStyled>

                <DivStyled >
                    <LabelStyledName htmlFor="height">Height</LabelStyledName>
                    <input id="height" name='height' type="number" placeholder="500" />
                    <LabelStyledDimension htmlFor="height">[mm]</LabelStyledDimension>
                </DivStyled>

                {heightError
                    ? (
                        <DivErrStyled >
                            <p>{heightError}</p>
                        </DivErrStyled>
                    )
                    : (<></>)
                }

                <DivStyled>
                    <LabelStyledName htmlFor="width">Width</LabelStyledName>
                    <input id="width" name='width' type="number" placeholder="250" />
                    <LabelStyledDimension htmlFor="width">[mm]</LabelStyledDimension>
                </DivStyled>

                {widthError
                    ? (
                        <DivErrStyled >
                            <p>{widthError}</p>
                        </DivErrStyled>
                    )
                    : (<></>)
                }

                <DivStyled>
                    <LabelStyledName htmlFor="bendingMoment">Bending Moment</LabelStyledName>
                    <input id="bendingMoment" name='bendingMoment' type="number" placeholder="10" />
                    <LabelStyledDimension htmlFor="bendingMoment">[kN.m]</LabelStyledDimension>
                </DivStyled>

                <DivStyled>
                    <LabelStyledName htmlFor="shearForce">Shear Force</LabelStyledName>
                    <input id="shearForce" name='shearForce' type="number" placeholder="10" />
                    <LabelStyledDimension htmlFor="shearForce">[kN]</LabelStyledDimension>
                </DivStyled>

                <DivStyled>
                    <LabelStyledName htmlFor="torsion">Torsion</LabelStyledName>
                    <input id="torsion" name='torsion' type="number" placeholder="10" />
                    <LabelStyledDimension htmlFor="torsion">[kN.m]</LabelStyledDimension>
                </DivStyled>

                <DivStyled>
                    <LabelStyledName htmlFor="concrete">Concrete</LabelStyledName>
                    <select name="concrete" id="concrete" onChange={e => setFck(Number(e.target.value.slice(1, 3)))}>
                        <option disabled selected hidden value="default">Select concrete...</option>
                        {structuralData.concreteArr.map((concreteGrade) => {
                            return <option value={concreteGrade}>{concreteGrade}</option>
                        })}
                    </select>
                    <LabelStyledDimension htmlFor="concrete">[MPa]</LabelStyledDimension>
                </DivStyled>

                {concreteError
                    ? (
                        <DivErrStyled >
                            <p>{concreteError}</p>
                        </DivErrStyled>
                    )
                    : (<></>)
                }

                <DivStyled>
                    <LabelStyledName htmlFor="fck">fck</LabelStyledName>
                    <input id="fck" name='fck' type="text" value={fck} />
                    <LabelStyledDimension htmlFor="fck">[MPa]</LabelStyledDimension>
                </DivStyled>

                <DivStyled>
                    <LabelStyledName htmlFor="alphaCC">αcc</LabelStyledName>
                    <select name="alphaCC" id="alphaCC" onChange={e => setAlphaCC(e.target.value)}>
                        <option disabled selected hidden value="default">Select αcc...</option>
                        {structuralData.alphaCCArr.map((alphaCC) => {
                            return <option value={alphaCC}>{alphaCC}</option>
                        })}
                    </select>
                    <LabelStyledDimension htmlFor="concrete">[MPa]</LabelStyledDimension>
                </DivStyled>

                <DivStyled>
                    <LabelStyledName htmlFor="gammaMC">γm,c</LabelStyledName>
                    <select name="gammaMC" id="gammaMC" onChange={e => setGammaMC(e.target.value)}>
                        <option disabled selected hidden value="default">Select γm,c...</option>
                        {structuralData.gammaMCArr.map((gammaMC) => {
                            return <option value={gammaMC}>{gammaMC}</option>
                        })}
                    </select>
                    <LabelStyledDimension htmlFor="concrete">[MPa]</LabelStyledDimension>
                </DivStyled>

                <DivStyled>
                    <LabelStyledName htmlFor="fcd">fcd</LabelStyledName>
                    <input id="fcd" name='fcd' type="text" value={(fcd && fcd !== Infinity) ? fcd.toFixed(2) : 'More info needed'} />
                    <LabelStyledDimension htmlFor="fcd">[MPa]</LabelStyledDimension>
                </DivStyled>

                <DivStyled>
                    <LabelStyledName htmlFor="fcm">fcm</LabelStyledName>
                    <input id="fcm" name='fcm' type="text" value={fcm > 8 ? fcm : 'More info needed'} />
                    <LabelStyledDimension htmlFor="fcm">[MPa]</LabelStyledDimension>
                </DivStyled>

                <DivStyled>
                    <LabelStyledName htmlFor="fctm">fctm</LabelStyledName>
                    <input id="fctm" name='fctm' type="text" value={fctm.toFixed(2)} />
                    <LabelStyledDimension htmlFor="fctm">[MPa]</LabelStyledDimension>
                </DivStyled>

                <DivStyled>
                    <LabelStyledName htmlFor="steel">Steel</LabelStyledName>
                    <select name="steel" id="steel" onChange={e => setFy(Number(e.target.value.slice(1, 4)))}>
                        <option disabled selected hidden value="default">Select steel...</option>
                        {structuralData.steelArr.map((steelGrade) => {
                            return <option value={steelGrade}>{steelGrade}</option>
                        })}
                    </select>
                    <LabelStyledDimension htmlFor="steel">[MPa]</LabelStyledDimension>
                </DivStyled>

                {steelError
                    ? (
                        <DivErrStyled >
                            <p>{steelError}</p>
                        </DivErrStyled>
                    )
                    : (<></>)
                }

                <DivStyled>
                    <LabelStyledName htmlFor="fy">fy</LabelStyledName>
                    <input id="fy" name='fy' type="text" value={fy} />
                    <LabelStyledDimension htmlFor="fy">[MPa]</LabelStyledDimension>
                </DivStyled>

                <DivStyled>
                    <LabelStyledName htmlFor="gammaMS">γm,s</LabelStyledName>
                    <select name="gammaMS" id="gammaMS" onChange={e => setGammaMS(e.target.value)}>
                        <option disabled selected hidden value="default">Select γm,s...</option>
                        {structuralData.gammaMSArr.map((gammaMS) => {
                            return <option value={gammaMS}>{gammaMS}</option>
                        })}
                    </select>
                    <LabelStyledDimension htmlFor="concrete">[MPa]</LabelStyledDimension>
                </DivStyled>

                <DivStyled>
                    <LabelStyledName htmlFor="fyd">fyd</LabelStyledName>
                    <input id="fyd" name='fyd' type="text" value={(fyd && fyd !== Infinity && !isNaN(fyd)) ? fyd.toFixed(0) : 'More info needed'} />
                    <LabelStyledDimension htmlFor="fyd">[MPa]</LabelStyledDimension>
                </DivStyled>

                <DivStyled>
                    <LabelStyledName htmlFor="rebar">Rebar diameter</LabelStyledName>
                    <select name="rebar" id="rebar">
                        <option disabled selected hidden value="default">Select rebar...</option>
                        {structuralData.rebarArr.map((rebarDiameter) => {
                            return <option value={rebarDiameter}>{rebarDiameter}</option>
                        })}
                    </select>
                    <LabelStyledDimension htmlFor="rebar">[mm]</LabelStyledDimension>
                </DivStyled>
                {rebarError
                    ? (
                        <DivErrStyled >
                            <p>{rebarError}</p>
                        </DivErrStyled>
                    )
                    : (<></>)
                }

                <ButtonStyled type="Submit">Save</ButtonStyled>

            </FormStyled>
        </MainStyled >
    );

}

export default NewBeam;
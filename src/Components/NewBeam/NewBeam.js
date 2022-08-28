import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as beamService from '../../services/services';
import validateNewElements from '../../validations/newDataValidations';
import * as structuralData from '../../services/structuralData';
import { MainStyled, DivStyled, FormStyled, LabelStyledName, LabelStyledDimension, DivErrStyled, ButtonStyled } from './newBeamStyled'


const NewBeam = () => {
    let [heightError, setHeightError] = useState('');
    let [widthError, setWidthError] = useState('');
    let [concreteError, setConcreteError] = useState('');
    let [steelError, setSteelError] = useState('');
    let [rebarError, setRebarError] = useState('');

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

    return (
        <MainStyled>
            <FormStyled onSubmit={onNewBeamSubmitHandler}>
                <h1>New Beam</h1>

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
                    <select name="concrete" id="concrete">
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
                    <LabelStyledName htmlFor="steel">Steel</LabelStyledName>
                    <select name="steel" id="steel">
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
        </MainStyled>
    );

}

export default NewBeam;
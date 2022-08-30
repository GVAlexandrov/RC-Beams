import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as beamService from '../../services/services';
import validateNewElements from '../../validations/newDataValidations';
import * as structuralData from '../../services/structuralData';

import styled from 'styled-components';
// import Beams from '../Beams/Beams';

const EditBeam = () => {
    let [heightError, setHeightError] = useState('');
    let [widthError, setWidthError] = useState('');
    let [concreteError, setConcreteError] = useState('');
    let [steelError, setSteelError] = useState('');
    let [rebarError, setRebarError] = useState('');
    let [beam, setBeam] = useState('');

    const navigate = useNavigate();

    let { beamId } = useParams();

    useEffect(() => {
        beamService.getOneBeam(beamId)
            .then(beamObj => {
                setBeam(beamObj);
            })
    }, [beamId]);

    const onEditBeamSubmitHandler = (e) => {
        e.preventDefault();

        const { level, beamsNumber, height, width, bendingMoment, concrete, steel, rebar } = e.target;

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
            .editBeam(
                level.value,
                beamsNumber.value,
                Number(height.value),
                Number(width.value),
                Number(bendingMoment.value),
                concrete.value,
                steel.value,
                rebar.value,
                beamId
            )
            .then(response => {
                if (response.statusText === 'OK') {
                    navigate('/beams');
                }
            })
            .catch(console.log);
    }

    return (
        <MainStyled>
            <FormStyled onSubmit={onEditBeamSubmitHandler}>
                <h1>Edit Beam</h1>

                <DivStyled >
                    <label htmlFor="level">Level</label>
                    <input id="level" name='level' type="text" placeholder="+3.10" defaultValue={beam.level} />
                    <label htmlFor="level">[-]</label>
                </DivStyled>

                <DivStyled >
                    <label htmlFor="beamsNumber">Beam's Number</label>
                    <input id="beamsNumber" name='beamsNumber' type="text" placeholder="500" defaultValue={beam.beamsNumber} />
                    <label htmlFor="beamsNumber">[mm]</label>
                </DivStyled>

                <DivStyled >
                    <label htmlFor="height">Height</label>
                    <input id="height" name='height' type="number" placeholder="500" defaultValue={beam.height} />
                    <label htmlFor="height">[mm]</label>
                </DivStyled>

                {
                    heightError
                        ? (
                            <DivErrStyled >
                                <p>{heightError}</p>
                            </DivErrStyled>
                        )
                        : (<></>)
                }

                <DivStyled>
                    <label htmlFor="width">Width</label>
                    <input id="width" name='width' type="number" placeholder="250" defaultValue={beam.width} />
                    <label htmlFor="width">[mm]</label>
                </DivStyled>

                {
                    widthError
                        ? (
                            <DivErrStyled >
                                <p>{widthError}</p>
                            </DivErrStyled>
                        )
                        : (<></>)
                }

                <DivStyled>
                    <label htmlFor="bendingMoment">BM</label>
                    <input id="bendingMoment" name='bendingMoment' type="number" placeholder="250" defaultValue={beam.bendingMoment} />
                    <label htmlFor="bendingMoment">[kN.m]</label>
                </DivStyled>

                {/* {
                    widthError
                        ? (
                            <DivErrStyled >
                                <p>{widthError}</p>
                            </DivErrStyled>
                        )
                        : (<></>)
                } */}

                <DivStyled>
                    <label htmlFor="concrete">Concrete</label>
                    <select name="concrete" id="concrete">
                        {structuralData.concreteArr.map((concreteGrade) => {
                            return beam.concrete === concreteGrade
                                ? <option selected value={concreteGrade}>{concreteGrade}</option>
                                : <option value={concreteGrade}>{concreteGrade}</option>
                        })}
                    </select>
                    <label htmlFor="concrete">[MPa]</label>
                </DivStyled>

                {
                    concreteError
                        ? (
                            <DivErrStyled >
                                <p>{concreteError}</p>
                            </DivErrStyled>
                        )
                        : (<></>)
                }

                <DivStyled>
                    <label htmlFor="steel">Steel</label>
                    <select name="steel" id="steel">
                        {structuralData.steelArr.map((steelGrade) => {
                            return beam.steel === steelGrade
                                ? <option selected value={steelGrade}>{steelGrade}</option>
                                : <option value={steelGrade}>{steelGrade}</option>
                        })}
                    </select>
                    <label htmlFor="steel">[MPa]</label>
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
                    <label htmlFor="rebar">Rebar diameter</label>
                    <select name="rebar" id="rebar" >
                        {structuralData.rebarArr.map((rebarDiameter) => {
                            return Number(beam.rebar) === rebarDiameter
                                ? <option selected value={rebarDiameter}>{rebarDiameter}</option>
                                : <option value={rebarDiameter}>{rebarDiameter}</option>
                        })}
                    </select>
                    <label htmlFor="rebar">[mm]</label>
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

const MainStyled = styled.main`
position:relative;
margin:auto;
padding-bottom:20px;
width:60%;
max-width:500px;
min-width:300px;
border: 2px solid black;
border-top-left-radius:30px;
border-bottom-right-radius:30px;
`;

const DivStyled = styled.div`
padding:5px 0px;
font-size: 20px;
height:40px;
vertical-align:bottom;

&:hover{
    background:black;
    color:white;
}
`;

const FormStyled = styled.form`
margin:auto;
max-width:400px;
`;

const DivErrStyled = styled.div`
    color:darkred;
    font-style: italic;
    margin-top:0px;
`

const ButtonStyled = styled.button`
font-weight:bold;
color:white;
background:black;
padding: 10px 10px;
border-radius:5px;
border-color:red;
cursor: pointer;
`;

export default EditBeam;
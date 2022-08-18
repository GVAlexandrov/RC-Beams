import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as beamService from '../../services/services';
import validateNewElements from '../../validations/newDataValidations';
import * as structuralData from '../../services/structuralData';

import styled from 'styled-components';
// import Beams from '../Beams/Beams';

const NewBeam = () => {
    let [heightError, setHeightError] = useState('');
    let [widthError, setWidthError] = useState('');
    let [concreteError, setConcreteError] = useState('');
    let [steelError, setSteelError] = useState('');
    let [rebarError, setRebarError] = useState('');

    const navigate = useNavigate();

    const onNewBeamSubmitHandler = (e) => {
        e.preventDefault();

        const { height, width, concrete, steel, rebar } = e.target;

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
        <main>
            <FormStyled onSubmit={onNewBeamSubmitHandler}>
                <h1>New Beam</h1>

                <DivStyled >
                    <label htmlFor="height">Height</label>
                    <input id="height" name='height' type="number" placeholder="500" />
                    <label htmlFor="height">[mm]</label>
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
                    <label htmlFor="width">Width</label>
                    <input id="width" name='width' type="number" placeholder="250" />
                    <label htmlFor="width">[mm]</label>
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
                    <label htmlFor="concrete">Concrete</label>
                    <select name="concrete" id="concrete">
                        <option disabled selected hidden value="default">Select concrete...</option>
                        {structuralData.concreteArr.map((concreteGrade) => {
                            return <option value={concreteGrade}>{concreteGrade}</option>
                        })}
                    </select>
                    <label htmlFor="concrete">[MPa]</label>
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
                    <label htmlFor="steel">Steel</label>
                    <select name="steel" id="steel">
                        <option disabled selected hidden value="default">Select steel...</option>
                        {structuralData.steelArr.map((steelGrade) => {
                            return <option value={steelGrade}>{steelGrade}</option>
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
                    <select name="rebar" id="rebar">
                        <option disabled selected hidden value="default">Select rebar...</option>
                        {structuralData.rebarArr.map((rebarDiameter) => {
                            return <option value={rebarDiameter}>{rebarDiameter}</option>
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

                <button type="Submit">Save</button>

            </FormStyled>
        </main>
    );

}

const DivStyled = styled.div`
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

export default NewBeam;
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as beamService from '../../services/services';
import validateNewElements from '../../validations/newDataValidations';

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
                width.value,
                concrete.value,
                steel.value,
                rebar.value,
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
                <h1>Edit Beam</h1>

                <DivStyled >
                    <label htmlFor="height">Height</label>
                    <input id="height" name='height' type="number" placeholder="500" value={beam.height} />
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
                    <input id="width" name='width' type="number" placeholder="250" value={beam.width} />
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
                        <option selected value={beam.concrete}>{beam.concrete}</option>

                        <option value="C20/25">C20/25</option>
                        <option value="C25/30">C25/30</option>
                        <option value="C30/37">C30/37</option>
                        <option value="C35/45">C35/45</option>
                    </select>
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
                        <option selected value={beam.steel}>{beam.steel}</option>

                        <option value="B420">B420</option>
                        <option value="B500">B500</option>
                    </select>
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
                    <label htmlFor="rebar">Rebar</label>
                    <select name="rebar" id="rebar">
                        <option selected value={beam.rebar}>{beam.rebar}</option>

                        <option value="6.5">6.5</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="10">12</option>
                        <option value="10">14</option>
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

export default EditBeam;
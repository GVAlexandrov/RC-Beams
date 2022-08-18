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

    console.log(beam);

    const onEditBeamSubmitHandler = (e) => {
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
            .editBeam(
                Number(height.value),
                width.value,
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

    const concreteArr = ['C20/25', 'C25/30', 'C30/37', 'C35/45', 'C50/60'];
    const steelArr = ['B420', 'B500'];
    const rebarArr = [6.5, 8, 10, 12, 14, 16, 18, 20, 22, 25, 28, 32];

    return (
        <main>
            <FormStyled onSubmit={onEditBeamSubmitHandler}>
                <h1>Edit Beam</h1>

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
                    <label htmlFor="concrete">Concrete</label>
                    <select name="concrete" id="concrete">
                        {concreteArr.map((concreteGrade) => {
                            return beam.concrete === concreteGrade
                                ? <option selected value={concreteGrade}>{concreteGrade}</option>
                                : <option value={concreteGrade}>{concreteGrade}</option>
                        })}
                    </select>
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
                        {steelArr.map((steelGrade) => {
                            return beam.steel === steelGrade
                                ? <option selected value={steelGrade}>{steelGrade}</option>
                                : <option value={steelGrade}>{steelGrade}</option>
                        })}
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
                    <select name="rebar" id="rebar" >
                        {rebarArr.map((rebarDiameter) => {
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

                <button type="Submit">Save</button>

            </FormStyled>
        </main >
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
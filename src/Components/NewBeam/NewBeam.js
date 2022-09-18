import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as beamService from '../../services/services';
import validateNewElements from '../../validations/newDataValidations';
import { MainStyled, FormStyled, ButtonStyled, SectionDivStyledTop, SectionDivStyledBottom } from './newBeamStyled';
import { BeamsInfo } from './BeamsInfo';
import { BeamsGeometry } from './BeamsGeometry';
import { Concrete } from './Concrete';
import { Steel } from './Steel';
import { Forces } from './Forces';
import { Rebars } from './Rebars';


const NewBeam = () => {
    let [heightError, setHeightError] = useState('');
    let [widthError, setWidthError] = useState('');
    let [concreteError, setConcreteError] = useState('');
    let [steelError, setSteelError] = useState('');
    let [rebarError, setRebarError] = useState('');

    const navigate = useNavigate();

    const onNewBeamSubmitHandler = (e) => {
        e.preventDefault();

        const { level, beamsNumber, height, width, bendingMoment, shearForce, torsion, concrete, steel, rebar, numberRebars } = e.target;

        // ERRORS_____________________________________________________
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

        // NEW BEAM ADDED_____________________________________________________
        beamService
            .addNewBeam(
                level.value,
                beamsNumber.value,
                Number(height.value),
                Number(width.value),
                Number(bendingMoment.value),
                Number(shearForce.value),
                Number(torsion.value),
                concrete.value,
                steel.value,
                Number(rebar.value),
                Number(numberRebars.value),
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
                <SectionDivStyledTop>
                    <h1>New Beam</h1>
                </SectionDivStyledTop>

                <BeamsInfo />

                <BeamsGeometry
                    heightError={heightError}
                    widthError={widthError}
                />

                <Forces />

                <Concrete
                    concreteError={concreteError}
                />

                <Steel
                    steelError={steelError}
                />

                <Rebars
                    rebarError={rebarError}
                />

                <SectionDivStyledBottom>
                    <ButtonStyled type="Submit">Save</ButtonStyled>
                </SectionDivStyledBottom >

            </FormStyled>
        </MainStyled >
    );

}

export default NewBeam;
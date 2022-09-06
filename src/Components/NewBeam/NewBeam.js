import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as beamService from '../../services/services';
import validateNewElements from '../../validations/newDataValidations';
import * as structuralData from '../../services/structuralData';
import { MainStyled, FormStyled, ButtonStyled } from './newBeamStyled'
import { BeamsInfo } from './BeamsInfo'
import { BeamsGeometry } from './BeamsGeometry'
import { Concrete } from './Concrete'
import { Steel } from './Steel'
import { Forces } from './Forces'
import { Rebars } from './Rebars'
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

        const { level, height, width, bendingMoment, concrete, steel, rebar, beamsNumber } = e.target;

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
                level.value,
                beamsNumber.value,
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

                <BeamsInfo />

                <BeamsGeometry
                    heightError={heightError}
                    widthError={widthError}
                />

                <Forces />

                <Concrete
                    structuralData={structuralData}
                    setFck={setFck}
                    concreteError={concreteError}
                    fck={fck}
                    setAlphaCC={setAlphaCC}
                    setGammaMC={setGammaMC}
                    fcd={fcd}
                    fcm={fcm}
                    fctm={fctm}
                />

                <Steel
                    structuralData={structuralData}
                    setFy={setFy}
                    steelError={steelError}
                    setGammaMS={setGammaMS}
                    fyd={fyd}
                    fy={fy}
                />

                <Rebars
                    structuralData={structuralData}
                    rebarError={rebarError}
                />

                <ButtonStyled type="Submit">Save</ButtonStyled>

            </FormStyled>
        </MainStyled >
    );

}

export default NewBeam;
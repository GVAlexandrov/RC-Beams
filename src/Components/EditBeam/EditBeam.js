import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as beamService from '../../services/services';
import validateNewElements from '../../validations/newDataValidations';
import { MainStyled, FormStyled, SectionDivStyledTop, SectionDivStyledBottom, ButtonStyled } from '../NewBeam/newBeamStyled';
import { BeamsInfo } from '../NewBeam/BeamsInfo';
import { BeamsGeometry } from '../NewBeam/BeamsGeometry';
import { Forces } from '../NewBeam/Forces';
import { Concrete } from '../NewBeam/Concrete';
import { Steel } from '../NewBeam/Steel';
import { Rebars } from '../NewBeam/Rebars';


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
            .then(beamObj => setBeam(beamObj))
    }, [beamId]);

    const onEditBeamSubmitHandler = (e) => {
        e.preventDefault();
        if (!window.confirm('Are you sure you want to EDIT this item?')) {
            return;
        };

        const { level, beamsNumber, height, width, bendingMoment, shearForce, torsion, concrete, steel, rebar, numberRebars } = e.target;

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
                Number(shearForce.value),
                Number(torsion.value),
                concrete.value,
                steel.value,
                Number(rebar.value),
                Number(numberRebars.value),
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
                <SectionDivStyledTop>
                    <h1>Edit Beam</h1>
                </SectionDivStyledTop>

                <BeamsInfo
                    level={beam.level}
                    beamsNumber={beam.beamsNumber}
                />

                <BeamsGeometry
                    heightError={heightError}
                    widthError={widthError}
                    height={beam.height}
                    width={beam.width}
                />

                <Forces
                    bendingMoment={beam.bendingMoment}
                    shearForce={beam.shearForce}
                    torsion={beam.torsion}
                />

                <Concrete
                    concreteError={concreteError}
                    concrete={beam.concrete}
                />

                <Steel
                    steelError={steelError}
                    steel={beam.steel}
                />


                <Rebars
                    rebarError={rebarError}
                    rebar={beam.rebar}
                />


                <SectionDivStyledBottom>
                    <ButtonStyled type="Submit">Save</ButtonStyled>
                </SectionDivStyledBottom >

            </FormStyled>
        </MainStyled >
    );

}

export default EditBeam;
import { useState } from 'react';

import { DivStyled, LabelStyledName, LabelStyledDimension, DivErrStyled, InputReadOnlyStyled, H2Styled, SectionDivStyled } from './newBeamStyled';

import { fydCalculate } from '../../services/formulas';

import * as structuralData from '../../services/structuralData';



const Steel = (props) => {
    let [fy, setFy] = useState(0);
    let [gammaMS, setGammaMS] = useState(0);

    let fyd = 0;

    fyd = fydCalculate(fy, gammaMS);

    const steelError = props.steelError;

    return (
        <SectionDivStyled>
            <H2Styled>Steel properties</H2Styled>


            <DivStyled>
                <LabelStyledName htmlFor="steel">Steel</LabelStyledName>
                <select name="steel" id="steel" onChange={e => setFy(Number(e.target.value.slice(1, 4)))}>

                    <option disabled selected hidden value="default">Select steel...</option>

                    {structuralData.steelArr.map((steelGrade) => {
                        return props.steel === steelGrade
                            ? < option selected value={steelGrade} > {steelGrade}</option>
                            : < option value={steelGrade} > {steelGrade}</option>
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
                <LabelStyledName readOnly htmlFor="fy">fy</LabelStyledName>
                <InputReadOnlyStyled readOnly id="fy" name='fy' type="text" value={fy} />
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
                <InputReadOnlyStyled readOnly id="fyd" name='fyd' type="text" value={(fyd && fyd !== Infinity && !isNaN(fyd)) ? fyd.toFixed(0) : ''} />
                <LabelStyledDimension htmlFor="fyd">[MPa]</LabelStyledDimension>
            </DivStyled>
        </SectionDivStyled >
    )
}

export { Steel };
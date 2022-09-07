import { useState } from 'react';

import { DivStyled, LabelStyledName, LabelStyledDimension, DivErrStyled, InputReadOnlyStyled, H2Styled, SectionDivStyled } from './newBeamStyled';

import { fcdCalculate, fcmCalculate, fctmCalculate } from '../../services/formulas';

import * as structuralData from '../../services/structuralData';


const Concrete = (props) => {
    let [fck, setFck] = useState(0);
    let [alphaCC, setAlphaCC] = useState(0);
    let [gammaMC, setGammaMC] = useState(0);
    let fcd = 0;
    let fcm = 0;
    let fctm = 0;

    // if (props.concrete) {
    //     setFck(Number(props.concrete.slice(1, 3)));
    // }

    fcd = fcdCalculate(fck, alphaCC, gammaMC);
    fcm = fcmCalculate(fck);
    fctm = fctmCalculate(fck, fcm);

    const concreteError = props.concreteError;

    return (
        <SectionDivStyled>
            <H2Styled>Concrete properties</H2Styled>

            <DivStyled>
                <LabelStyledName htmlFor="concrete">Concrete</LabelStyledName>
                <select
                    name="concrete"
                    id="concrete"
                    onChange={e => setFck(Number(e.target.value.slice(1, 3)))}
                >

                    {!props.concrete
                        ? <option disabled selected hidden value="default" >
                            Select concrete...
                        </option>
                        : <option disabled hidden value="default" ></option>}


                    {structuralData.concreteArr.map((concreteGrade) => {
                        return props.concrete === concreteGrade
                            ? <option selected value={concreteGrade}>{concreteGrade}</option>
                            : <option value={concreteGrade}>{concreteGrade}</option>
                    })}

                </select>
                <LabelStyledDimension htmlFor="concrete">[-]</LabelStyledDimension>
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
                <InputReadOnlyStyled readOnly id="fck" name='fck' type="text" value={fck} />
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
                <LabelStyledDimension htmlFor="alphaCC">[-]</LabelStyledDimension>
            </DivStyled>


            <DivStyled>
                <LabelStyledName htmlFor="gammaMC">γm,c</LabelStyledName>
                <select name="gammaMC" id="gammaMC" onChange={e => setGammaMC(e.target.value)}>
                    <option disabled selected hidden value="default">Select γm,c...</option>
                    {structuralData.gammaMCArr.map((gammaMC) => {
                        return <option value={gammaMC}>{gammaMC}</option>
                    })}
                </select>
                <LabelStyledDimension htmlFor="gammaMC">[-]</LabelStyledDimension>
            </DivStyled>


            <DivStyled>
                <LabelStyledName htmlFor="fcd">fcd</LabelStyledName>
                <InputReadOnlyStyled readOnly id="fcd" name='fcd' type="text" value={(fcd && fcd !== Infinity) ? fcd.toFixed(2) : ''} />
                <LabelStyledDimension htmlFor="fcd">[MPa]</LabelStyledDimension>
            </DivStyled>


            <DivStyled>
                <LabelStyledName htmlFor="fcm">fcm</LabelStyledName>
                <InputReadOnlyStyled readOnly id="fcm" name='fcm' type="text" value={fcm > 8 ? fcm.toFixed(2) : ''} />
                <LabelStyledDimension htmlFor="fcm">[MPa]</LabelStyledDimension>
            </DivStyled>


            <DivStyled>
                <LabelStyledName htmlFor="fctm">fctm</LabelStyledName>
                <InputReadOnlyStyled readOnly id="fctm" name='fctm' type="text" value={fctm.toFixed(2)} />
                <LabelStyledDimension htmlFor="fctm">[MPa]</LabelStyledDimension>
            </DivStyled>


            <DivStyled>
                <LabelStyledName htmlFor="fctk95">fctk05</LabelStyledName>
                <InputReadOnlyStyled readOnly id="fctk05" name='fctk05' type="text" value={(0.7 * fctm).toFixed(2)} />
                <LabelStyledDimension htmlFor="fctk05">[MPa]</LabelStyledDimension>
            </DivStyled>


            <DivStyled>
                <LabelStyledName readOnly htmlFor="fctk95">fctk95</LabelStyledName>
                <InputReadOnlyStyled readOnly id="fctk95" name='fctk95' type="text" value={(1.3 * fctm).toFixed(2)} />
                <LabelStyledDimension htmlFor="fctk95">[MPa]</LabelStyledDimension>
            </DivStyled>


            <DivStyled>
                <LabelStyledName readOnly htmlFor="Ecm">Ecm</LabelStyledName>
                <InputReadOnlyStyled readOnly id="Ecm" name='Ecm' type="text" value={(22 * (fcm / 10) ** 0.3).toFixed(1)} />
                <LabelStyledDimension htmlFor="Ecm">[GPa]</LabelStyledDimension>
            </DivStyled>
        </SectionDivStyled>
    )
}

export { Concrete };
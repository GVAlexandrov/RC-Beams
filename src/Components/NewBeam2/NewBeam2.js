import { useState } from 'react';
import styled from 'styled-components';

import * as structuralData from '../../services/structuralData';
import { fcdCalculate, fcmCalculate, fctmCalculate, fydCalculate, miuCalculate, ksiCalculate } from '../../services/formulas';

const NewBeam2 = () => {
    let [fck, setFck] = useState(0);
    let [alphaCC, setAlphaCC] = useState(0);
    let [gammaMC, setGammaMC] = useState(0);
    let [fy, setFy] = useState(0);
    let [gammaMS, setGammaMS] = useState(0);
    let [steelModulus, setSteelModulus] = useState(0);
    let [width, setWidth] = useState(0);
    let [height, setHeight] = useState(0);
    let [d1, setD1] = useState(0);
    let [med, setMed] = useState(0);

    // console.log(`${fck} -> ${alphaCC} -> ${gammaMC}`);
    // console.log(`${fy} -> ${gammaMS}`);

    let fcd = 0;
    let fyd = 0;
    let fcm = 0;
    let fctm = 0;
    let fctk05 = 0;
    let fctk95 = 0;
    let Ecm = 0;
    let epsilonYD = 0;

    let d = 0;

    let miu = 0;
    let ksi = 0;
    let ksiMax = 0;
    let xMax = 0;
    let roLMin = 0;
    let roLMax = 0;
    let roS1 = 0;



    fcd = fcdCalculate(fck, alphaCC, gammaMC);
    fyd = fydCalculate(fy, gammaMS);
    fcm = (isNaN(fcmCalculate(fck)) || !isFinite(fcmCalculate(fck)))
        ? 0
        : Number(fcmCalculate(fck));
    fctm = (isNaN(fctmCalculate(fck, fcm)) || !isFinite(fctmCalculate(fck, fcm)))
        ? 0
        : Number(fctmCalculate(fck, fcm));
    fctk05 = (isNaN((0.7 * fctm)) || !isFinite((0.7 * fctm)))
        ? 0
        : Number((0.7 * fctm));
    fctk95 = (isNaN((1.3 * fctm)) || !isFinite((1.3 * fctm)))
        ? 0
        : Number((1.3 * fctm));
    Ecm = (isNaN(22 * (fcm / 10) ** 0.3) || !isFinite(22 * (fcm / 10) ** 0.3))
        ? 0
        : Number(22 * (fcm / 10) ** 0.3);
    epsilonYD = (isNaN(fyd / steelModulus) || !isFinite(fyd / steelModulus))
        ? '-'
        : (fyd / steelModulus);


    d = (height - d1);


    miu = (isNaN(miuCalculate(fcd, width, d, med)) || !isFinite(miuCalculate(fcd, width, d, med)))
        ? 0
        : Number(miuCalculate(fcd, width, d, med));
    ksi = isNaN(ksiCalculate(fcd, width, d, med))
        ? 0
        : Number(ksiCalculate(fcd, width, d, med));
    ksiMax = isNaN((3.5 / (3.5 + epsilonYD)))
        ? '-'
        : (3.5 / (3.5 + epsilonYD));
    xMax = isNaN((ksiMax * d))
        ? '-'
        : (ksiMax * d);
    roLMin = (isNaN(Number(Math.max(100 * 0.26 * fctm / fy, 0.13))) || !isFinite(Number(Math.max(100 * 0.26 * fctm / fy, 0.13))))
        ? 0
        : Number(Math.max(100 * 0.26 * fctm / fy, 0.13));
    roLMax = (isNaN(Number(100 * 0.8 * ksiMax * fcd / fyd)) || !isFinite(Number(100 * 0.8 * ksiMax * fcd / fyd)))
        ? 0
        : Number(100 * 0.8 * ksiMax * fcd / fyd);

    if (isNaN(Number(100 * 0.8 * ksi * fcd / fyd)) || isNaN(Number(roLMin)) || isNaN(Number(roLMax))) {
        roS1 = '-';
    } else {
        roS1 = ((100 * 0.8 * ksi * fcd / fyd >= roLMin && 100 * 0.8 * ksi * fcd / fyd <= roLMax))
            ? Number(100 * 0.8 * ksi * fcd / fyd)
            : 'Out';
    }





    return (
        <>
            <h1>This module is to substitute "New Beam"</h1>
            <TableStyled>
                <thead>
                    <tr>
                        <TdStyled>Concrete</TdStyled>
                        <TdStyled>αcc</TdStyled>
                        <TdStyled>γm,c</TdStyled>
                        <TdStyled>Steel</TdStyled>
                        <TdStyled>γm,s</TdStyled>
                        <TdStyled>fcd</TdStyled>
                        <TdStyled>fyd</TdStyled>
                        <TdStyled>fcm</TdStyled>
                        <TdStyled>fctm</TdStyled>
                        <TdStyled>fctk,05</TdStyled>
                        <TdStyled>fctk,95</TdStyled>
                        <TdStyled>Ecm</TdStyled>
                        <TdStyled>Es</TdStyled>
                        <TdStyled>εyd</TdStyled>
                    </tr>
                </thead>


                <tbody>
                    <tr>
                        <TdStyled>
                            <select
                                onChange={e => setFck(Number(e.target.value.slice(1, 3)))}>
                                <option
                                    disabled
                                    selected
                                    hidden
                                    value="default"
                                >
                                    Grade
                                </option>
                                {structuralData.concreteArr.map((concreteGrade) => {
                                    return <option value={concreteGrade}>{concreteGrade}</option>
                                })}
                            </select>
                        </TdStyled>

                        <TdStyled>
                            <select name="alphaCC" id="alphaCC" onChange={e => setAlphaCC(e.target.value)}>
                                <option
                                    disabled
                                    selected
                                    hidden
                                    value="default"
                                >
                                    -
                                </option>
                                {structuralData.alphaCCArr.map((alphaCC) => {
                                    return <option value={alphaCC}>{Number(alphaCC).toFixed(2)}</option>
                                })}
                            </select>
                        </TdStyled>

                        <TdStyled>
                            <select name="gammaMC" id="gammaMC" onChange={e => setGammaMC(e.target.value)}>
                                <option
                                    disabled
                                    selected
                                    hidden
                                    value="default"
                                >
                                    -
                                </option>
                                {structuralData.gammaMCArr.map((gammaMC) => {
                                    return <option value={gammaMC}>{Number(gammaMC).toFixed(2)}</option>
                                })}
                            </select>
                        </TdStyled>

                        <TdStyled>
                            <select name="steel" id="steel" onChange={e => setFy(Number(e.target.value.slice(1, 4)))}>

                                <option disabled selected hidden value="default">Grade</option>

                                {structuralData.steelArr.map((steelGrade) => {
                                    return < option value={steelGrade} > {steelGrade}</option>
                                })}
                            </select>
                        </TdStyled>

                        <TdStyled>
                            <select name="gammaMS" id="gammaMS" onChange={e => setGammaMS(e.target.value)}
                            >
                                <option
                                    disabled
                                    selected
                                    hidden
                                    value="default"
                                >
                                    -
                                </option>
                                {structuralData.gammaMSArr.map((gammaMS) => {
                                    return <option value={gammaMS}>{Number(gammaMS).toFixed(2)}</option>
                                })}
                            </select>
                        </TdStyled>

                        <TdStyled>
                            {(fcd && fcd !== Infinity) ? fcd.toFixed(2) : ''}
                        </TdStyled>

                        <TdStyled>
                            {(fyd && fyd !== Infinity && !isNaN(fyd)) ? fyd.toFixed(0) : '-'}
                        </TdStyled>

                        <TdStyled>
                            {(fcm && fcm !== Infinity && !isNaN(fcm)) ? fcm.toFixed(0) : '-'}
                        </TdStyled>

                        <TdStyled>
                            {(fctm && fctm !== Infinity && !isNaN(fctm)) ? fctm.toFixed(2) : '-'}
                        </TdStyled>

                        <TdStyled>
                            {(fctk05 && fctk05 !== Infinity && !isNaN(fctk05)) ? fctk05.toFixed(2) : '-'}
                        </TdStyled>

                        <TdStyled>
                            {(fctk95 && fctk95 !== Infinity && !isNaN(fctk95)) ? fctk95.toFixed(2) : '-'}
                        </TdStyled>

                        <TdStyled>
                            {(Ecm && Ecm !== Infinity && !isNaN(Ecm)) ? Ecm.toFixed(1) : '-'}
                        </TdStyled>

                        <TdStyled>
                            <select name="steelModulus" id="steelModulus" onChange={e => setSteelModulus(e.target.value)}>
                                <option
                                    disabled
                                    selected
                                    hidden
                                    value="default"
                                >
                                    -
                                </option>                              {structuralData.steelModulusArr.map((modulus) => {
                                    return <option value={modulus}>{Number(modulus).toFixed(0)}</option>
                                })}
                            </select>
                        </TdStyled>

                        <TdStyled>
                            {isNaN(Number(epsilonYD))
                                ? '-'
                                : Number(epsilonYD).toFixed(2)}
                        </TdStyled>
                    </tr>
                </tbody>
            </TableStyled>

            {/* ________________________________________________________ */}

            <TableStyled>
                <thead>
                    <tr>
                        <TdStyled>Width</TdStyled>
                        <TdStyled>Height</TdStyled>
                        <TdStyled>d1</TdStyled>
                        <TdStyled>d</TdStyled>
                        <TdStyled>Med</TdStyled>
                        <TdStyled>Ved</TdStyled>
                        <TdStyled>Ted</TdStyled>
                    </tr>
                </thead>


                <tbody>
                    <tr>
                        <TdStyled>
                            <InputStyled
                                id="width"
                                name='width'
                                type="number"
                                placeholder="250"
                                min="0"
                                step="5"
                                onChange={e => setWidth(Number(e.target.value))}
                                value={width}
                            />
                        </TdStyled>

                        <TdStyled>
                            <InputStyled
                                id="height"
                                name='height'
                                type="number"
                                placeholder="500"
                                min="0"
                                step="5"
                                onChange={e => setHeight(Number(e.target.value))}
                                value={height}
                            />
                        </TdStyled>

                        <TdStyled>
                            <InputStyled
                                id="d1"
                                name='d1'
                                type="number"
                                placeholder="25"
                                min="0"
                                step="1"
                                onChange={e => setD1(Number(e.target.value))}
                                value={d1}
                            />
                        </TdStyled>

                        <TdStyled>
                            {d}
                        </TdStyled>

                        <TdStyled>
                            <InputStyled
                                id="bendingMoment"
                                name='bendingMoment'
                                type="number"
                                placeholder="10"
                                step="5"
                                onChange={e => setMed(Number(e.target.value))}
                                value={med}
                            />
                        </TdStyled>

                        <TdStyled>
                            <InputStyled
                                id="shearForce"
                                name='shearForce'
                                type="number"
                                placeholder="10"
                                step="1"
                            />
                        </TdStyled>

                        <TdStyled>
                            <InputStyled
                                id="torsion"
                                name='torsion'
                                type="number"
                                placeholder="10"
                                step="1"
                            />
                        </TdStyled>
                    </tr>
                </tbody>
            </TableStyled>

            {/* ________________________________________________________ */}


            <TableStyled>
                <thead>
                    <tr>
                        <TdStyled>μ</TdStyled>
                        <TdStyled>ξ</TdStyled>
                        <TdStyled>x</TdStyled>
                        <TdStyled>ξmax</TdStyled>
                        <TdStyled>x,max</TdStyled>
                        <TdStyled>As,2</TdStyled>
                        <TdStyled>ρl,min</TdStyled>
                        <TdStyled>ρs1</TdStyled>
                        <TdStyled>ρl,max</TdStyled>
                    </tr>
                </thead>


                <tbody>
                    <tr>
                        <TdStyled>
                            {miu.toFixed(3)}
                        </TdStyled>

                        <TdStyled>
                            {ksi.toFixed(2)}
                        </TdStyled>

                        <TdStyled>
                            {(ksi * d).toFixed(0)}
                        </TdStyled>

                        <TdStyled>
                            {isNaN(Number(ksiMax))
                                ? '-'
                                : Number(ksiMax).toFixed(2)}
                        </TdStyled>

                        <TdStyled>
                            {isNaN(Number(xMax))
                                ? '-'
                                : Number(xMax).toFixed(0)}
                        </TdStyled>

                        <TdStyled>
                            {(ksiMax >= ksi)
                                ? 'No'
                                : 'Yes'}
                        </TdStyled>

                        <TdStyled>
                            {isNaN(Number(roLMin))
                                ? '-'
                                : Number(roLMin).toFixed(3)}
                        </TdStyled>

                        <TdStyled>
                            {isNaN(Number(roS1))
                                ? '-'
                                : Number(roS1).toFixed(3)}
                        </TdStyled>

                        <TdStyled>
                            {isNaN(Number(roLMax))
                                ? '-'
                                : Number(roLMax).toFixed(3)}
                        </TdStyled>
                    </tr>
                </tbody>
            </TableStyled>
        </>
    );
}




const TableStyled = styled.table`
margin:20px auto;
padding:10px;
border: 1px solid black;
border-top-right-radius:15px;
border-bottom-left-radius:15px;
`;

const InputStyled = styled.input`
max-width:50px;
background-color:#bdbbb7;

&:focus{
    background:white;
}
`;

const TdStyled = styled.td`
min-width:50px;
`;

export default NewBeam2;
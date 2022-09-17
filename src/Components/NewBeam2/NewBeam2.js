import { useState } from 'react';
import styled from 'styled-components';

import * as structuralData from '../../services/structuralData';
import { fcdCalculate, fydCalculate, miuCalculate, ksiCalculate } from '../../services/formulas';

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
    let d = 0;
    let miu = 0;
    let ksi = 0;
    let epsilonYD = 0;

    fcd = fcdCalculate(fck, alphaCC, gammaMC);
    fyd = fydCalculate(fy, gammaMS);
    epsilonYD = (isNaN(fyd / steelModulus) || !isFinite(fyd / steelModulus))
        ? '-'
        : (fyd / steelModulus);
    d = (height - d1);
    miu = isNaN(miuCalculate(fcd, width, d, med))
        ? 0
        : Number(miuCalculate(fcd, width, d, med));
    ksi = isNaN(ksiCalculate(fcd, width, d, med))
        ? 0
        : Number(ksiCalculate(fcd, width, d, med));


    return (
        <>
            <h1>This module is to substitute "New Beam"</h1>
            <TableStyled>
                <thead>
                    <tr>
                        <td>Concrete</td>
                        <td>αcc</td>
                        <td>γm,c</td>
                        <td>Steel</td>
                        <td>γm,s</td>
                        <td>fcd</td>
                        <td>fyd</td>
                        <td>Es</td>
                        <td>εyd</td>
                    </tr>
                </thead>


                <tbody>
                    <tr>
                        <td>
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
                        </td>

                        <td>
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
                        </td>

                        <td>
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
                        </td>

                        <td>
                            <select name="steel" id="steel" onChange={e => setFy(Number(e.target.value.slice(1, 4)))}>

                                <option disabled selected hidden value="default">Grade</option>

                                {structuralData.steelArr.map((steelGrade) => {
                                    return < option value={steelGrade} > {steelGrade}</option>
                                })}
                            </select>
                        </td>

                        <td>
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
                        </td>

                        <td>
                            {(fcd && fcd !== Infinity) ? fcd.toFixed(2) : ''}
                        </td>

                        <td>
                            {(fyd && fyd !== Infinity && !isNaN(fyd)) ? fyd.toFixed(0) : ''}
                        </td>

                        <td>
                            <select name="alphaCC" id="alphaCC" onChange={e => setSteelModulus(e.target.value)}>
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
                        </td>

                        <td>
                            {Number(epsilonYD).toFixed(2)}
                        </td>
                    </tr>
                </tbody>
            </TableStyled>

            {/* ________________________________________________________ */}

            <TableStyled>
                <thead>
                    <tr>
                        <td>Width</td>
                        <td>Height</td>
                        <td>d1</td>
                        <td>d</td>
                        <td>Med</td>
                        <td>Ved</td>
                        <td>Ted</td>
                    </tr>
                </thead>


                <tbody>
                    <tr>
                        <td>
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
                        </td>

                        <td>
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
                        </td>

                        <td>
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
                        </td>

                        <td>
                            {d}
                        </td>

                        <td>
                            <InputStyled
                                id="bendingMoment"
                                name='bendingMoment'
                                type="number"
                                placeholder="10"
                                step="5"
                                onChange={e => setMed(Number(e.target.value))}
                                value={med}
                            />
                        </td>

                        <td>
                            <InputStyled
                                id="shearForce"
                                name='shearForce'
                                type="number"
                                placeholder="10"
                                step="1"
                            />
                        </td>

                        <td>
                            <InputStyled
                                id="torsion"
                                name='torsion'
                                type="number"
                                placeholder="10"
                                step="1"
                            />
                        </td>
                    </tr>
                </tbody>
            </TableStyled>

            {/* ________________________________________________________ */}


            <TableStyled>
                <thead>
                    <tr>
                        <td>μ</td>
                        <td>ξ</td>
                        <td>x</td>
                        <td>ξmax</td>
                        <td>x,max</td>
                    </tr>
                </thead>


                <tbody>
                    <tr>
                        <td>
                            {miu.toFixed(3)}
                        </td>

                        <td>
                            {ksi.toFixed(2)}
                        </td>

                        <td>
                            {(ksi * d).toFixed(0)}
                        </td>

                        <td>
                            {(3.5 / (3.5 + epsilonYD)).toFixed(2)}
                        </td>

                        <td>
                            {((3.5 / (3.5 + epsilonYD)) * d).toFixed(0)}
                        </td>
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
                `;

const InputStyled = styled.input`
                max-width:55px;
                background-color:#bdbbb7;

                &:focus{
                    background:white;
}
                `;

export default NewBeam2;
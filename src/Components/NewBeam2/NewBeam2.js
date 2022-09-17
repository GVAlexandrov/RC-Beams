import { useState } from 'react';
import styled from 'styled-components';

import * as structuralData from '../../services/structuralData';
import { fcdCalculate, fcmCalculate, fctmCalculate, fydCalculate, miuCalculate, ksiCalculate } from '../../services/formulas';
import validateNewElements from '../../validations/newDataValidations';


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
    let [ved, setVed] = useState(0);
    let [ted, setTed] = useState(0);
    let [rebarDiameter, setRebarDiameter] = useState(0);

    let [error, setError] = useState('');


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
    let x = 0;
    let ksiMax = 0;
    let xMax = 0;
    let roLMin = 0;
    let roLMax = 0;
    let roS1 = 0;
    let ceta = 0;
    let z = 0;
    let As1 = 0;
    let As1_1 = 0;
    let numberOfRebarsNeeded = 0;
    let As1Provided = 0;
    let roL = 0;
    let Fc = 0;



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
    x = (isNaN(Number(ksi * d)) || !isFinite(Number(ksi * d)))
        ? '-'
        : Number(ksi * d);
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
            ? Number(100 * 0.8 * ksi * fcd / fyd).toFixed(3)
            : 'OUT';
    }

    ceta = (isNaN(Number(1 - .4 * ksi)) || !isFinite(Number(1 - .4 * ksi)))
        ? '-'
        : Number(1 - .4 * ksi);
    z = (isNaN(Number(d * ceta)) || !isFinite(Number(d * ceta)))
        ? '-'
        : Number(d * ceta);
    As1 = (isNaN(Number((roS1 * 0.01 * width * d) / 100)) || !isFinite(Number((roS1 * 0.01 * width * d) / 100)))
        ? '-'
        : Number((roS1 * 0.01 * width * d) / 100);
    As1_1 = (isNaN(Number((Math.PI * 0.25 * rebarDiameter ** 2) / 100)) || !isFinite(Number((Math.PI * 0.25 * rebarDiameter ** 2) / 100)))
        ? '-'
        : Number((Math.PI * 0.25 * rebarDiameter ** 2) / 100);
    numberOfRebarsNeeded = (isNaN(Number(Math.ceil(As1 / As1_1)))) || !isFinite(Number(Math.ceil(As1 / As1_1)))
        ? '-'
        : Number(Math.ceil(As1 / As1_1));
    As1Provided = (isNaN(Number(As1_1 * numberOfRebarsNeeded))) || !isFinite(Number(As1_1 * numberOfRebarsNeeded))
        ? '-'
        : Number(As1_1 * numberOfRebarsNeeded);

    if (isNaN(Number(100 * (numberOfRebarsNeeded * As1_1 * 100) / (width * d))) || !isFinite(Number(100 * (numberOfRebarsNeeded * As1_1 * 100) / (width * d)))) {
        roL = '-';
    } else {
        roL = ((100 * (numberOfRebarsNeeded * As1_1 * 100) / (width * d) >= roLMin && 100 * (numberOfRebarsNeeded * As1_1 * 100) / (width * d) <= roLMax))
            ? Number(100 * 0.8 * ksi * fcd / fyd).toFixed(3)
            : 'OUT';
    }

    Fc = (isNaN(Number((0.8 * width * x * fcd) / 1000))) || !isFinite(Number((0.8 * width * x * fcd) / 1000))
        ? '-'
        : Number((0.8 * width * x * fcd) / 1000);



    const onSubmitHandler = (e) => {
        const concreteTextError = validateNewElements.concrete(fck);
        const alphaCCTextError = validateNewElements.alphaCC(alphaCC);
        const gammaMCTextError = validateNewElements.gammaMC(gammaMC);
        const steelTextError = validateNewElements.steel(fy);
        const gammaMSTextError = validateNewElements.gammaMS(gammaMS);
        const EsTextError = validateNewElements.Es(steelModulus);
        const heightTextError = validateNewElements.height(height.valueOf());
        const widthTextError = validateNewElements.width(width.valueOf());
        const d1TextError = validateNewElements.d1(d1.valueOf());
        const bendingMomentTextError = validateNewElements.bendingMoment(med);
        const shearForceTextError = validateNewElements.shearForce(ved);
        const torsionTextError = validateNewElements.torsion(ted);
        const roS1TextError = validateNewElements.roS1(roS1);
        const rebarTextError = validateNewElements.rebar(rebarDiameter);

        if (concreteTextError ||
            alphaCCTextError ||
            gammaMCTextError ||
            steelTextError ||
            gammaMSTextError ||
            EsTextError ||
            widthTextError ||
            heightTextError ||
            d1TextError ||
            bendingMomentTextError ||
            shearForceTextError ||
            torsionTextError ||
            rebarTextError ||
            roS1TextError) {
            setError(concreteTextError ||
                alphaCCTextError ||
                gammaMCTextError ||
                steelTextError ||
                gammaMSTextError ||
                EsTextError ||
                widthTextError ||
                heightTextError ||
                d1TextError ||
                bendingMomentTextError ||
                shearForceTextError ||
                torsionTextError ||
                rebarTextError ||
                roS1TextError);

            setTimeout(() => {
                setError('');
            }, 5000);

            return;
        };

        console.log('AFTER RETURN');
    }



    return (
        <>
            <h1 style={{ color: 'red' }}>The module "New Beam2" is to substitute "New Beam"</h1>
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

                    <tr>
                        <TdStyledDimensions>[class]</TdStyledDimensions>
                        <TdStyledDimensions>[-]</TdStyledDimensions>
                        <TdStyledDimensions>[-]</TdStyledDimensions>
                        <TdStyledDimensions>[class]</TdStyledDimensions>
                        <TdStyledDimensions>[-]</TdStyledDimensions>
                        <TdStyledDimensions>[MPa]</TdStyledDimensions>
                        <TdStyledDimensions>[MPa]</TdStyledDimensions>
                        <TdStyledDimensions>[MPa]</TdStyledDimensions>
                        <TdStyledDimensions>[MPa]</TdStyledDimensions>
                        <TdStyledDimensions>[MPa]</TdStyledDimensions>
                        <TdStyledDimensions>[MPa]</TdStyledDimensions>
                        <TdStyledDimensions>[GPa]</TdStyledDimensions>
                        <TdStyledDimensions>[GPa]</TdStyledDimensions>
                        <TdStyledDimensions>[‰]</TdStyledDimensions>
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
                    <tr>
                        <TdStyledDimensions>[mm]</TdStyledDimensions>
                        <TdStyledDimensions>[mm]</TdStyledDimensions>
                        <TdStyledDimensions>[mm]</TdStyledDimensions>
                        <TdStyledDimensions>[mm]</TdStyledDimensions>
                        <TdStyledDimensions>[kN.m]</TdStyledDimensions>
                        <TdStyledDimensions>[kN]</TdStyledDimensions>
                        <TdStyledDimensions>[kN.m]</TdStyledDimensions>
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
                                min="60"
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
                                min="150"
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
                                min="25"
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
                                onChange={e => setVed(Number(e.target.value))}
                                value={ved}
                            />
                        </TdStyled>

                        <TdStyled>
                            <InputStyled
                                id="torsion"
                                name='torsion'
                                type="number"
                                placeholder="10"
                                step="1"
                                onChange={e => setTed(Number(e.target.value))}
                                value={ted}
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
                        <TdStyled>≤ ρs1 ≤</TdStyled>
                        <TdStyled>ρl,max</TdStyled>
                        <TdStyled>ω1</TdStyled>
                        <TdStyled>ζ</TdStyled>
                        <TdStyled>z</TdStyled>
                    </tr>
                    <tr>
                        <TdStyledDimensions>[-]</TdStyledDimensions>
                        <TdStyledDimensions>[-]</TdStyledDimensions>
                        <TdStyledDimensions>[mm]</TdStyledDimensions>
                        <TdStyledDimensions>[-]</TdStyledDimensions>
                        <TdStyledDimensions>[mm]</TdStyledDimensions>
                        <TdStyledDimensions>[?]</TdStyledDimensions>
                        <TdStyledDimensions>[%]</TdStyledDimensions>
                        <TdStyledDimensions>[%]</TdStyledDimensions>
                        <TdStyledDimensions>[%]</TdStyledDimensions>
                        <TdStyledDimensions>[-]</TdStyledDimensions>
                        <TdStyledDimensions>[-]</TdStyledDimensions>
                        <TdStyledDimensions>[mm]</TdStyledDimensions>
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
                            {isNaN(Number(x))
                                ? '-'
                                : Number(x).toFixed(0)}
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

                        <TdStyled style={ksiMax >= ksi ? {} : { color: 'red', 'font-weight': 'bold' }}>
                            {(ksiMax >= ksi)
                                ? 'No'
                                : 'YES'}
                        </TdStyled>

                        <TdStyled>
                            {isNaN(Number(roLMin))
                                ? '-'
                                : Number(roLMin).toFixed(3)}
                        </TdStyled>

                        <TdStyled style={ksiMax >= ksi ? {} : { color: 'red', 'font-weight': 'bold' }}>
                            {roS1}
                        </TdStyled>

                        <TdStyled>
                            {isNaN(Number(roLMax))
                                ? '-'
                                : Number(roLMax).toFixed(3)}
                        </TdStyled>

                        <TdStyled>
                            {isNaN(Number(.8 * ksi))
                                ? '-'
                                : Number(.8 * ksi).toFixed(3)}
                        </TdStyled>

                        <TdStyled>
                            {isNaN(Number(ceta))
                                ? '-'
                                : Number(ceta).toFixed(2)}
                        </TdStyled>

                        <TdStyled>
                            {isNaN(Number(z))
                                ? '-'
                                : Number(z).toFixed(0)}
                        </TdStyled>
                    </tr>
                </tbody>
            </TableStyled>

            {/* ________________________________________________________ */}

            <TableStyled>
                <thead>
                    <tr>
                        <TdStyled>As,1</TdStyled>
                        <TdStyled>Ø</TdStyled>
                        <TdStyled>As1,1</TdStyled>
                        <TdStyled>№</TdStyled>
                        <TdStyled>As1,p</TdStyled>
                        <TdStyled>Reserve</TdStyled>
                        <TdStyled>ρl</TdStyled>
                        <TdStyled>Fc =</TdStyled>
                        <TdStyled>Fs1</TdStyled>
                        <TdStyled>Mcr,1</TdStyled>
                        <TdStyled>Mcr,2</TdStyled>
                    </tr>
                    <tr>
                        <TdStyledDimensions>[mm]</TdStyledDimensions>
                        <TdStyledDimensions>[mm]</TdStyledDimensions>
                        <TdStyledDimensions>[mm]</TdStyledDimensions>
                        <TdStyledDimensions>[-]</TdStyledDimensions>
                        <TdStyledDimensions>[mm]</TdStyledDimensions>
                        <TdStyledDimensions>[%]</TdStyledDimensions>
                        <TdStyledDimensions>[%]</TdStyledDimensions>
                        <TdStyledDimensions>[kN]</TdStyledDimensions>
                        <TdStyledDimensions>[kN]</TdStyledDimensions>
                        <TdStyledDimensions>[kN.m]</TdStyledDimensions>
                        <TdStyledDimensions>[kN.m]</TdStyledDimensions>
                    </tr>
                </thead>


                <tbody>
                    <tr>
                        <TdStyled>
                            {isNaN(Number(As1))
                                ? '-'
                                : Number(As1).toFixed(2)}
                        </TdStyled>

                        <TdStyled>
                            <select name="rebar" id="rebar" onChange={e => setRebarDiameter(e.target.value)}>
                                <option
                                    disabled
                                    selected
                                    hidden
                                    value="default"
                                >
                                    dim.
                                </option>
                                {structuralData.rebarArr.map((rebarDiameter) => {
                                    return <option value={rebarDiameter}>{rebarDiameter}</option>
                                })}

                            </select>
                        </TdStyled>

                        <TdStyled>
                            {isNaN(Number(As1_1))
                                ? '-'
                                : Number(As1_1).toFixed(2)}
                        </TdStyled>

                        <TdStyled>
                            {isNaN(Number(numberOfRebarsNeeded))
                                ? '-'
                                : Number(numberOfRebarsNeeded)}
                        </TdStyled>

                        <TdStyled>
                            {isNaN(Number(As1Provided))
                                ? '-'
                                : Number(As1Provided).toFixed(2)}
                        </TdStyled>

                        <TdStyled>
                            {isNaN(Number(100 * As1Provided / As1))
                                ? '-'
                                : Number(100 * (As1Provided / As1 - 1)).toFixed(0)}
                        </TdStyled>

                        <TdStyled>
                            {isNaN(Number(roL))
                                ? '-'
                                : Number(roL).toFixed(2)}
                        </TdStyled>

                        <TdStyled>
                            {isNaN(Number(Fc))
                                ? '-'
                                : Number(Fc).toFixed(0)}
                        </TdStyled>

                        <TdStyled>
                            {isNaN(Number((fyd * As1 * 100) / 1000))
                                ? '-'
                                : Number((fyd * As1 * 100) / 1000).toFixed(0)}
                        </TdStyled>

                        <TdStyled>
                            {isNaN(Number((fctk95 * width * height ** 2 / 6) / 1000000))
                                ? '-'
                                : Number((fctk95 * width * height ** 2 / 6) / 1000000).toFixed(2)}
                        </TdStyled>

                        <TdStyled>
                            {isNaN(Number((fctk05 * width * height ** 2 / 6) / 1000000))
                                ? '-'
                                : Number((fctk05 * width * height ** 2 / 6) / 1000000).toFixed(2)}
                        </TdStyled>
                    </tr>
                </tbody>
            </TableStyled>

            {error
                ? (
                    <DivErrorStyled >
                        <PErrorStyled>{error}</PErrorStyled>
                    </DivErrorStyled>
                )
                : (<></>)
            }

            <ButtonStyled onClick={onSubmitHandler}>Save</ButtonStyled>
        </>
    );
}




const TableStyled = styled.table`
margin:20px auto;
padding:10px;
border: 1px solid black;
border-top-right-radius:15px;
border-bottom-left-radius:15px;
&:hover{
background-color:#969592;
}
`;

const InputStyled = styled.input`
max-width:50px;
/* background-color:#bdbbb7; */

&:focus{
    background:white;
}
`;

const TdStyled = styled.td`
min-width:60px;
`;

const TdStyledDimensions = styled.td`
min-width:50px;
font-style: italic;
`;

const ButtonStyled = styled.button`
display: block;
margin:20px auto;
margin-bottom:20px;
font-size:16px;
background:#bdbbb7;
padding: 10px 50px;
border-radius:5px;
border-color:black;
cursor: pointer;
&:hover{
background-color:#969592;
}
&:active {
background-color:#bdbbb7;
/* background-color:black;
color:red;
border-color:red; */
}
`;

const DivErrorStyled = styled.div`
color:red;
background-color:white;
font-size:20px;
/* font-weight: bold; */
border: 1.5px solid red;
border-top-right-radius:15px;
border-bottom-left-radius:15px;
display: inline-block;
`;

const PErrorStyled = styled.p`
margin:auto;
padding:10px;
`;

export default NewBeam2;
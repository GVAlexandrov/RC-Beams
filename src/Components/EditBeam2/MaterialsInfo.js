import {
    TableStyled,
    TdStyled,
    TdStyledDimensions,
} from './newBeam2Styled';

const MaterialsInfo = (props) => {
    let structuralData = props.structuralData;
    let setAlphaCC = props.setAlphaCC;
    let setGammaMC = props.setGammaMC;
    let setGammaMS = props.setGammaMS;
    let fcd = props.fcd;
    let fyd = props.fyd;
    let fcm = props.fcm;
    let fctm = props.fctm;
    let fctk05 = props.fctk05;
    let fctk95 = props.fctk95;
    let Ecm = props.Ecm;
    let setSteelModulus = props.setSteelModulus;
    let epsilonYD = props.epsilonYD;

    let beamObj = props.beam ? props.beam : null;
    let wallObj = props.wall ? props.wall : null;

    return (
        <TableStyled>
            <thead>
                <tr>
                    <TdStyled><abbr title='coefficient'>αcc</abbr></TdStyled>
                    <TdStyled>γm,c</TdStyled>
                    <TdStyled>γm,s</TdStyled>
                    <TdStyled>fcd</TdStyled>
                    <TdStyled>fyd</TdStyled>
                    <TdStyled>fcm</TdStyled>
                    <TdStyled>fctm</TdStyled>
                    <TdStyled>fctk,05</TdStyled>
                    <TdStyled>fctk,95</TdStyled>
                    <TdStyled><abbr title='Modulus of elasticity of concrete, mean'>Ecm</abbr></TdStyled>
                    <TdStyled>Es</TdStyled>
                    <TdStyled>εyd</TdStyled>
                </tr>

                <tr>
                    <TdStyledDimensions>[-]</TdStyledDimensions>
                    <TdStyledDimensions>[-]</TdStyledDimensions>
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
                        <select name="alphaCC" id="alphaCC" onChange={e => setAlphaCC(e.target.value)}>

                            <option
                                disabled
                                selected
                                hidden
                                value="default"
                            >
                                -
                            </option>

                            {structuralData
                                .alphaCCArr
                                .map((alphaCC) => {
                                    return (beamObj?.alphaCC === alphaCC || wallObj?.alphaCC === alphaCC
                                        ? <option selected value={alphaCC}>{Number(alphaCC).toFixed(2)}</option>
                                        : <option value={alphaCC}>{Number(alphaCC).toFixed(2)}</option>)
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

                            {structuralData
                                .gammaMCArr
                                .map((gammaMC) => {
                                    return (beamObj?.gammaMC === gammaMC || wallObj?.gammaMC === gammaMC
                                        ? <option selected value={gammaMC}>{Number(gammaMC).toFixed(2)}</option>
                                        : <option value={gammaMC}>{Number(gammaMC).toFixed(2)}</option>)
                                })}
                        </select>
                    </TdStyled>


                    <TdStyled>
                        <select name="gammaMS" id="gammaMS" onChange={e => setGammaMS(e.target.value)}>

                            <option
                                disabled
                                selected
                                hidden
                                value="default"
                            >
                                -
                            </option>

                            {structuralData
                                .gammaMSArr
                                .map((gammaMS) => {
                                    return (beamObj?.gammaMS === gammaMS || wallObj?.gammaMS === gammaMS
                                        ? <option selected value={gammaMS}>{Number(gammaMS).toFixed(2)}</option>
                                        : <option value={gammaMS}>{Number(gammaMS).toFixed(2)}</option>)
                                })}
                        </select>
                    </TdStyled>


                    <TdStyled>
                        {(fcd && fcd !== Infinity) ? fcd.toFixed(2) : '-'}
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
                        <select name="steelModulus" id="steelModulus" onChange={e => setSteelModulus(e.target.value)} >

                            <option
                                disabled
                                selected
                                hidden
                            >
                                -
                            </option>

                            {structuralData
                                .steelModulusArr
                                .map((modulus) => {
                                    return (beamObj?.steelModulus === modulus || wallObj?.steelModulus === modulus
                                        ? <option selected value={modulus}>{Number(modulus).toFixed(2)}</option>
                                        : <option value={modulus}>{Number(modulus).toFixed(2)}</option>)
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
    )
}

export default MaterialsInfo;
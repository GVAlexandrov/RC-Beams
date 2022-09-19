import {
    TableStyled,
    TdStyled,
    TdStyledDimensions,
} from './newBeam2Styled';

const BeamInfo = (props) => {
    let setConcreteGrade = props.setConcreteGrade;
    let structuralData = props.structuralData;
    let setAlphaCC = props.setAlphaCC;
    let setGammaMC = props.setGammaMC;
    let setSteelGrade = props.setSteelGrade;
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

    return (
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
                            onChange={e => setConcreteGrade(e.target.value)}>
                            <option
                                disabled
                                selected
                                hidden
                                value="default"
                            >
                                Grade
                            </option>
                            {structuralData.concreteArr.map((concreteGrade) => {
                                return (beamObj?.concrete === concreteGrade
                                    ? <option selected value={beamObj.concrete}>{beamObj.concrete}</option>
                                    : <option value={concreteGrade}>{concreteGrade}</option>)
                            })}
                        </select>
                    </TdStyled>

                    <TdStyled>
                        <select name="alphaCC" id="alphaCC" onChange={e => setAlphaCC(e.target.value)}>

                            {structuralData.alphaCCArr.map((alphaCC) => {
                                return (beamObj?.alphaCC === alphaCC
                                    ? <option selected value={alphaCC}>{Number(alphaCC).toFixed(2)}</option>
                                    : <option value={alphaCC}>{Number(alphaCC).toFixed(2)}</option>)
                            })}
                        </select>
                    </TdStyled>

                    <TdStyled>
                        <select name="gammaMC" id="gammaMC" onChange={e => setGammaMC(e.target.value)}>

                            {structuralData.gammaMCArr.map((gammaMC) => {
                                return (beamObj?.gammaMC === gammaMC
                                    ? <option selected value={gammaMC}>{Number(gammaMC).toFixed(2)}</option>
                                    : <option value={gammaMC}>{Number(gammaMC).toFixed(2)}</option>)
                            })}
                        </select>
                    </TdStyled>

                    <TdStyled>
                        <select name="steel" id="steel" onChange={e => setSteelGrade(e.target.value)}>

                            <option disabled selected hidden value="default">Grade</option>

                            {structuralData.steelArr.map((steelGrade) => {
                                return (beamObj?.steel === steelGrade
                                    ? < option selected value={steelGrade} > {steelGrade}</option>
                                    : < option value={steelGrade} > {steelGrade}</option>)
                            })}
                        </select>
                    </TdStyled>

                    <TdStyled>
                        <select name="gammaMS" id="gammaMS" onChange={e => setGammaMS(e.target.value)}
                        >

                            {structuralData.gammaMSArr.map((gammaMS) => {
                                return (beamObj?.gammaMS === gammaMS
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

                            {structuralData.steelModulusArr.map((modulus) => {
                                return (beamObj?.steelModulus === modulus
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

export default BeamInfo;
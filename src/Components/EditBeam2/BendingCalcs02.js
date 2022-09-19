import {
    TableStyled,
    TdStyled,
    TdStyledDimensions,
} from './newBeam2Styled';

const BendingCalcs02 = (props) => {
    let As1 = props.As1;
    let setRebarDiameter = props.setRebarDiameter;
    let As1_1 = props.As1_1;
    let numberOfRebarsNeeded = props.numberOfRebarsNeeded;
    let As1Provided = props.As1Provided;
    let roL = props.roL;
    let roLMax = props.roLMax;
    let Fc = props.Fc;
    let fyd = props.fyd;
    let fctk95 = props.fctk95;
    let fctk05 = props.fctk05;
    let width = props.width;
    let height = props.height;
    let structuralData = props.structuralData;
    let beamObj = props?.beam || null;


    return (
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

                            {structuralData.rebarArr
                                .map((rebarDiameterFromDB) => {
                                    return (beamObj?.rebar === rebarDiameterFromDB
                                        ? <option selected value={rebarDiameterFromDB}>{rebarDiameterFromDB}</option>
                                        : <option value={rebarDiameterFromDB}>{rebarDiameterFromDB}</option>)
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

                    <TdStyled style={Number(roL) <= Number(roLMax) ? {} : { color: 'red', 'font-weight': 'bold' }}>
                        {isNaN(Number(roL))
                            ? roL
                            : Number(roL).toFixed(3)}
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
    )
}

export default BendingCalcs02;
import {
    TableStyled,
    TdStyled,
    TdStyledDimensions,
} from './newBeam2Styled';

const BendingCalcs01 = (props) => {
    let miu = props.miu;
    let ksi = props.ksi;
    let x = props.x;
    let ksiMax = props.ksiMax;
    let xMax = props.xMax;
    let roLMin = props.roLMin;
    let roS1 = props.roS1;
    let roLMax = props.roLMax;
    let ceta = props.ceta;
    let z = props.z;


    return (
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
                        {ksi.toFixed(3)}
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
    )
}

export default BendingCalcs01;
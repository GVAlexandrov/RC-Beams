import {
    TableStyled,
    InputStyled,
    TdStyled,
    TdStyledDimensions,
} from './newBeam2Styled';

const GeometryAndForces = (props) => {
    let setWidth = props.setWidth;
    let width = props.width;
    let setHeight = props.setHeight;
    let height = props.height;
    let setD1 = props.setD1;
    let d1 = props.d1;
    let d = props.d;
    let setMEd = props.setMEd;
    let mEd = props.mEd;
    let setVEd = props.setVEd;
    let vEd = props.vEd;
    let setTEd = props.setTEd;
    let tEd = props.tEd;

    return (
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
                            onChange={e => setMEd(Number(e.target.value))}
                            value={mEd}
                        />
                    </TdStyled>

                    <TdStyled>
                        <InputStyled
                            id="shearForce"
                            name='shearForce'
                            type="number"
                            placeholder="10"
                            step="1"
                            onChange={e => setVEd(Number(e.target.value))}
                            value={vEd}
                        />
                    </TdStyled>

                    <TdStyled>
                        <InputStyled
                            id="torsion"
                            name='torsion'
                            type="number"
                            placeholder="10"
                            step="1"
                            onChange={e => setTEd(Number(e.target.value))}
                            value={tEd}
                        />
                    </TdStyled>
                </tr>
            </tbody>
        </TableStyled>
    )
}

export default GeometryAndForces;
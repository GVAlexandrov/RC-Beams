import styled from 'styled-components';

const GeometryAndForces = (props) => {
    let setWidth = props.setWidth;
    let width = props.width;
    let setLength = props.setLength;
    let length = props.length;
    let setRebarAreaEndZone = props.setRebarAreaEndZone;
    let rebarAreaEndZone = props.rebarAreaEndZone;
    let setRebarAreaMiddleZone = props.setRebarAreaMiddleZone;
    let rebarAreaMiddleZone = props.rebarAreaMiddleZone;
    let setD1 = props.setD1;
    let d1 = props.d1;
    let setD2 = props.setD2;
    let d2 = props.d2;
    let setD3 = props.setD3;
    let d3 = props.d3;
    let setD4 = props.setD4;
    let d4 = props.d4;
    let setD5 = props.setD5;
    let d5 = props.d5;
    let endArea = 2 * d1;
    let numberOfMiddleAreas = 3;
    let singleMiddleArea = (length - 2 * endArea) / numberOfMiddleAreas;

    setD2((endArea + 0.5 * singleMiddleArea).toFixed(0));
    setD3((endArea + 1.5 * singleMiddleArea).toFixed(0));
    setD4((endArea + 2.5 * singleMiddleArea).toFixed(0));
    setD5(length - d1);


    return (
        <TableStyled>
            <thead>
                <tr>
                    <TdStyled>Width</TdStyled>
                    <TdStyled>Length</TdStyled>
                    <TdStyled>As1</TdStyled>
                    <TdStyled>As2</TdStyled>
                    <TdStyled>As3</TdStyled>
                    <TdStyled>As4</TdStyled>
                    <TdStyled>As5</TdStyled>
                    <TdStyled>d1</TdStyled>
                    <TdStyled>d2</TdStyled>
                    <TdStyled>d3</TdStyled>
                    <TdStyled>d4</TdStyled>
                    <TdStyled>d5</TdStyled>
                </tr>
                <tr>
                    <TdStyledDimensions>[mm]</TdStyledDimensions>
                    <TdStyledDimensions>[mm]</TdStyledDimensions>
                    <TdStyledDimensions>[cm2]</TdStyledDimensions>
                    <TdStyledDimensions>[cm2]</TdStyledDimensions>
                    <TdStyledDimensions>[cm2]</TdStyledDimensions>
                    <TdStyledDimensions>[cm2]</TdStyledDimensions>
                    <TdStyledDimensions>[cm2]</TdStyledDimensions>
                    <TdStyledDimensions>[mm]</TdStyledDimensions>
                    <TdStyledDimensions>[mm]</TdStyledDimensions>
                    <TdStyledDimensions>[mm]</TdStyledDimensions>
                    <TdStyledDimensions>[mm]</TdStyledDimensions>
                    <TdStyledDimensions>[mm]</TdStyledDimensions>
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
                            step="10"
                            onChange={e => setWidth(Number(e.target.value))}
                            value={width}
                        />
                    </TdStyled>

                    <TdStyled>
                        <InputStyled
                            id="length"
                            name='length'
                            type="number"
                            placeholder="500"
                            min="150"
                            step="50"
                            onChange={e => setLength(Number(e.target.value))}
                            value={length}
                        />
                    </TdStyled>

                    <TdStyled>
                        <InputStyled
                            id="as1"
                            name='as1'
                            type="number"
                            placeholder="1"
                            min="1"
                            step="0.2"
                            onChange={e => setRebarAreaEndZone(Number(e.target.value))}
                            value={rebarAreaEndZone}
                        />
                    </TdStyled>

                    <TdStyled>
                        <InputStyled
                            id="as2"
                            name='as2'
                            type="number"
                            placeholder="1"
                            min="0"
                            step="0.2"
                            onChange={e => setRebarAreaMiddleZone(Number(e.target.value))}
                            value={rebarAreaMiddleZone}
                        />
                    </TdStyled>

                    <TdStyled>
                        {rebarAreaMiddleZone}
                    </TdStyled>

                    <TdStyled>
                        {rebarAreaMiddleZone}
                    </TdStyled>

                    <TdStyled>
                        {rebarAreaEndZone}
                    </TdStyled>

                    <TdStyled>
                        <InputStyled
                            id="d1"
                            name='d1'
                            type="number"
                            placeholder="1"
                            min="0"
                            step="1"
                            max={length / 8}
                            onChange={e => setD1(Number(e.target.value))}
                            value={d1}
                        />
                    </TdStyled>

                    <TdStyled>
                        {d2}
                    </TdStyled>

                    <TdStyled>
                        {d3}
                    </TdStyled>

                    <TdStyled>
                        {d4}
                    </TdStyled>

                    <TdStyled>
                        {d5}
                    </TdStyled>
                </tr>
            </tbody>
        </TableStyled>
    )
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

const TdStyled = styled.td`
min-width:60px;
padding:0px 10px;
`;

const TdStyledDimensions = styled.td`
min-width:50px;
font-style: italic;
`;

const InputStyled = styled.input`
max-width:50px;
/* background-color:#bdbbb7; */

&:focus{
    background:white;
}
`;

export default GeometryAndForces;
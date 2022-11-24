import styled from 'styled-components';

const GeometryAndForces = (props) => {
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
                            step="5"

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

                        />
                    </TdStyled>

                    <TdStyled>
                        <InputStyled
                            id="bendingMoment"
                            name='bendingMoment'
                            type="number"
                            placeholder="10"
                            step="5"

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

                    <TdStyled>
                        <InputStyled
                            id="torsion"
                            name='torsion'
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
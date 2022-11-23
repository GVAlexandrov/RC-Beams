import styled from 'styled-components';


const WallInfo = (props) => {


    return (
        <TableStyled>
            <thead>
                <tr>
                    <TdStyled>Project name</TdStyled>
                    <TdStyled>Level</TdStyled>
                    <TdStyled>Wall</TdStyled>
                    <TdStyled>Concrete</TdStyled>
                    <TdStyled>Steel</TdStyled>
                </tr>

                <tr>
                    <TdStyledDimensions>[-]</TdStyledDimensions>
                    <TdStyledDimensions>[-]</TdStyledDimensions>
                    <TdStyledDimensions>[№]</TdStyledDimensions>
                    <TdStyledDimensions>[class]</TdStyledDimensions>
                    <TdStyledDimensions>[class]</TdStyledDimensions>
                </tr>
            </thead>

            <tbody>
                <tr>

                    <TdStyled>
                        <InputStyled
                            id="projectsName"
                            name='projectsName'
                            type="text"
                            placeholder="Porject's name"
                            style={{ 'min-width': '150px' }}
                        />
                    </TdStyled>



                    <TdStyled>
                        <InputStyled
                            id="level"
                            name='level'
                            type="number"
                            step='0.01'
                        />
                    </TdStyled>



                    <TdStyled>
                        <InputStyled
                            id="projectsName"
                            name='projectsName'
                            type="text"
                            placeholder="B01"
                        />
                    </TdStyled>



                    <TdStyled>
                        <select>
                            <option
                                disabled
                                selected
                                hidden
                                value="default"
                            >
                                Grade
                            </option>
                        </select>
                    </TdStyled>



                    <TdStyled>
                        <select name="steel" id="steel" >

                            <option disabled selected hidden value="default">Grade</option>


                        </select>
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

export default WallInfo;
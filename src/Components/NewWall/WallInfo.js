import styled from 'styled-components';


const WallInfo = (props) => {
    let setProjectName = props.setProjectName;
    let projectName = props.projectName;
    let setWallLevel = props.setWallLevel;
    let wallLevel = props.wallLevel;
    let setWallNumberString = props.setWallNumberString;
    let wallNumberString = props.wallNumberString;
    let setConcreteGrade = props.setConcreteGrade;
    let concreteGrade = props.concreteGrade;
    let setSteelGrade = props.setSteelGrade;
    let steelGrade = props.steelGrade;
    let structuralData = props.structuralData;


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
                            onChange={e => setProjectName(e.target.value)}
                            value={projectName}
                        />
                    </TdStyled>



                    <TdStyled>
                        <InputStyled
                            id="level"
                            name='level'
                            type="number"
                            step='0.01'
                            onChange={e => setWallLevel(Number(e.target.value))}
                            value={wallLevel}
                        />
                    </TdStyled>



                    <TdStyled>
                        <InputStyled
                            id="wallNumber"
                            name='wallNumber'
                            type="text"
                            placeholder="W01"
                            onChange={e => setWallNumberString(e.target.value)}
                            value={wallNumberString}
                        />
                    </TdStyled>



                    <TdStyled>
                        <select onChange={e => setConcreteGrade(e.target.value)}>

                            <option
                                disabled
                                selected
                                hidden
                                value="default"
                            >
                                Grade
                            </option>

                            {structuralData
                                .concreteArr
                                .map((concreteGrade) => {
                                    return (
                                        <option value={concreteGrade} >
                                            {concreteGrade}
                                        </option>
                                    )
                                })
                            }

                        </select>
                    </TdStyled>



                    <TdStyled>
                        <select onChange={e => setSteelGrade(e.target.value)}>

                            <option
                                disabled
                                selected
                                hidden
                                value="default"
                            >
                                Grade
                            </option>

                            {structuralData
                                .steelArr
                                .map((steelGrade) => {
                                    return (
                                        <option value={steelGrade} >
                                            {steelGrade}
                                        </option>
                                    )
                                })
                            }

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
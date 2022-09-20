
import {
    TableStyled,
    InputStyled,
    TdStyled,
    TdStyledDimensions,
} from './newBeam2Styled';

const BeamInfo = (props) => {
    let projectName = props.projectName;
    let setProjectName = props.setProjectName;
    let beamLevel = props.beamLevel;
    let setBeamLevel = props.setBeamLevel;
    let beamNumberString = props.beamNumberString;
    let setbeamNumberString = props.setbeamNumberString;
    let setRebarPosition = props.setRebarPosition;
    let setConcreteGrade = props.setConcreteGrade;
    let structuralData = props.structuralData;
    let setSteelGrade = props.setSteelGrade;

    return (
        <TableStyled>
            <thead>
                <tr>
                    <TdStyled>Project name</TdStyled>
                    <TdStyled>Level</TdStyled>
                    <TdStyled>Beam</TdStyled>
                    <TdStyled>Reinforcement</TdStyled>
                    <TdStyled>Concrete</TdStyled>
                    <TdStyled>Steel</TdStyled>
                </tr>

                <tr>
                    <TdStyledDimensions>[-]</TdStyledDimensions>
                    <TdStyledDimensions>[-]</TdStyledDimensions>
                    <TdStyledDimensions>[№]</TdStyledDimensions>
                    <TdStyledDimensions>[position]</TdStyledDimensions>
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
                            value={projectName}
                            onChange={e => setProjectName(e.target.value)}
                        />
                    </TdStyled>



                    <TdStyled>
                        <InputStyled
                            id="level"
                            name='level'
                            type="number"
                            step='0.01'
                            value={beamLevel}
                            // value={beamLevel}
                            onChange={e => setBeamLevel(Number(e.target.value))}
                        />
                    </TdStyled>



                    <TdStyled>
                        <InputStyled
                            id="projectsName"
                            name='projectsName'
                            type="text"
                            placeholder="B01"
                            value={beamNumberString}
                            // value={beamNumberString}
                            onChange={e => setbeamNumberString(e.target.value)}
                        />
                    </TdStyled>



                    <TdStyled>
                        <select name="steel" id="steel" onChange={e => setRebarPosition(e.target.value)}>

                            <option disabled selected hidden value="default">-</option>

                            < option value='top' >top</option>
                            < option value='bottom' >bottom</option>
                        </select>
                    </TdStyled>



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
                                return (<option value={concreteGrade}>{concreteGrade}</option>)
                            })}
                        </select>
                    </TdStyled>



                    <TdStyled>
                        <select name="steel" id="steel" onChange={e => setSteelGrade(e.target.value)}>

                            <option disabled selected hidden value="default">Grade</option>

                            {structuralData.steelArr.map((steelGrade) => {
                                return < option value={steelGrade} > {steelGrade}</option>
                            })}
                        </select>
                    </TdStyled>

                </tr>
            </tbody>
        </TableStyled>
    )
}

export default BeamInfo;
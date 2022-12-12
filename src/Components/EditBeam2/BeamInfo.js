
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
    let structuralData = props.structuralData;
    let setConcreteGrade = props.setConcreteGrade;
    let setSteelGrade = props.setSteelGrade;

    let beamObj = props.beam ? props.beam : null;

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
                            id="beamNumber"
                            name='beamNumber'
                            type="text"
                            placeholder="B01"
                            value={beamNumberString}
                            // value={beamNumberString}
                            onChange={e => setbeamNumberString(e.target.value)}
                        />
                    </TdStyled>


                    <TdStyled>
                        <select name="rebarPosition" id="rebarPosition" onChange={e => setRebarPosition(e.target.value)}>

                            <option disabled selected hidden value="default">-</option>

                            {structuralData.rebarPosition
                                .map((rebarPosition) => {
                                    return (beamObj?.rebarPosition === rebarPosition
                                        ? <option selected value={rebarPosition}>{rebarPosition}</option>
                                        : <option value={rebarPosition}>{rebarPosition}</option>)
                                })}
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

                            {structuralData
                                .concreteArr
                                .map((concreteGrade) => {
                                    return (beamObj?.concrete === concreteGrade
                                        ? <option selected value={beamObj.concrete}>{beamObj.concrete}</option>
                                        : <option value={concreteGrade}>{concreteGrade}</option>)
                                })}
                        </select>
                    </TdStyled>


                    <TdStyled>
                        <select name="steel" id="steel" onChange={e => setSteelGrade(e.target.value)}>

                            <option disabled selected hidden value="default">Grade</option>

                            {structuralData
                                .steelArr
                                .map((steelGrade) => {
                                    return (beamObj?.steel === steelGrade
                                        ? < option selected value={steelGrade} > {steelGrade}</option>
                                        : < option value={steelGrade} > {steelGrade}</option>)
                                })}
                        </select>
                    </TdStyled>

                </tr>
            </tbody>
        </TableStyled >
    )
}

export default BeamInfo;
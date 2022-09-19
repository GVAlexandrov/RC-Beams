
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
    let beamObj = props.beam ? props.beam : null;

    return (
        <TableStyled>
            <thead>
                <tr>
                    <TdStyled>Project name</TdStyled>
                    <TdStyled>Level</TdStyled>
                    <TdStyled>Beam</TdStyled>
                    <TdStyled>Reinforcement</TdStyled>
                </tr>

                <tr>
                    <TdStyledDimensions>[-]</TdStyledDimensions>
                    <TdStyledDimensions>[-]</TdStyledDimensions>
                    <TdStyledDimensions>[№]</TdStyledDimensions>
                    <TdStyledDimensions>[position]</TdStyledDimensions>
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

                            {structuralData.rebarPosition
                                .map((rebarPosition) => {
                                    return (beamObj?.rebarPosition === rebarPosition
                                        ? <option selected value={rebarPosition}>{rebarPosition}</option>
                                        : <option value={rebarPosition}>{rebarPosition}</option>)
                                })}


                        </select>
                    </TdStyled>

                </tr>
            </tbody>
        </TableStyled >
    )
}

export default BeamInfo;
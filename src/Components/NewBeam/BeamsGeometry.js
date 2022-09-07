import { DivStyled, LabelStyledName, LabelStyledDimension, DivErrStyled, SectionDivStyled, H2Styled } from './newBeamStyled'

const BeamsGeometry = (props) => {
    const heightError = props.heightError;
    const widthError = props.widthError;

    return (
        <SectionDivStyled>
            <H2Styled>Beams geometry</H2Styled>

            <DivStyled >
                <LabelStyledName htmlFor="height">Height</LabelStyledName>
                <input
                    id="height"
                    name='height'
                    type="number"
                    placeholder="500"
                    defaultValue={props.height ? props.height : ''}
                />
                <LabelStyledDimension htmlFor="height">[mm]</LabelStyledDimension>
            </DivStyled>

            {heightError
                ? (
                    <DivErrStyled >
                        <p>{heightError}</p>
                    </DivErrStyled>
                )
                : (<></>)
            }

            <DivStyled>
                <LabelStyledName htmlFor="width">Width</LabelStyledName>
                <input
                    id="width"
                    name='width'
                    type="number"
                    placeholder="250"
                    defaultValue={props.width ? props.width : ''}
                />
                <LabelStyledDimension htmlFor="width">[mm]</LabelStyledDimension>
            </DivStyled>

            {widthError
                ? (
                    <DivErrStyled >
                        <p>{widthError}</p>
                    </DivErrStyled>
                )
                : (<></>)
            }
        </SectionDivStyled>
    )
}

export { BeamsGeometry };
import { DivStyled, LabelStyledName, LabelStyledDimension, DivErrStyled } from './newBeamStyled'

const BeamsGeometry = (props) => {
    const heightError = props.heightError;
    const widthError = props.widthError;

    return (
        <>
            <DivStyled >
                <LabelStyledName htmlFor="height">Height</LabelStyledName>
                <input id="height" name='height' type="number" placeholder="500" />
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
                <input id="width" name='width' type="number" placeholder="250" />
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
        </>
    )
}

export { BeamsGeometry };
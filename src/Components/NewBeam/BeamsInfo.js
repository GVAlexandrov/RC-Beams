import { DivStyled, LabelStyledName, LabelStyledDimension } from './newBeamStyled'

const BeamsInfo = (props) => {

    return (
        <>
            <DivStyled >
                <LabelStyledName htmlFor="level">Level</LabelStyledName>
                <input id="level" name='level' type="text" placeholder="First floor / +3.10" />
                <LabelStyledDimension htmlFor="level">[-]</LabelStyledDimension>
            </DivStyled>

            <DivStyled >
                <LabelStyledName htmlFor="beamsNumber">Beam's number</LabelStyledName>
                <input id="beamsNumber" name='beamsNumber' type="text" placeholder="B01" />
                <LabelStyledDimension htmlFor="beamsNumber">[-]</LabelStyledDimension>
            </DivStyled>
        </>
    )
}

export { BeamsInfo };
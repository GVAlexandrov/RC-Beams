import { DivStyled, LabelStyledName, LabelStyledDimension, SectionDivStyled, H2Styled } from './newBeamStyled'

const BeamsInfo = (props) => {

    return (
        <SectionDivStyled>
            <H2Styled>Beams general info</H2Styled>

            <DivStyled >
                <LabelStyledName htmlFor="level">Level</LabelStyledName>
                <input id="level" name='level' type="text" placeholder="First floor / +3.10" defaultValue={props.level ? props.level : ''} />
                <LabelStyledDimension htmlFor="level">[-]</LabelStyledDimension>
            </DivStyled>

            <DivStyled >
                <LabelStyledName htmlFor="beamsNumber">Beam's number</LabelStyledName>
                <input id="beamsNumber" name='beamsNumber' type="text" placeholder="B01" defaultValue={props.beamsNumber ? props.beamsNumber : ''} />
                <LabelStyledDimension htmlFor="beamsNumber">[-]</LabelStyledDimension>
            </DivStyled>
        </SectionDivStyled>
    )
}

export { BeamsInfo };
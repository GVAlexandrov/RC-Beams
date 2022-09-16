import { DivStyled, LabelStyledName, LabelStyledDimension, SectionDivStyled, H2Styled } from './newBeamStyled'

const Forces = (props) => {

    return (
        <SectionDivStyled>
            <H2Styled>Forces</H2Styled>

            <DivStyled>
                <LabelStyledName htmlFor="bendingMoment">Bending Moment</LabelStyledName>
                <input
                    id="bendingMoment"
                    name='bendingMoment'
                    type="number"
                    placeholder="10"
                    step="5"
                    defaultValue={props.bendingMoment ? props.bendingMoment : ''}
                />
                <LabelStyledDimension htmlFor="bendingMoment">[kN.m]</LabelStyledDimension>
            </DivStyled>

            <DivStyled>
                <LabelStyledName htmlFor="shearForce">Shear Force</LabelStyledName>
                <input
                    id="shearForce"
                    name='shearForce'
                    type="number"
                    placeholder="10"
                    defaultValue={props.shearForce ? props.shearForce : ''}
                />
                <LabelStyledDimension htmlFor="shearForce">[kN]</LabelStyledDimension>
            </DivStyled>

            <DivStyled>
                <LabelStyledName htmlFor="torsion">Torsion</LabelStyledName>
                <input
                    id="torsion"
                    name='torsion'
                    type="number"
                    placeholder="10"
                    defaultValue={props.torsion ? props.torsion : ''}
                />
                <LabelStyledDimension htmlFor="torsion">[kN.m]</LabelStyledDimension>
            </DivStyled>
        </SectionDivStyled>
    )
}

export { Forces };
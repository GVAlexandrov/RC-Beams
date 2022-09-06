import { DivStyled, LabelStyledName, LabelStyledDimension } from './newBeamStyled'

const Forces = (props) => {

    return (
        <>
            <DivStyled>
                <LabelStyledName htmlFor="bendingMoment">Bending Moment</LabelStyledName>
                <input id="bendingMoment" name='bendingMoment' type="number" placeholder="10" />
                <LabelStyledDimension htmlFor="bendingMoment">[kN.m]</LabelStyledDimension>
            </DivStyled>

            <DivStyled>
                <LabelStyledName htmlFor="shearForce">Shear Force</LabelStyledName>
                <input id="shearForce" name='shearForce' type="number" placeholder="10" />
                <LabelStyledDimension htmlFor="shearForce">[kN]</LabelStyledDimension>
            </DivStyled>

            <DivStyled>
                <LabelStyledName htmlFor="torsion">Torsion</LabelStyledName>
                <input id="torsion" name='torsion' type="number" placeholder="10" />
                <LabelStyledDimension htmlFor="torsion">[kN.m]</LabelStyledDimension>
            </DivStyled>
        </>
    )
}

export { Forces };
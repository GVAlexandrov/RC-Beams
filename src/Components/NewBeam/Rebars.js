import { DivStyled, LabelStyledName, LabelStyledDimension, DivErrStyled, SectionDivStyled, H2Styled } from './newBeamStyled';
import * as structuralData from '../../services/structuralData';

const Rebars = (props) => {
    const rebarError = props.rebarError;

    return (
        <SectionDivStyled>
            <H2Styled>Rebars info</H2Styled>

            <DivStyled>
                <LabelStyledName htmlFor="rebar">Rebar diameter</LabelStyledName>
                <select name="rebar" id="rebar">
                    <option disabled selected hidden value="default">Select rebar...</option>

                    {structuralData.rebarArr.map((rebarDiameter) => {
                        return Number(props.rebar) === Number(rebarDiameter)
                            ? <option selected value={rebarDiameter}>{rebarDiameter}</option>
                            : <option value={rebarDiameter}>{rebarDiameter}</option>
                    })}

                </select>
                <LabelStyledDimension htmlFor="rebar">[mm]</LabelStyledDimension>
            </DivStyled>

            {rebarError
                ? (
                    <DivErrStyled >
                        <p>{rebarError}</p>
                    </DivErrStyled>
                )
                : (<></>)
            }

            <DivStyled>
                <LabelStyledName htmlFor="numberRebars">Rebars</LabelStyledName>
                <input id="numberRebars" name='numberRebars' type="number" placeholder="10" />
                <LabelStyledDimension htmlFor="numberRebars">[no.]</LabelStyledDimension>
            </DivStyled>
        </SectionDivStyled>
    )
}

export { Rebars };
import { DivStyled, LabelStyledName, LabelStyledDimension, DivErrStyled } from './newBeamStyled'

const Rebars = (props) => {
    const structuralData = props.structuralData;
    const rebarError = props.rebarError;

    return (
        <>
            <DivStyled>
                <LabelStyledName htmlFor="rebar">Rebar diameter</LabelStyledName>
                <select name="rebar" id="rebar">
                    <option disabled selected hidden value="default">Select rebar...</option>
                    {structuralData.rebarArr.map((rebarDiameter) => {
                        return <option value={rebarDiameter}>{rebarDiameter}</option>
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
        </>
    )
}

export { Rebars };
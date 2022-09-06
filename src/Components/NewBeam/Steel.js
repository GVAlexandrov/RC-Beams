import { DivStyled, LabelStyledName, LabelStyledDimension, DivErrStyled, InputReadOnlyStyled } from './newBeamStyled'

const Steel = (props) => {
    const structuralData = props.structuralData;
    const setFy = props.setFy;
    const fy = props.fy;
    const fyd = props.fyd;
    const setGammaMS = props.setGammaMS;
    const steelError = props.steelError;

    return (
        <>
            <DivStyled>
                <LabelStyledName htmlFor="steel">Steel</LabelStyledName>
                <select name="steel" id="steel" onChange={e => setFy(Number(e.target.value.slice(1, 4)))}>
                    <option disabled selected hidden value="default">Select steel...</option>
                    {structuralData.steelArr.map((steelGrade) => {
                        return <option value={steelGrade}>{steelGrade}</option>
                    })}
                </select>
                <LabelStyledDimension htmlFor="steel">[MPa]</LabelStyledDimension>
            </DivStyled>

            {steelError
                ? (
                    <DivErrStyled >
                        <p>{steelError}</p>
                    </DivErrStyled>
                )
                : (<></>)
            }

            <DivStyled>
                <LabelStyledName htmlFor="fy">fy</LabelStyledName>
                <InputReadOnlyStyled id="fy" name='fy' type="text" value={fy} />
                <LabelStyledDimension htmlFor="fy">[MPa]</LabelStyledDimension>
            </DivStyled>

            <DivStyled>
                <LabelStyledName htmlFor="gammaMS">γm,s</LabelStyledName>
                <select name="gammaMS" id="gammaMS" onChange={e => setGammaMS(e.target.value)}>
                    <option disabled selected hidden value="default">Select γm,s...</option>
                    {structuralData.gammaMSArr.map((gammaMS) => {
                        return <option value={gammaMS}>{gammaMS}</option>
                    })}
                </select>
                <LabelStyledDimension htmlFor="concrete">[MPa]</LabelStyledDimension>
            </DivStyled>

            <DivStyled>
                <LabelStyledName htmlFor="fyd">fyd</LabelStyledName>
                <InputReadOnlyStyled id="fyd" name='fyd' type="text" value={(fyd && fyd !== Infinity && !isNaN(fyd)) ? fyd.toFixed(0) : ''} />
                <LabelStyledDimension htmlFor="fyd">[MPa]</LabelStyledDimension>
            </DivStyled>
        </>
    )
}

export { Steel };
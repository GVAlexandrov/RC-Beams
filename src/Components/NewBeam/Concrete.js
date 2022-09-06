import { DivStyled, LabelStyledName, LabelStyledDimension, DivErrStyled, InputReadOnlyStyled } from './newBeamStyled'

const Concrete = (props) => {
    const structuralData = props.structuralData;
    const setFck = props.setFck;
    const concreteError = props.concreteError;
    const fck = props.fck;
    const fcd = props.fcd;
    const fcm = props.fcm;
    const fctm = props.fctm;
    const setAlphaCC = props.setAlphaCC;
    const setGammaMC = props.setGammaMC;

    return (
        <>
            <DivStyled>
                <LabelStyledName htmlFor="concrete">Concrete</LabelStyledName>
                <select name="concrete" id="concrete" onChange={e => setFck(Number(e.target.value.slice(1, 3)))}>
                    <option disabled selected hidden value="default">Select concrete...</option>
                    {structuralData.concreteArr.map((concreteGrade) => {
                        return <option value={concreteGrade}>{concreteGrade}</option>
                    })}
                </select>
                <LabelStyledDimension htmlFor="concrete">[-]</LabelStyledDimension>
            </DivStyled>

            {concreteError
                ? (
                    <DivErrStyled >
                        <p>{concreteError}</p>
                    </DivErrStyled>
                )
                : (<></>)
            }


            <DivStyled>
                <LabelStyledName htmlFor="fck">fck</LabelStyledName>
                <InputReadOnlyStyled id="fck" name='fck' type="text" value={fck} />
                <LabelStyledDimension htmlFor="fck">[MPa]</LabelStyledDimension>
            </DivStyled>


            <DivStyled>
                <LabelStyledName htmlFor="alphaCC">αcc</LabelStyledName>
                <select name="alphaCC" id="alphaCC" onChange={e => setAlphaCC(e.target.value)}>
                    <option disabled selected hidden value="default">Select αcc...</option>
                    {structuralData.alphaCCArr.map((alphaCC) => {
                        return <option value={alphaCC}>{alphaCC}</option>
                    })}
                </select>
                <LabelStyledDimension htmlFor="alphaCC">[-]</LabelStyledDimension>
            </DivStyled>

            <DivStyled>
                <LabelStyledName htmlFor="gammaMC">γm,c</LabelStyledName>
                <select name="gammaMC" id="gammaMC" onChange={e => setGammaMC(e.target.value)}>
                    <option disabled selected hidden value="default">Select γm,c...</option>
                    {structuralData.gammaMCArr.map((gammaMC) => {
                        return <option value={gammaMC}>{gammaMC}</option>
                    })}
                </select>
                <LabelStyledDimension htmlFor="gammaMC">[-]</LabelStyledDimension>
            </DivStyled>

            <DivStyled>
                <LabelStyledName htmlFor="fcd">fcd</LabelStyledName>
                <InputReadOnlyStyled id="fcd" name='fcd' type="text" value={(fcd && fcd !== Infinity) ? fcd.toFixed(2) : ''} />
                <LabelStyledDimension htmlFor="fcd">[MPa]</LabelStyledDimension>
            </DivStyled>

            <DivStyled>
                <LabelStyledName htmlFor="fcm">fcm</LabelStyledName>
                <InputReadOnlyStyled id="fcm" name='fcm' type="text" value={fcm > 8 ? fcm.toFixed(2) : ''} />
                <LabelStyledDimension htmlFor="fcm">[MPa]</LabelStyledDimension>
            </DivStyled>

            <DivStyled>
                <LabelStyledName htmlFor="fctm">fctm</LabelStyledName>
                <InputReadOnlyStyled id="fctm" name='fctm' type="text" value={fctm.toFixed(2)} />
                <LabelStyledDimension htmlFor="fctm">[MPa]</LabelStyledDimension>
            </DivStyled>

            <DivStyled>
                <LabelStyledName htmlFor="fctk95">fctk05</LabelStyledName>
                <InputReadOnlyStyled id="fctk05" name='fctk05' type="text" value={(0.7 * fctm).toFixed(2)} />
                <LabelStyledDimension htmlFor="fctk05">[MPa]</LabelStyledDimension>
            </DivStyled>

            <DivStyled>
                <LabelStyledName htmlFor="fctk95">fctk95</LabelStyledName>
                <InputReadOnlyStyled id="fctk95" name='fctk95' type="text" value={(1.3 * fctm).toFixed(2)} />
                <LabelStyledDimension htmlFor="fctk95">[MPa]</LabelStyledDimension>
            </DivStyled>

            <DivStyled>
                <LabelStyledName htmlFor="Ecm">Ecm</LabelStyledName>
                <InputReadOnlyStyled id="Ecm" name='Ecm' type="text" value={(22 * (fcm / 10) ** 0.3).toFixed(1)} />
                <LabelStyledDimension htmlFor="Ecm">[GPa]</LabelStyledDimension>
            </DivStyled>
        </>
    )
}

export { Concrete };
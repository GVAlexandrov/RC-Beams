import styled from 'styled-components';


const ExistingBeam = (beamObj) => {
    const { level, beamsNumber, height, width, bendingMoment, shearForce, torsion, concrete, steel, rebar } = beamObj.beam[1];
    const beamArr = [level, beamsNumber, height, width, bendingMoment, shearForce, torsion, concrete, steel, rebar];

    return (
        <TrStyled key={beamObj.beam[0]} id={beamObj.beam[0]}>
            {
                beamArr.map((x) => {
                    return (
                        <TdStyled>
                            <p>{x}</p>
                        </TdStyled>
                    )
                })
            }


            <TdStyled>
                <ButtonStyled id={beamObj.beam[0]}>Info</ButtonStyled>
            </TdStyled>


            <TdStyled >
                <ButtonStyled id={beamObj.beam[0]}>X</ButtonStyled>
            </TdStyled>
        </TrStyled>
    )
}

const TrStyled = styled.tr`
position:relative;
height:10px;
margin:0;
background:#bdbbb7;
/* transition: all 500ms ease-out ; */
/* outline: thin solid #585858; */
/* transition: color 500ms ease-out step-end; */
&:hover{
    background:#969592;
    /* color:white; */
    font-weight:bold;
}
`

const ButtonStyled = styled.button`
font-weight:bold;
color:white;
background:black;
padding: 10px 10px;
border-radius:5px;
border-color:red;

&:hover{
    color:red;
    cursor: pointer;
    border-color:white;
}
`

const TdStyled = styled.td`
padding:0px;
`

export default ExistingBeam;
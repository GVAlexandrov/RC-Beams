import styled from 'styled-components';


const ExistingBeam = (beamObj) => {
    const { level, beamsNumber, height, width, bendingMoment, concrete, steel, rebar } = beamObj.beam[1];
    const beamArr = [level, beamsNumber, height, width, bendingMoment, concrete, steel, rebar];

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
                <ButtonStyled>Edit</ButtonStyled>
            </TdStyled>

            <TdStyled >
                <ButtonStyled>X</ButtonStyled>
            </TdStyled>
        </TrStyled>
    )
}

const TrStyled = styled.tr`
position:relative;
height:10px;
margin:0;
background:gray;
transition: all 500ms ease-out ;
outline: thin solid #585858;
/* transition: color 500ms ease-out step-end; */
&:hover{
    background:black;
    color:white;
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
/* border:1px solid;
border-color:#585858; */
`

export default ExistingBeam;
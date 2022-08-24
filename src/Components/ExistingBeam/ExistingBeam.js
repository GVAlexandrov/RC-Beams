import styled from 'styled-components';


const ExistingBeam = (beamObj) => {
    const { height, width, concrete, steel, rebar } = beamObj.beam[1];
    const beamArr = [height, width, concrete, steel, rebar];

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
background:gray;
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
border:1px solid;
border-color:#585858;
`

export default ExistingBeam;
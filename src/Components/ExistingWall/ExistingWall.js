import styled from 'styled-components';


const ExistingWall = (wallObj) => {
    const { projectName, wallLevel, wallNumberString, length, width, concrete, steel } = wallObj.wall[1];

    const wallArr = [projectName, Number(wallLevel).toFixed(2), wallNumberString, length, width, concrete, steel];

    return (
        <TrStyled key={wallObj.wall[0]} id={wallObj.wall[0]}>
            {
                wallArr.map((x) => {
                    return (
                        <TdStyled key={x}>
                            <p>{x}</p>
                        </TdStyled>
                    )
                })
            }


            <TdStyled>
                <ButtonStyled id={wallObj.wall[0]}>Edit</ButtonStyled>
            </TdStyled>


            <TdStyled >
                <ButtonStyled id={wallObj.wall[0]}>X</ButtonStyled>
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
min-width:60px;
`

export default ExistingWall;
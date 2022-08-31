import styled from 'styled-components';

const MainStyled = styled.main`
position:relative;
margin:auto;
margin-bottom:30px;
padding-bottom:20px;
width:60%;
max-width:500px;
min-width:300px;
border: 2px solid black;
border-top-left-radius:30px;
border-bottom-right-radius:30px;
`;

const DivStyled = styled.div`
position: relative;
display:flex;
justify-content: space-between;
padding:5px 0px;
font-size: 18px;
height:25px;
vertical-align:bottom;
display:flex;
justify-content:center;
align-items:center;

&:hover{
    background:black;
    color:red;
}
`;

const FormStyled = styled.form`
margin:auto;
max-width:500px;
`;

const LabelStyledName = styled.label`
margin: 10px;
`

const LabelStyledDimension = styled.label`
margin: 10px;
font-style:italic;
font-size:16px;
`

const DivErrStyled = styled.div`
    color:darkred;
    font-style: italic;
    margin-top:0px;
`;

const ButtonStyled = styled.button`
font-weight:bold;
color:white;
background:black;
padding: 10px 10px;
border-radius:5px;
border-color:red;
cursor: pointer;
`;

const InputReadOnlyStyled = styled.input`
background-color:yellow;
`

export { MainStyled, DivStyled, FormStyled, LabelStyledName, LabelStyledDimension, DivErrStyled, ButtonStyled, InputReadOnlyStyled }
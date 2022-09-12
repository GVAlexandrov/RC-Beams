import styled from 'styled-components';

const MainStyled = styled.main`
position:relative;
margin:auto;
margin-bottom:30px;
padding-bottom:20px;
width:60%;
max-width:500px;
min-width:300px;
/* border: 2px solid black;
border-top-left-radius:30px;
border-bottom-right-radius:30px; */
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
margin:0px 10px;
font-weight:bold;
color:white;
background:black;
padding: 10px 50px;
border-radius:5px;
border-color:red;
cursor: pointer;
`;

const InputReadOnlyStyled = styled.input`
background-color:#808080;
color:darkred;
border:1px solid black;
text-align:center;
`;

const H2Styled = styled.h2`
margin:0px;
padding:0px;
padding-top:10px;
padding-bottom:10px;
/* transform:rotate(-90deg); */
/* border-bottom: 1px solid black; */
&:hover{
    background-color:black;
    color:red;
}
`;

const SectionDivStyledTop = styled.div`
position:relative;
background-color:#808080;
color:black;
border: 1px solid black;
border-top-right-radius:30px;

&:hover{
background-color:black;
color:red;
}
`;

const SectionDivStyled = styled.div`
position:relative;
margin-top:9px;
background-color:#808080;
color:black;
border: 1px solid black;

&:hover{
/* border: 2px solid black; */
}
`;

const SectionDivStyledBottom = styled.div`
position:relative;
margin-top:9px;
padding:10px 0px;
background-color:#808080;
color:black;
border: 1px solid black;
border-bottom-left-radius:30px;

&:hover{
background-color:black;
}
`;


export { MainStyled, DivStyled, FormStyled, LabelStyledName, LabelStyledDimension, DivErrStyled, ButtonStyled, InputReadOnlyStyled, H2Styled, SectionDivStyled, SectionDivStyledTop, SectionDivStyledBottom }
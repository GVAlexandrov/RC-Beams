import styled from 'styled-components';

const MainStyled = styled.main`
position:relative;
margin:auto;
padding-bottom:20px;
width:60%;
max-width:500px;
min-width:300px;
border: 1px solid black;
border-top-left-radius:30px;
border-bottom-right-radius:30px;
overflow: hidden;
&:hover{
    /* border-top-left-radius:0px;
    border-bottom-right-radius:0px;
    border-top-right-radius:30px;
    border-bottom-left-radius:30px; */
}
`;

const ButtonStyled = styled.button`
display: block;
margin:20px auto;
margin-bottom:20px;
font-size:16px;
background:#bdbbb7;
padding: 10px 50px;
border-radius:5px;
border-color:black;
cursor: pointer;
&:hover{
background-color:#969592;
}
&:active {
background-color:#bdbbb7;
/* background-color:black;
color:red;
border-color:red; */
}
`;

const DivStyled = styled.div`
margin:0px 0px;
padding:20px 0px;
font-size:19px;
/* text-transform: capitalize; */

&:hover{
    background:#969592;
    /* color:white; */
}
`;

const H1Styled = styled.h1`
margin: 0px;
padding: 20px 0px;
width:100%;

&:hover{
    background:#969592;
    /* color:white; */
}
`;

const LabelStyled = styled.label`
padding-right: 10px;
`;

const StyledForm = styled.form`
`;

const DivErrorStyled = styled.div`
color:red;
background-color:white;
font-size:20px;
/* font-weight: bold; */
border: 1.5px solid red;
border-top-right-radius:15px;
border-bottom-left-radius:15px;
display: inline-block;
`;

const PErrorStyled = styled.p`
margin:auto;
padding:10px;
`;

export {
    MainStyled,
    ButtonStyled,
    DivStyled,
    H1Styled,
    LabelStyled,
    StyledForm,
    DivErrorStyled,
    PErrorStyled,
}
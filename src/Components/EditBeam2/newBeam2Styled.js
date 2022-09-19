import styled from 'styled-components';


const TableStyled = styled.table`
margin:20px auto;
padding:10px;
border: 1px solid black;
border-top-right-radius:15px;
border-bottom-left-radius:15px;
&:hover{
background-color:#969592;
}
`;

const InputStyled = styled.input`
max-width:50px;
/* background-color:#bdbbb7; */

&:focus{
    background:white;
}
`;

const TdStyled = styled.td`
min-width:60px;
padding:0px 10px;
`;

const TdStyledDimensions = styled.td`
min-width:50px;
font-style: italic;
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
    TableStyled,
    InputStyled,
    TdStyled,
    TdStyledDimensions,
    ButtonStyled,
    DivErrorStyled,
    PErrorStyled
}
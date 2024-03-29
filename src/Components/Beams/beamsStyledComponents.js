import styled from 'styled-components';


const TableStyled = styled.table`
position:relative;
min-width:600px;
width:70%;
padding:20px;
margin:auto;
margin:20px auto;
/* margin-top:35px; */
border: 1px solid black;
border-top-right-radius:30px;
border-bottom-left-radius:30px;
z-index:0;
`

const THeadStyledMain = styled.thead`
position:sticky;
top:70px;
text-transform:capitalize;
font-size:18px;
z-index:100;
/* background:#bdbbb7; */
`

const TrStyled = styled.tr`
padding:0px;
margin:0px;
`

const TrStyled2 = styled.tr`
padding:0px;
margin:0px;
font-style:italic;
`

export {
  TableStyled,
  THeadStyledMain,
  TrStyled,
  TrStyled2,
};
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const HeaderStyled = styled.header`
position: fixed;
width: 100%;
top:0px;
z-index:10;
`;

const NavStyled = styled.nav`
background-color: black;
width:100%;
height:60px;
margin:0px;
border:1px;
border-bottom-left-radius:80px;

display:flex;
justify-content:end;
align-items:center;
font-size: 23px;
top:0px;
left:0px;
min-width:690px;
/* z-index:1; */

&:hover{
    color:red;    
}
`;

const UlStyled = styled.ul`
position:relative;
list-style:none;
text-align:right;
right:15px;
display:flex;

@media only screen and (max-width: 690px) {
    position:absolute;
    top:0px;
    right:0px;
    margin:0px;
    padding:0px;
    padding-top:60px;
    flex-direction: column;    
    background-color:black;
    width:100vw;
    z-index:100;
    text-align:center;
    min-width:260px;
    display:flex;
border-bottom-left-radius:80px;
  }
`;

const LiStyled = styled.li`
display:inline-block;
margin:15px;
height:100%;
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration:none;
  color: white;
  
  &:hover{
    color:red;
}
`;

const DivHamburgerMenu = styled.div`
cursor: pointer;
position: absolute;
display:flex;
flex-direction:column;
justify-content:space-between;
top:15px;
right:20px;
width:30px;
height:30px;;
background-color:black;
visibility:hidden;

@media only screen and (max-width: 690px) {
visibility:visible;  
z-index:101;
  }
`;

const SpanHamburgerMenu = styled.span`
position: relative;
background-color:white;
width:100%;
height:3px;
border-radius:1.5px;
`;


export {
  HeaderStyled,
  NavStyled,
  UlStyled,
  LiStyled,
  NavLinkStyled,
  DivHamburgerMenu,
  SpanHamburgerMenu
};

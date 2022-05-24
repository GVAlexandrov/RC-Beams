import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {

    return (
        <NavStyled >
            <UlStyled>
                <LiStyled><NavLinkStyled to="/beams">RC Beams</NavLinkStyled></LiStyled>
                <LiStyled><NavLinkStyled to="/beams/new-beam">New Beam</NavLinkStyled></LiStyled>

                <LiStyled><NavLinkStyled to="/register">Register</NavLinkStyled></LiStyled>
                <LiStyled><NavLinkStyled to="/login">Login</NavLinkStyled></LiStyled>
                <LiStyled><NavLinkStyled to="/">Logout</NavLinkStyled></LiStyled>
            </UlStyled>
        </NavStyled >
    )
}

const NavStyled = styled.nav`
background: black;
height:80px;
display:flex;
justify-content:end;
align-items:center;
font-size: 1.5rem;
position: sticky;
/* top:0; */
/* z-index:1; */

&:hover{
    color:red;
    
}
`

const UlStyled = styled.ul`
list-style:none;
text-align:right;
`;

const LiStyled = styled.li`
display:inline;
margin:1rem;
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration:none;
  color: white;

  
  &:hover{
    color:red;
}
`;


export default Header;

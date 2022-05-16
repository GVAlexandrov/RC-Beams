import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {

    return (
        <NavStyled >
            <ul>
                <li><NavLink to="/beams">RC Beams</NavLink></li>
                <li><NavLink to="/beams/new-beam">New Beam</NavLink></li>

                <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/">Logout</NavLink></li>
            </ul>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
background: black;
color:white;
height:80px;
display:flex;
justify-content:center;
align-items:center;
font-size: 1.2rem;
position: sticky;
top:0;
z-index:1;

&:hover{
    color:red;
}
`

export default Header;

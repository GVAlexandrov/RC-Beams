import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../services/authService';
import styled from 'styled-components';

const Header = ({
    userEmail,
    setUserEmail
}) => {

    const links = [
        { menuName: "Register", path: "/register", isAuth: false },
        { menuName: "Login", path: "/login", isAuth: false },
        { menuName: "RC Beams", path: "/beams", isAuth: true },
        { menuName: "New Beam", path: "/beams/new-beam", isAuth: true },
    ]

    const navigate = useNavigate();

    const logoutHandler = (e) => {
        e.preventDefault();
        logout();
        setUserEmail(null);
        localStorage.removeItem('email');
        localStorage.removeItem('uid');
        navigate('/');
    };


    return (
        <header>
            <NavStyled >
                <UlStyled>
                    {(userEmail !== null)
                        ? <NavLinkStyled to='/beams'><LiStyled>Hello, {localStorage.getItem('email')}</LiStyled></NavLinkStyled>
                        : ''
                    }

                    {
                        links.map(link => {
                            if (userEmail !== null && link.isAuth) {
                                return (
                                    <LiStyled><NavLinkStyled to={link.path}>{link.menuName}</NavLinkStyled></LiStyled>
                                )
                            } else if (userEmail === null && !link.isAuth) {
                                return (
                                    <LiStyled><NavLinkStyled to={link.path}>{link.menuName}</NavLinkStyled></LiStyled>
                                )
                            }

                            return '';
                        })
                    }

                    {(userEmail !== null)
                        ? <LiStyled><NavLinkStyled onClick={logoutHandler} to="/">Logout</NavLinkStyled></LiStyled>
                        : ''
                    }

                    {/* <LiStyled><NavLinkStyled onClick={logoutHandler} to="/">Logout</NavLinkStyled></LiStyled> */}
                </UlStyled>
            </NavStyled >
        </header>
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

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
        <HeaderStyled>
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
        </HeaderStyled>
    )
}

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
`

const UlStyled = styled.ul`
position:relative;
list-style:none;
text-align:right;
right:15px;
display:flex;

@media only screen and (max-width: 690px) {
    flex-direction: column;    
  }
`;

const LiStyled = styled.li`
display:inline-block;
margin:15px;
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration:none;
  color: white;
  
  &:hover{
    color:red;
}
`;


export default Header;

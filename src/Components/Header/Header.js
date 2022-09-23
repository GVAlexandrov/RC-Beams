import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/authService';
import {
    HeaderStyled,
    NavStyled,
    UlStyled,
    LiStyled,
    NavLinkStyled,
    DivHamburgerMenu,
    SpanHamburgerMenu,
    DivLogoStyled
} from './headerStyledComponents';

const Header = ({
    userEmail,
    setUserEmail
}) => {

    const links = [
        { menuName: "Register", path: "/register", isAuth: false },
        { menuName: "Login", path: "/login", isAuth: false },
        { menuName: "RC Beams", path: "/beams", isAuth: true },
        { menuName: "New Beam", path: "/beams/new-beam", isAuth: true },
        { menuName: "New Wall", path: "/walls/new-wall", isAuth: true },
    ]

    const navigate = useNavigate();

    const logoutHandler = (e) => {
        e.preventDefault();
        logout()();
        setUserEmail(null);
        localStorage.removeItem('email');
        localStorage.removeItem('uid');
        navigate('/');
    };

    const togleMenuHandler = (e) => {
        const menuStyle = document.getElementById('MenuUL').style;

        menuStyle.display === 'none'
            ? menuStyle.display = ''
            : menuStyle.display = 'none';
    }

    return (
        <HeaderStyled>
            <NavStyled >
                <DivLogoStyled>
                    <NavLinkStyled to='/'>RC Design</NavLinkStyled>
                </DivLogoStyled>

                <UlStyled id='MenuUL'>
                    {(userEmail !== null)
                        ? <NavLinkStyled to='/'><LiStyled>Hello, {localStorage.getItem('email')}</LiStyled></NavLinkStyled>
                        : ''
                    }

                    {
                        links.map(link => {
                            if (userEmail !== null && link.isAuth) {
                                return (
                                    <LiStyled key={link.menuName}><NavLinkStyled to={link.path}>{link.menuName}</NavLinkStyled></LiStyled>
                                )
                            } else if (userEmail === null && !link.isAuth) {
                                return (
                                    <LiStyled key={link.menuName}><NavLinkStyled to={link.path}>{link.menuName}</NavLinkStyled></LiStyled>
                                )
                            }

                            return '';
                        })
                    }

                    {(userEmail !== null)
                        ? <LiStyled><NavLinkStyled onClick={logoutHandler} to="/">Logout</NavLinkStyled></LiStyled>
                        : ''
                    }

                </UlStyled>

                <DivHamburgerMenu onClick={togleMenuHandler}>
                    <SpanHamburgerMenu></SpanHamburgerMenu>
                    <SpanHamburgerMenu></SpanHamburgerMenu>
                    <SpanHamburgerMenu></SpanHamburgerMenu>
                </DivHamburgerMenu>

            </NavStyled >
        </HeaderStyled>
    )
}

export default Header;

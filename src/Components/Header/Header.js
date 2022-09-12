import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/authService';
import {
    HeaderStyled,
    NavStyled,
    UlStyled,
    LiStyled,
    NavLinkStyled,
    DivHamburgerMenu,
    SpanHamburgerMenu
} from './headerStyledComponents';

const Header = ({
    userEmail,
    setUserEmail
}) => {

    console.log(userEmail);

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

    const togleMenuHandler = (e) => {
        const menuStyle = document.getElementById('MenuUL').style;

        menuStyle.display === 'none'
            ? menuStyle.display = ''
            : menuStyle.display = 'none';
    }

    return (
        <HeaderStyled>
            <NavStyled >
                {/* <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/bolt.png" alt="" /> */}
                <UlStyled id='MenuUL'>
                    {(userEmail !== null)
                        ? <NavLinkStyled to='/'><LiStyled>Hello, {localStorage.getItem('email')}</LiStyled></NavLinkStyled>
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

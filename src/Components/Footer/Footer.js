// import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const onBackToTopClick = (e) => {
    window.scrollTo(0, 0);
}

const Footer = () => {

    return (
        <FooterStyled>
            <AStyled href="#" onClick={onBackToTopClick}> &uarr; Back to top &uarr;</AStyled>
            {/* <img src="https://cdn.dribbble.com/users/2007778/screenshots/15622394/media/4aa0c47e4f65f8709d8817e0a85554d1.jpg?compress=1&resize=400x300" alt="" /> */}
            <p>GVA RC Design 2022</p>
            <p>All Rights Reserved &copy;</p>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
background:black;
color:white;
position:absolute;
bottom:0;
width:98%;
height:7rem;

`;

const AStyled = styled.a`
vertical-align:middle;
color:white;
text-decoration:none;

`;

export default Footer;

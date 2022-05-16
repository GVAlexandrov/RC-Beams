// import { NavLink, useNavigate } from 'react-router-dom';

const onBackToTopClick = (e) => {
    window.scrollTo(0, 0);
}

const Footer = () => {

    return (
        <footer className="one">
            <a href="#" onClick={onBackToTopClick}> &uarr; Back to top &uarr;</a>
            {/* <img src="https://cdn.dribbble.com/users/2007778/screenshots/15622394/media/4aa0c47e4f65f8709d8817e0a85554d1.jpg?compress=1&resize=400x300" alt="" /> */}
            <p>GVA RC Design 2022</p>
            <p>@All Rights Reserved &copy;</p>
        </footer>
    )
}

export default Footer;

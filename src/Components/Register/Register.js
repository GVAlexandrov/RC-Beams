import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


import { register, activeUser } from '../../services/authService';
import validate from '../../validations/authValidations';


const Register = () => {
    const navigate = useNavigate();

    const [usernameError, setUsernameError] = useState("");
    const [passError, setPassError] = useState("");
    const [repassError, setRepassError] = useState("");

    const onRegister = (e) => {
        e.preventDefault();
        // const registerForm = document.getElementById('registerForm');
        // const formData = new FormData(registerForm);
        // console.log(formData.udername);
        const username = e.target.elements.username.value;
        const pass = e.target.elements.pass.value;
        const repass = e.target.elements.repass.value;

        // console.log(userName, pass, repass);

        const usernameTextError = validate.username(username);
        const passTextError = validate.password(pass);
        const repassTextError = validate.repassword(repass, pass);

        // console.log(usernameTextError, passTextError, repassTextError);

        if (usernameTextError) {
            setUsernameError(usernameTextError);
            console.log(usernameError);
            setTimeout(() => {
                setUsernameError('');
                console.log(usernameError);
            }, 3000);
        }

        if (passTextError) {
            setPassError(passTextError);
            console.log(passError);
            setTimeout(() => {
                setPassError('');
            }, 3000);
        }

        if (repassTextError) {
            setRepassError(repassTextError);
            console.log(repassError);
            setTimeout(() => {
                setRepassError('');
            }, 3000);
        }

        if (usernameTextError || passTextError || repassTextError) {
            console.log('INSIDE IF ERROR');
            return;
        };

        console.log('AFTER ERROR');

        register(username, pass)
            .then(response => {
                activeUser(response.user.uid, response.user.email);
                return;
            })
            .then(() => navigate('/beams'))
            .catch(error => console.log(error));
    }

    return (
        <MainStyled>
            <StyledForm id='registerForm' onSubmit={onRegister}>
                <h1>Register</h1>

                <p>Personal info</p>

                <div>
                    <label htmlFor="username">Username</label>
                    <input id="username" name="username" type="text" placeholder="JustMyself123..." />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="******" name="pass" />
                </div>

                <div>
                    <label htmlFor="repeat-password">Repeat Password</label>
                    <input id="repeat-password" type="password" placeholder="******" name="repass" />
                </div>

                <ButtonStyled type="submit">Register</ButtonStyled>
            </StyledForm>
        </MainStyled>
    );

}

const MainStyled = styled.main`
position:relative;
margin:auto;
padding-bottom:20px;
width:60%;
max-width:500px;
min-width:300px;
border: 2px solid black;
border-top-left-radius:30px;
border-bottom-right-radius:30px;
`;

const StyledForm = styled.form`
`;

const ButtonStyled = styled.button`
font-weight:bold;
color:white;
background:black;
padding: 10px 10px;
border-radius:5px;
border-color:red;
cursor: pointer;
`;

export default Register;
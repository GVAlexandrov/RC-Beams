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
                <H1Styled>Register</H1Styled>

                <DivStyled>
                    <LabelStyled htmlFor="username">Username</LabelStyled>
                    <input id="username" name="username" type="text" placeholder="JustMyself123..." />
                </DivStyled>

                <DivStyled>
                    <LabelStyled htmlFor="password">Password</LabelStyled>
                    <input id="password" type="password" placeholder="******" name="pass" />
                </DivStyled>

                <DivStyled>
                    <LabelStyled htmlFor="repeat-password">Repeat Password</LabelStyled>
                    <input id="repeat-password" type="password" placeholder="******" name="repass" />
                </DivStyled>

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
border: 1px solid black;
border-top-left-radius:30px;
border-bottom-right-radius:30px;
overflow: hidden;
&:hover{
    border-top-left-radius:0px;
    border-bottom-right-radius:0px;
    border-top-right-radius:30px;
    border-bottom-left-radius:30px;
}
`;

const ButtonStyled = styled.button`
width: 100px;
font-weight:bold;
font-size:16px;
color:white;
background:black;
padding: 10px 10px;
border-radius:5px;
border-color:red;
cursor: pointer;
`;

const DivStyled = styled.div`
margin:0px 0px;
padding:20px 0px;
font-size:19px;
/* text-transform: capitalize; */

&:hover{
    background:black;
    color:white;
}
`;

const H1Styled = styled.h1`
margin: 0px;
padding: 20px 0px;
width:100%;

&:hover{
    background:black;
    color:white;
}
`;

const LabelStyled = styled.label`
padding-right: 10px;
`;

const StyledForm = styled.form`
`;

export default Register;
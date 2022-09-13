import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login, activeUser } from '../../services/authService'
import validate from "../../validations/authValidations";
import styled from 'styled-components';


const Login = () => {
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');
    const [credentials, setCredentials] = useState({
        email: '',
        pass: ''
    });

    const navigate = useNavigate();



    const onLogin = (e) => {
        e.preventDefault();

        const emailTextError = validate.username(credentials.email);
        const passTextError = validate.password(credentials.pass);

        if (emailTextError) {
            setEmailError(emailTextError);
            setTimeout(() => {
                setEmailError('');
            }, 3000);
        }

        if (passTextError) {
            setPassError(passTextError);
            setTimeout(() => {
                setPassError('');
            }, 3000);
        }

        if (emailError || passError) return;

        login(credentials.email, credentials.pass)
            .then(res => {
                activeUser(res.user.uid, res.user.email);
                return;
            })
            .then(() => navigate('/beams'))
            .catch(error => console.log(error));
    }



    return (
        <MainStyled>
            <form onSubmit={onLogin}>
                <H1Styled>Login</H1Styled>

                <DivStyled>
                    <LabelStyled htmlFor="email">Email</LabelStyled>
                    <input id="email" name="email" type="text" placeholder="your-email@gmail.com" onInput={(e) => setCredentials(oldState => ({ ...oldState, email: e.target.value }))} />
                </DivStyled>

                <DivStyled>
                    <LabelStyled htmlFor="password">Password</LabelStyled>
                    <input id="password" name="password" type="password" placeholder="********" onInput={(e) => setCredentials(oldState => ({ ...oldState, pass: e.target.value }))} />
                </DivStyled>

                <ButtonStyled type="submit">Login</ButtonStyled>
            </form>
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

export default Login;
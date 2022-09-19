import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register, activeUser } from '../../services/authService';

import validate from '../../validations/authValidations';
import styled from 'styled-components';


const LoginRegister = () => {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        email: '',
        pass: ''
    });

    const navigate = useNavigate();

    let location = window.location.pathname.slice(1);

    const onRegister = (e) => {
        e.preventDefault();

        const email = e.target.elements.email.value;
        const pass = e.target.elements.pass.value;
        const repass = e.target.elements.repass.value;

        // console.log(userName, pass, repass);

        const emailTextError = validate.email(email);
        const passTextError = validate.password(pass);
        const repassTextError = validate.repassword(repass, pass);

        // console.log(usernameTextError, passTextError, repassTextError);

        if (emailTextError || passTextError || repassTextError) {
            setError(emailTextError || passTextError || repassTextError);
            setTimeout(() => {
                setError('');
            }, 3000);

            return;
        }

        register(email, pass)
            .then(response => {
                activeUser(response?.user.uid, response?.user.email)
                return;
            })
            .then(() => navigate('/'))
            .catch(error => console.log(error));
    }



    const onLogin = (e) => {
        e.preventDefault();

        const emailTextError = validate.email(credentials.email);
        const passTextError = validate.password(credentials.pass);

        if (emailTextError || passTextError) {
            setError(emailTextError || passTextError);
            setTimeout(() => {
                setError('');
            }, 3000);

            return;
        }


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
            <StyledForm
                id='registerForm'
                onSubmit={location === 'register' ? onRegister : onLogin}
            >
                <H1Styled>
                    {location === 'register' ? 'Register' : 'Login'}
                </H1Styled>

                <DivStyled>
                    <LabelStyled htmlFor="email">Email</LabelStyled>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="your-email@gmail.com"
                        onInput={(e) => setCredentials(oldState => ({ ...oldState, email: e.target.value }))}
                    />
                </DivStyled>

                <DivStyled>
                    <LabelStyled htmlFor="password">Password</LabelStyled>
                    <input
                        id="password"
                        type="password"
                        placeholder="******"
                        name="pass"
                        onInput={(e) => setCredentials(oldState => ({ ...oldState, pass: e.target.value }))}
                    />
                </DivStyled>

                {
                    location === 'register'
                        ? <DivStyled>
                            <LabelStyled htmlFor="repeat-password">Repeat Password</LabelStyled>
                            <input id="repeat-password" type="password" placeholder="******" name="repass" />
                        </DivStyled>
                        : ''
                }

                {error
                    ? (
                        <DivErrorStyled >
                            <PErrorStyled>{error}</PErrorStyled>
                        </DivErrorStyled>
                    )
                    : (<></>)
                }

                <ButtonStyled type="submit">
                    {location === 'register' ? 'Register' : 'Login'}
                </ButtonStyled>
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
    /* border-top-left-radius:0px;
    border-bottom-right-radius:0px;
    border-top-right-radius:30px;
    border-bottom-left-radius:30px; */
}
`;

const ButtonStyled = styled.button`
display: block;
margin:20px auto;
margin-bottom:20px;
font-size:16px;
background:#bdbbb7;
padding: 10px 50px;
border-radius:5px;
border-color:black;
cursor: pointer;
&:hover{
background-color:#969592;
}
&:active {
background-color:#bdbbb7;
/* background-color:black;
color:red;
border-color:red; */
}
`;

const DivStyled = styled.div`
margin:0px 0px;
padding:20px 0px;
font-size:19px;
/* text-transform: capitalize; */

&:hover{
    background:#969592;
    /* color:white; */
}
`;

const H1Styled = styled.h1`
margin: 0px;
padding: 20px 0px;
width:100%;

&:hover{
    background:#969592;
    /* color:white; */
}
`;

const LabelStyled = styled.label`
padding-right: 10px;
`;

const StyledForm = styled.form`
`;

const DivErrorStyled = styled.div`
color:red;
background-color:white;
font-size:20px;
/* font-weight: bold; */
border: 1.5px solid red;
border-top-right-radius:15px;
border-bottom-left-radius:15px;
display: inline-block;
`;

const PErrorStyled = styled.p`
margin:auto;
padding:10px;
`;

export default LoginRegister;
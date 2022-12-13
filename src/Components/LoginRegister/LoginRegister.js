import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register, activeUser } from '../../services/authService';

import validate from '../../validations/authValidations';
import {
    MainStyled,
    ButtonStyled,
    DivStyled,
    H1Styled,
    LabelStyled,
    StyledForm,
    DivErrorStyled,
    PErrorStyled,
} from './loginRegisterStyled';


const LoginRegister = () => {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        email: '',
        pass: ''
    });

    console.log(error);

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
                activeUser(response?.user.uid, response?.user.email);
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
            .then(() => navigate('/home'))
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


export default LoginRegister;
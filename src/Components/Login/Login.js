import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login, activeUser } from '../../services/authService'
import validate from "../../validations/authValidations";



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
            .then(res => activeUser(res.user.uid, res.user.email))
            .then(() => navigate('/beams'))
            .catch(error => console.log(error));
    }



    return (
        <main>
            <form onSubmit={onLogin}>
                <h1>Login</h1>

                <p>Personal info</p>

                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="text" placeholder="your-email@gmail.com" onInput={(e) => setCredentials(oldState => ({ ...oldState, email: e.target.value }))} />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" placeholder="********" onInput={(e) => setCredentials(oldState => ({ ...oldState, pass: e.target.value }))} />
                </div>

                <button type="submit">Login</button>
            </form>
        </main>
    );

}

export default Login;
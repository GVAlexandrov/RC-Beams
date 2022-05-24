
const Login = () => {

    return (
        <main>
            <form>
                <h1>Register</h1>

                <p>Personal info</p>

                <div>
                    <label htmlFor="usernmae">Username</label>
                    <input id="username" type="text" placeholder="JustMyself123..." />
                </div>

                <div>
                    <label htmlFor="usernmae">Password</label>
                    <input id="password" type="password" placeholder="******" />
                </div>

                <div>
                    <label htmlFor="repeat-password">Repeat Password</label>
                    <input id="repeat-password" type="password" placeholder="******" />
                </div>

                <button type="submit">Register</button>
            </form>
        </main>
    );

}

export default Login;
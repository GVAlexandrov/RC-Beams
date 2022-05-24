
const Login = () => {

    return (
        <main>
            <form>
                <h1>Login</h1>

                <p>Personal info</p>

                <div>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" placeholder="JustMyself123..." />
                </div>

                <div>
                    <label htmlFor="username">Password</label>
                    <input id="password" type="password" placeholder="********" />
                </div>

                <button type="submit">Login</button>
            </form>
        </main>
    );

}

export default Login;
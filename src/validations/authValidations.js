const validate = {
    username(username) {
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        if (username.length === 0) return 'Username is required';
        if (username.length < 5) return 'Username should be at least 5 symbols';
        if (!username.match(emailRegex)) return 'Please, provide a valid email!';

        return;
    },
    password(pass) {
        if (pass.length === 0) return 'Password is required';
        if (pass.length < 5) return 'Password should be at least 5 symbols';

        return;
    },
    repassword(repass, pass) {
        if (repass !== pass) return 'Passwords should match';

        return;
    },
}

export default validate;
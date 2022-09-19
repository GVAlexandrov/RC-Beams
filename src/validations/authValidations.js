const validate = {
    email(email) {
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        if (email.length === 0) return 'Email is required.';
        if (email.length < 5) return 'Email should be at least 5 symbols.';
        if (!email.match(emailRegex)) return 'Please, provide a valid email.';

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
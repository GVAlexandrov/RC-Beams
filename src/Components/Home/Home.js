import { useEffect, useState } from 'react';

const Home = () => {
    const [isLogged, setIsLogged] = useState(false);
    const email = localStorage.email;

    useEffect(() => {
        if (email) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    }, [email])

    return (
        <h1>
            Hello, {
                isLogged
                    ? email
                    : 'Guest.'}
        </h1>
    );

}

export default Home;
import { useEffect, useState } from 'react';

const Home = () => {
    const [isLogged, setIsLogged] = useState(false);
    const email = localStorage.email;

    useEffect(() => {
        email
            ? setIsLogged(true)
            : setIsLogged(false)
    }, [email])

    return (
        <>
            <h1>
                Hello, {email || 'Guest.'}
            </h1>

            {isLogged
                ? (<>
                    <p>If you want to design new reinforced concrete (RC) beam, please, visit the New Beam menu from the navigation bar above.</p>
                    <p>If you want to check or edit your saved designs, please, visit the RC Beams menu</p>
                </>)
                : (<>
                    <p>This application allows you to design reinforced concrete (RC) beams, subjected to bending moment. If you want to use it, please, Login. If you don't have an account, you should use the Register menu.</p>
                </>)
            }
        </>
    );

}

export default Home;
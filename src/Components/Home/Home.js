const Home = () => {
    return (
        <h1>
            Hello, {
                localStorage.getItem('email')
                    ? localStorage.getItem('email')
                    : 'Guest.'}
        </h1>
    );

}

export default Home;
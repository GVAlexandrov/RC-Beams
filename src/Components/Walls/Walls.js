import * as services from '../../services/services';

const Walls = () => {
    services.getAllBeams()
        .then(res => {
            console.log(res);
        })

    return (
        <h1>WALLS</h1>
    )
}

export default Walls
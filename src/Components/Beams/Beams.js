import ExistingBeam from '../ExistingBeam/ExistingBeam';
import * as services from '../../services/services';
// import { URL } from '../../config/config';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Beams = () => {

    let [beams, setBeams] = useState({});

    useEffect(() => {
        services.getAllBeams()
            .then(res => {
                setBeams(res);
            })
    }, []);

    let beamsArr = Object.entries(beams);

    console.log(beams);
    console.log(beamsArr);

    return (
        <main >

            <TableStyled >
                <THeadStyled>
                    <TrStyled>
                        <th>Height</th>
                        <th>Width</th>
                        <th>Concrete</th>
                        <th>Steel</th>
                        <th>Rebars</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </TrStyled>
                </THeadStyled>
                {beamsArr.length
                    ? (
                        <tbody>
                            {beamsArr.map(beam => <ExistingBeam beam={beam} />)}
                        </tbody>
                    )
                    : ''
                }
            </TableStyled>

            {!beamsArr.length
                ? (
                    <h1 >No RC Beams designed so far...</h1>
                )
                : ''
            }

        </main>
    );
};

const TableStyled = styled.table`
width:600px;
margin:auto;
margin-top:25px;
/* border: 2px solid black; */
`

const THeadStyled = styled.thead`
text-transform:capitalize;
font-size:20px;
`

const TrStyled = styled.tr`
&:hover{
    background:black;
    color:white;
}
`

export default Beams;
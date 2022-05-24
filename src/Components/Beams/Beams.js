import styled from 'styled-components';

const Beams = () => {

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
                    </TrStyled>
                </THeadStyled>

                <tbody>
                    <TrStyled>
                        <td>
                            <p>600</p>
                        </td>
                        <td>
                            <p>300</p>
                        </td>
                        <td>
                            <p>C25/30</p>
                        </td>
                        <td>
                            <p>B500B</p>
                        </td>
                        <td>
                            <p>12</p>
                        </td>
                    </TrStyled>

                    <TrStyled>
                        <td>
                            <p>400</p>
                        </td>
                        <td>
                            <p>250</p>
                        </td>
                        <td>
                            <p>C20/25</p>
                        </td>
                        <td>
                            <p>B500B</p>
                        </td>
                        <td>
                            <p>4</p>
                        </td>
                    </TrStyled>
                </tbody>
            </TableStyled>

            <h1 >No RC Beams designed so far...</h1>

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
import { Link } from 'react-router-dom';
import * as beamServices from '../../services/services';
import styled from 'styled-components';


const ExistingBeam = () => {
    return (
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
            <td>
                <p>Details</p>
            </td>
            <td>
                <p>X</p>
            </td>
        </TrStyled>
    )

}

const TrStyled = styled.tr`
&:hover{
    background:black;
    color:white;
}
`

export default ExistingBeam;
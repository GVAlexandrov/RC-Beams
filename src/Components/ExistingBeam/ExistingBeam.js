import styled from 'styled-components';


const ExistingBeam = (beamObj) => {
    return (
        <TrStyled key={beamObj.beam[0]} id={beamObj.beam[0]}>
            <td>
                <p>{beamObj.beam[1].height}</p>
            </td>
            <td>
                <p>{beamObj.beam[1].width}</p>
            </td>
            <td>
                <p>{beamObj.beam[1].concrete}</p>
            </td>
            <td>
                <p>{beamObj.beam[1].steel}</p>
            </td>
            <td>
                <p>{beamObj.beam[1].rebar}</p>
            </td>
            <td>
                <p>Edit</p>
            </td>
            <td >
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
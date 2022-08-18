import styled from 'styled-components';


const ExistingBeam = (beamObj) => {
    const { height, width, concrete, steel, rebar } = beamObj.beam[1];
    const beamArr = [height, width, concrete, steel, rebar];

    return (
        <TrStyled key={beamObj.beam[0]} id={beamObj.beam[0]}>
            {
                beamArr.map((x) => {
                    return (
                        <td>
                            <p>{x}</p>
                        </td>
                    )
                })
            }

            <td>
                <button>Edit</button>
            </td>
            <td >
                <button>X</button>
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
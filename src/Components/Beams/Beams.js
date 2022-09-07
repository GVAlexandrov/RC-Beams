import ExistingBeam from '../ExistingBeam/ExistingBeam';
import * as services from '../../services/services';
import * as structuralData from '../../services/structuralData';
// import { URL } from '../../config/config';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Beams = () => {

    let [beams, setBeams] = useState({});

    useEffect(() => {
        services.getAllBeams()
            .then(res => {
                setBeams(res);
            })
    }, []);

    function refresh() {
        services.getAllBeams()
            .then(res => {
                setBeams(res);
            })
    }

    const navigate = useNavigate();

    let beamsArr = [];
    if (beams !== null) {
        beamsArr = Object.entries(beams);
    }

    function deleteOrEditBeam(event) {
        let elementId = event.target.id;

        if (event.target.textContent === 'X') {
            services.deleteOneBeam(event, elementId, refresh);
        } else if (event.target.textContent === 'Edit') {
            navigate(`/beams/edit-beam/${elementId}`);
        } else if (event.target.textContent === 'Info') {
            navigate(`/beams/info-beam/${elementId}`);
        }
    }

    return (
        <>
            {beamsArr.length
                ? (<TableStyled >
                    <THeadStyledMain>
                        <TrStyled>
                            {
                                structuralData.tableHeadingsArr.map((heading) => {
                                    return <th>{heading}</th>;
                                })
                            }
                        </TrStyled>

                        <TrStyled>
                            {
                                structuralData.tableHeadingsDimensionsArr.map((heading) => {
                                    return <th>{heading}</th>;
                                })
                            }
                        </TrStyled>
                    </THeadStyledMain>


                    <tbody onClick={deleteOrEditBeam} setBeams={setBeams}>
                        {beamsArr.map(beam => <ExistingBeam key={beamsArr.id} beam={beam} />)}
                    </tbody>

                </TableStyled>)
                : ''
            }

            {!beamsArr.length
                ? (
                    <h1 >No RC Beams designed so far...</h1>
                )
                : ''
            }

        </>
    );
};

const TableStyled = styled.table`
/* display: flex;
  flex-direction: column; */
position:relative;
min-width:600px;
width:60%;
padding:20px;
margin:auto;
margin-bottom:20px;
/* margin-top:35px; */
border: 2px solid black;
border-top-right-radius:30px;
border-bottom-left-radius:30px;
z-index:0;
`

const THeadStyledMain = styled.thead`
position:sticky;
top:70px;
text-transform:capitalize;
font-size:18px;
z-index:100;
background:gray;
`

const TrStyled = styled.tr`
padding:0px;
margin:0px;
`


export default Beams;
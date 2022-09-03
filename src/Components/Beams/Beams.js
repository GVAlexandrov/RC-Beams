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
        let elementId = event.target.nodeName === 'TD' ? event.target.parentNode.id : event.target.parentNode.parentNode.id;

        if (event.target.textContent === 'X') {
            services.deleteOneBeam(event, elementId, refresh);
        } else {
            navigate(`/beams/edit-beam/${elementId}`);
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
                    {/* <THeadStyledSecond>
                        <TrStyled>
                            {
                                structuralData.tableHeadingsDimensionsArr.map((heading) => {
                                    return <th>{heading}</th>;
                                })
                            }
                        </TrStyled>
                    </THeadStyledSecond> */}

                    <tbody onClick={deleteOrEditBeam} setBeams={setBeams}>
                        {beamsArr.map(beam => <ExistingBeam beam={beam} />)}
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
border-top-left-radius:30px;
border-bottom-right-radius:30px;
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
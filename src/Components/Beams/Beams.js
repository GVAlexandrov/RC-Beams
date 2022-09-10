import ExistingBeam from '../ExistingBeam/ExistingBeam';
import * as services from '../../services/services';
import * as structuralData from '../../services/structuralData';
import {
    TableStyled,
    THeadStyledMain,
    TrStyled,
    TrStyled2
} from './beamsStyledComponents.js';
// import { URL } from '../../config/config';
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
        beamsArr = Object
            .entries(beams)
            .sort((a, b) => Number(a[1].level.slice(1)) - Number(b[1].level.slice(1)));
    }

    function deleteOrEditBeam(event) {
        let elementId = event.target.id;

        if (event.target.textContent === 'X') {
            window.confirm('Are you sure you want to delete this item?');
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

                        <TrStyled2>
                            {
                                structuralData.tableHeadingsDimensionsArr.map((heading) => {
                                    return <th>{heading}</th>;
                                })
                            }
                        </TrStyled2>
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

export default Beams;
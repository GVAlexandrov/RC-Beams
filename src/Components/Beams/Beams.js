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
    let [level, setLevel] = useState('');

    let beamsArr = [];
    let beamsArrCopy = [];
    let levelsArr = new Set([]);

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

    if (beams !== null) {
        beamsArr = Object
            .entries(beams)
            .sort((a, b) => Number(a[1].beamLevel) - Number(b[1].beamLevel));

        beamsArrCopy = [...beamsArr];

        levelsArr = new Set([...beamsArr.map(a => a[1].beamLevel)]);
    }

    function deleteOrEditBeam(event) {
        let elementId = event.target.id;

        if (event.target.textContent === 'X') {
            if (window.confirm('Are you sure you want to DELETE this item?')) {
                services.deleteOneBeam(event, elementId, refresh);
            };
        } else if (event.target.textContent === 'Edit') {
            navigate(`/beams/edit-beam/${elementId}`);
        } else if (event.target.textContent === 'Info') {
            navigate(`/beams/info-beam/${elementId}`);
        }
    }

    return (
        <>
            {beamsArrCopy.length
                ? (
                    <>
                        <label htmlFor="level">Level</label>
                        <select
                            name="level"
                            id="level"
                            onChange={e => setLevel(e.target.value)}>
                            <option selected value="all" >
                                All
                            </option>

                            {(Array
                                .from(levelsArr)
                                .map((level) => {
                                    return <option value={level}>{Number(level).toFixed(2)}</option>
                                }))}

                        </select>



                        <TableStyled >
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
                                {beamsArrCopy
                                    .filter(a => {
                                        return level === 'all' || !level
                                            ? a
                                            : Number(a[1].beamLevel) === Number(level);
                                    })
                                    .map(beam => <ExistingBeam key={beamsArrCopy.id} beam={beam} />)}
                            </tbody>

                        </TableStyled>
                    </>)
                : ''
            }

            {!beamsArrCopy.length
                ? (
                    <h1 >No RC Beams designed so far...</h1>
                )
                : ''
            }

        </>
    );
};

export default Beams;
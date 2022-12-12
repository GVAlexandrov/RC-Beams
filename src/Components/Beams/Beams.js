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
    let [project, setProject] = useState('');
    let [level, setLevel] = useState('');

    let beamsArr = [];
    let beamsArrCopy = [];
    let projectsSet = new Set([]);
    let levelsSet = new Set([]);

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

    if (beams) {
        beamsArr = Object
            .entries(beams)
            .sort((a, b) => {
                if (a[1].projectName !== b[1].projectName) {
                    return (a[1].projectName).localeCompare(b[1].projectName);
                } else {
                    return Number(b[1].beamLevel) - Number(a[1].beamLevel);
                }
            });

        beamsArrCopy = [...beamsArr];

        projectsSet = new Set([...beamsArr.map(a => a[1].projectName)]);

        levelsSet = project && project !== 'all'
            ? new Set([...beamsArr
                .filter(a => a[1].projectName === project)
                .map(a => Number(a[1].beamLevel))
                .sort((a, b) => b - a)])
            : new Set([...beamsArr
                .map(a => Number(a[1].beamLevel))
                .sort((a, b) => b - a)]);
    }

    function deleteOrEditBeam(event) {
        let elementId = event.target.id;

        if (event.target.textContent === 'X') {
            if (window.confirm('Are you sure you want to DELETE this item?')) {
                services.deleteOneBeam(event, elementId, refresh);
            };
        } else if (event.target.textContent === 'Edit') {
            navigate(`/beams/edit-beam/${elementId}`);
        }
    }

    return (
        <>
            {beamsArrCopy.length
                ? (
                    <>
                        <label htmlFor="project">Project</label>
                        <select
                            name="project"
                            id="project"
                            onChange={e => setProject(e.target.value)}>
                            <option selected value="all" >
                                All
                            </option>

                            {(Array
                                .from(projectsSet)
                                .map((project, i) => {
                                    return <option key={project + i} value={project}>{project}</option>
                                }))}
                        </select>


                        <label htmlFor="level">Level</label>
                        <select
                            name="level"
                            id="level"
                            onChange={e => setLevel(e.target.value)}>
                            <option selected value="all" >
                                All
                            </option>

                            {(Array
                                .from(levelsSet)
                                .map((level, i) => {
                                    return <option key={level + i} value={level}>{Number(level).toFixed(2)}</option>
                                }))}
                        </select>



                        <TableStyled >
                            <THeadStyledMain>
                                <TrStyled>
                                    {
                                        structuralData.tableHeadingsArr.map((heading, i) => {
                                            return <th key={heading + i}>{heading}</th>;
                                        })
                                    }
                                </TrStyled>

                                <TrStyled2>
                                    {
                                        structuralData.tableHeadingsDimensionsArr.map((dimension, i) => {
                                            return <th key={dimension + i}>{dimension}</th>;
                                        })
                                    }
                                </TrStyled2>
                            </THeadStyledMain>


                            <tbody onClick={deleteOrEditBeam} >
                                {beamsArrCopy
                                    .filter(a => {
                                        return project === 'all' || !project
                                            ? a
                                            : (a[1].projectName) === (project);
                                    })
                                    .filter(a => {
                                        return level === 'all' || !level
                                            ? a
                                            : Number(a[1].beamLevel) === Number(level);
                                    })
                                    .map((beam, i) => <ExistingBeam key={beam[0] + i} beam={beam} />)}
                            </tbody>

                        </TableStyled>
                    </>)
                : <h1 >No RC Beams designed so far...</h1>
            }

            {/* {!beamsArrCopy.length
                ? (
                    <h1 >No RC Beams designed so far...</h1>
                )
                : ''
            } */}

        </>
    );
};

export default Beams;
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


import * as services from '../../services/services';

const Walls = () => {
    let [walls, setWalls] = useState({});
    let [project, setProject] = useState('');
    let [level, setLevel] = useState('');

    let wallsArr = [];
    let wallsArrCopy = [];
    let projectsSet = new Set([]);
    let levelsSet = new Set([]);

    useEffect(() => {
        services.getAllWalls()
            .then(res => {
                setWalls(res);
            })
    }, []);

    console.log(walls);

    function refresh() {
        services.getAllWalls()
            .then(res => {
                setWalls(res);
            })
    }

    const navigate = useNavigate();

    if (walls) {
        wallsArr = Object
            .entries(walls)
            .sort((a, b) => {
                if (a[1].projectName !== b[1].projectName) {
                    return (a[1].projectName).localeCompare(b[1].projectName);
                } else {
                    return Number(b[1].wallLevel) - Number(a[1].wallLevel);
                }
            });

        wallsArrCopy = [...wallsArr];

        projectsSet = new Set([...wallsArr.map(a => a[1].projectName)]);

        levelsSet = project && project !== 'all'
            ? new Set([...wallsArr
                .filter(a => a[1].projectName === project)
                .map(a => Number(a[1].wallLevel))
                .sort((a, b) => b - a)])
            : new Set([...wallsArr
                .map(a => Number(a[1].wallLevel))
                .sort((a, b) => b - a)]);
    }


    return (
        <>

            <label htmlFor="project">Project</label>
            <select
                name="project"
                id="project"
                onChange={e => setProject(e.target.value)}
            >
                <option selected value="all" >
                    All
                </option>

                {(Array
                    .from(projectsSet)
                    .map((project) => {
                        return <option key={project} value={project}>{project}</option>
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
                    .map((level) => {
                        return (
                            <option
                                key={level}
                                value={level}
                            >
                                {Number(level).toFixed(2)}
                            </option>
                        )
                    }))}
            </select>


            {!wallsArrCopy.length
                ? (
                    <h1 >No Walls designed so far...</h1>
                )
                : ''
            }
        </>
    )
}

export default Walls
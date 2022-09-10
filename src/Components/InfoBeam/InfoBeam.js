import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import * as beamService from '../../services/services';
import * as structuralData from '../../services/structuralData';
import { SectionDivStyledBottom, ButtonStyled } from '../NewBeam/newBeamStyled';


import styled from 'styled-components';

const InfoBeam = () => {
    let [beam, setBeam] = useState({});

    let { beamId } = useParams();

    useEffect(() => {
        beamService.getOneBeam(beamId)
            .then(beamObj => setBeam(beamObj))
    }, [beamId]);

    console.log(beam);

    const navigate = useNavigate();

    function editBeam(event) {
        if (event.target.textContent === 'Edit') {
            navigate(`/beams/edit-beam/${beamId}`);
        }
    }

    return (
        <DivStyled>
            {/* <h2>UNDER CONSTRUCTION...</h2> */}

            <TableStyled>
                <thead>
                    <tr>
                        {
                            structuralData.tableHeadingsArr.map((heading) => {
                                return <th>{heading}</th>;
                            })
                        }
                    </tr>

                    <tr>
                        {
                            structuralData.tableHeadingsDimensionsArr.map((heading) => {
                                return <th>{heading}</th>;
                            })
                        }
                    </tr>
                </thead>


                <tbody>
                    <tr>
                        <td>{beam.level ? beam.level : ''}</td>
                        <td>{beam.beamsNumber ? beam.beamsNumber : ''}</td>
                        <td>{beam.height ? beam.height : ''}</td>
                        <td>{beam.width ? beam.width : ''}</td>
                        <td>{beam.bendingMoment ? beam.bendingMoment : ''}</td>
                        <td>{beam.shearForce ? beam.shearForce : ''}</td>
                        <td>{beam.torsion ? beam.torsion : ''}</td>
                        <td>{beam.concrete ? beam.concrete : ''}</td>
                        <td>{beam.concrete ? Number(beam.concrete.slice(1, 3)) : ''}</td>
                        <td>{beam.rebar ? beam.rebar : ''}</td>
                    </tr>
                </tbody>

            </TableStyled>

            <SectionDivStyledBottom>
                <ButtonStyled onClick={editBeam} type="Submit">Edit</ButtonStyled>
            </SectionDivStyledBottom >
        </DivStyled>
    )
}


const DivStyled = styled.div`
position:relative;
margin:auto;
padding:5px 0px;
font-size: 20px;
height:40px;
vertical-align:bottom;
min-width:600px;
width:60%;
/* text-align:left; */

&:hover{
    /* background:black;
    color:white; */
}
`;

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
border: 1px solid black;
border-top-left-radius:30px;
border-bottom-right-radius:30px;
z-index:0;
`

export default InfoBeam;
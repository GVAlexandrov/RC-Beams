import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import * as beamService from '../../services/services';
import * as structuralData from '../../services/structuralData';
import { SectionDivStyledBottom, ButtonStyled } from '../NewBeam/newBeamStyled';
import {
    THeadStyledMain,
    TrStyled,
    TrStyled2
} from '../Beams/beamsStyledComponents';


import styled from 'styled-components';

const InfoBeam = () => {
    let [beam, setBeam] = useState({});

    let { beamId } = useParams();

    useEffect(() => {
        beamService.getOneBeam(beamId)
            .then(beamObj => setBeam(beamObj))
    }, [beamId]);

    const navigate = useNavigate();

    function editBeam(event) {
        navigate(`/beams/edit-beam/${beamId}`);
    }

    function backToBeams(event) {
        navigate(`/beams`);
    }

    return (
        <DivStyled>
            {/* <h2>UNDER CONSTRUCTION...</h2> */}

            <TableStyled>
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


                <tbody>
                    <TrStyledData>
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
                    </TrStyledData>
                </tbody>

            </TableStyled>

            <SectionDivStyledBottom>
                <ButtonStyled onClick={backToBeams} type="Submit">Back</ButtonStyled>
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
width:100%;
padding:20px;
margin:auto;
margin-bottom:20px;
/* margin-top:35px; */
border: 1px solid black;
border-top-right-radius:30px;
z-index:0;
`

const TrStyledData = styled.tr`
position:relative;
margin:0;
background:gray;
font-size:17px;
/* transition: all 500ms ease-out ; */
/* outline: thin solid #585858; */
/* transition: color 500ms ease-out step-end; */
&:hover{
    background:black;
    color:white;
    font-weight:bold;
}
`

export default InfoBeam;
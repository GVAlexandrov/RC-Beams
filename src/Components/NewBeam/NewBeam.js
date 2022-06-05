import * as beamService from '../../services/services';

import styled from 'styled-components';
// import Beams from '../Beams/Beams';

const NewBeam = () => {

    const onNewBeamSubmitHandler = (e) => {
        e.preventDefault();

        const { height, width, concrete, steel, rebar } = e.target;

        beamService
            .addNewBeam(
                height.value,
                width.value,
                concrete.value,
                steel.value,
                rebar.value,
            )
            .then(responce => {
                if (responce.statusText === 'OK') {
                    console.log('BEAM SAVED');
                }
            })
            .catch(console.log);
    }

    return (
        <main>
            <FormStyled onSubmit={onNewBeamSubmitHandler}>
                <h1>New Beam</h1>

                <DivStyled >
                    <label htmlFor="height">Height</label>
                    <input id="height" name='height' type="text" placeholder="500" />
                    <label htmlFor="height">[mm]</label>
                </DivStyled>

                <DivStyled>
                    <label htmlFor="width">Width</label>
                    <input id="width" name='width' type="text" placeholder="250" />
                    <label htmlFor="width">[mm]</label>
                </DivStyled>

                <DivStyled>
                    <label htmlFor="concrete">Concrete</label>
                    <select name="concrete" id="concrete">
                        <option disabled selected value="default">Select concrete...</option>

                        <option value="C20/25">C20/25</option>
                        <option value="C25/30">C25/30</option>
                        <option value="C30/37">C30/37</option>
                        <option value="C35/45">C35/45</option>
                    </select>
                </DivStyled>

                <DivStyled>
                    <label htmlFor="steel">Steel</label>
                    <select name="steel" id="steel">
                        <option disabled selected value="default">Select steel...</option>

                        <option value="B420">B420</option>
                        <option value="B500">B500</option>
                    </select>
                </DivStyled>

                <DivStyled>
                    <label htmlFor="rebar">Rebar</label>
                    <select name="rebar" id="rebar">
                        <option disabled selected value="default">Select rebar...</option>

                        <option value="6.5">6.5</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="10">12</option>
                        <option value="10">14</option>
                    </select>
                    <label htmlFor="rebar">[mm]</label>
                </DivStyled>

                <button type="Submit">Save</button>

            </FormStyled>
        </main>
    );

}

const DivStyled = styled.div`
font-size: 20px;
height:40px;
vertical-align:bottom;

&:hover{
    background:black;
    color:white;
}
`;

const FormStyled = styled.form`
margin:auto;
max-width:400px;
`;

export default NewBeam;
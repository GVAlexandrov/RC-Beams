import styled from 'styled-components';

const NewBeam = () => {

    return (
        <main>
            <form>
                <h1>New Beam</h1>

                <DivStyled >
                    <label htmlFor="height">Height</label>
                    <input id="height" type="text" placeholder="500" />
                    <label htmlFor="height">[mm]</label>
                </DivStyled>

                <DivStyled>
                    <label htmlFor="width">Width</label>
                    <input id="width" type="text" placeholder="250" />
                    <label htmlFor="width">[mm]</label>
                </DivStyled>

                <DivStyled>
                    <label htmlFor="rebar">Concrete</label>
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
                    <select name="concrete" id="concrete">
                        <option disabled selected value="default">Select steel...</option>

                        <option value="B420">B420</option>
                        <option value="B500">B500</option>
                    </select>
                </DivStyled>

                <DivStyled>
                    <label htmlFor="rebar">Rebar</label>
                    <select name="rebar" id="rebar">
                        <option disabled selected value="default">Select rebar...</option>

                        <option value="8">8</option>
                        <option value="10">10</option>
                    </select>
                </DivStyled>

                <button type="Submit">Save</button>

            </form>
        </main>
    );

}

const DivStyled = styled.div`
margin: 1rem;
font-size: 20px;

`

export default NewBeam;
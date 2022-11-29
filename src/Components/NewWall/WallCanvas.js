import { useEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';


const WallCanvas = (props) => {
    const canvasRef = useRef(null);

    let width = props.width;
    let length = props.length;
    let d1 = props.d1;
    let d2 = props.d2;
    let d3 = props.d3;
    let d4 = props.d4;
    let d5 = props.d5;
    let fyd = props.fyd;
    let steelModulus = props.steelModulus;
    // console.log(d1, d2, d3, d4, d5);


    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        let canvasWidth = canvas.width = 500;
        let canvasHeight = canvas.height = 500;
        let centerHorizontal = canvasWidth / 2;
        let centerVertical = canvasHeight / 2;
        // console.log(canvas);
        let epsilonUD = 67.5 / 1000;
        let epsilonC3 = 1.75 / 1000;
        let epsilonCU3 = 3.5 / 1000;
        let epsilonSYD = 2.17 / 1000;
        let epsilonS1Arr = [];
        let epsilonS2Arr = [];
        let epsilonS3Arr = [];
        let epsilonS4Arr = [];
        let epsilonS5Arr = [];
        let sigmaS1 = [];
        let sigmaS2 = [];
        let sigmaS3 = [];
        let sigmaS4 = [];
        let sigmaS5 = [];


        const context = canvas.getContext('2d');
        if (!context) return;

        for (let i = 0; i <= 125; i += 1) {
            if (length === 0 || width === 0) {
                return;
            }

            let xJ = (i / 100) * length;

            if (xJ === 0) {
                epsilonS1Arr.push(-epsilonSYD);
                epsilonS2Arr.push(-epsilonSYD);
                epsilonS3Arr.push(-epsilonSYD);
                epsilonS4Arr.push(-epsilonSYD);
                epsilonS5Arr.push(-epsilonSYD);
            }

            if (xJ > 0 && xJ < 1.25 * length) {
                if ((-epsilonCU3 * (d1 - xJ) / xJ) < -epsilonUD) {
                    epsilonS1Arr.push(-epsilonUD);
                    epsilonS2Arr.push(-(xJ / (d1 - xJ)) * epsilonUD * ((d2 - xJ) / xJ));
                    epsilonS3Arr.push(-(xJ / (d1 - xJ)) * epsilonUD * ((d3 - xJ) / xJ));
                    epsilonS4Arr.push(-(xJ / (d1 - xJ)) * epsilonUD * ((d4 - xJ) / xJ));
                    epsilonS5Arr.push(-(xJ / (d1 - xJ)) * epsilonUD * ((d5 - xJ) / xJ));
                } else if ((-epsilonCU3 * (d1 - xJ) / xJ) > -epsilonUD) {
                    epsilonS1Arr.push(-epsilonCU3 * (d1 - xJ) / xJ);
                    epsilonS2Arr.push(- epsilonCU3 * ((d2 - xJ) / xJ));
                    epsilonS3Arr.push(- epsilonCU3 * ((d3 - xJ) / xJ));
                    epsilonS4Arr.push(- epsilonCU3 * ((d4 - xJ) / xJ));
                    epsilonS5Arr.push(- epsilonCU3 * ((d5 - xJ) / xJ));
                }
            }

            if (xJ === (125 / 100) * length) {
                epsilonS1Arr.push(epsilonC3);
                epsilonS2Arr.push(epsilonC3);
                epsilonS3Arr.push(epsilonC3);
                epsilonS4Arr.push(epsilonC3);
                epsilonS5Arr.push(epsilonC3);
            }
        }


        epsilonS1Arr.forEach(epsilonI => {
            if (fyd === 0 || steelModulus === 0) {
                return
            }

            if (epsilonI <= -epsilonSYD) {
                let sigma = -fyd;
                sigmaS1.push(sigma);
                console.log((epsilonI * 1000).toFixed(5), sigma.toFixed(0));
            } else if (epsilonI > -epsilonSYD && epsilonI < epsilonSYD) {
                let sigma = epsilonI * steelModulus * 1000;
                sigmaS1.push(sigma);
                console.log((epsilonI * 1000).toFixed(5), sigma.toFixed(0));
            } else if (epsilonI >= epsilonSYD) {
                let sigma = fyd;
                sigmaS1.push(sigma);
                console.log((epsilonI * 1000).toFixed(5), sigma.toFixed(0));
            }
        })

        // sigmaS1.forEach(stress => console.log(stress.toFixed(0)));

        context.beginPath();
        context.moveTo(0, canvas.height / 2);
        context.lineTo(canvasWidth, canvasHeight / 2);

        context.moveTo(canvasWidth / 2, 0);
        context.lineTo(canvasWidth / 2, canvasHeight);

        context.moveTo(centerHorizontal, centerVertical);
        context.lineTo(width, width);
        context.lineTo(-width, 8);
        context.stroke();

    }, [width, length, d1])


    return (
        <DivCanvasWrapperStyled>
            <h1>Graph</h1>

            <CanvasStyled ref={canvasRef} />
        </DivCanvasWrapperStyled>
    )
}

const CanvasStyled = styled.canvas`
display: block;
border:1px solid;
width:500px;
height:500px;
margin: 50px 0px;
`;

const DivCanvasWrapperStyled = styled.div`
margin: 20px;
`;


export default WallCanvas;
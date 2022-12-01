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
    let fcd = props.fcd;
    let steelModulus = props.steelModulus;
    let rebarAreaEndZone = props.rebarAreaEndZone;
    let rebarAreaMiddleZone = props.rebarAreaMiddleZone;
    // console.log(d1, d2, d3, d4, d5);


    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        let canvasWidth = 0;
        let canvasHeight = 0;

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
        let momentJArr = [];
        let axialForceJArr = [];
        let lambda = 0.8;


        const context = canvas.getContext('2d');
        if (!context) return;

        for (let i = 0; i <= 125; i += 1) {
            if (length === 0 || width === 0) {
                console.log('Lenght and width are needed');
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


            if (xJ > 0 && xJ < (125 / 100) * length) {
                if ((-epsilonCU3 * (d1 - xJ) / xJ) <= -epsilonUD) {
                    epsilonS1Arr.push(-epsilonUD);
                } else {
                    epsilonS1Arr.push(-epsilonCU3 * (d1 - xJ) / xJ);
                }

                if (epsilonS1Arr[i] === -epsilonUD) {
                    epsilonS2Arr.push(-(xJ / (d1 - xJ)) * epsilonUD * ((d2 - xJ) / xJ));
                    epsilonS3Arr.push(-(xJ / (d1 - xJ)) * epsilonUD * ((d3 - xJ) / xJ));
                    epsilonS4Arr.push(-(xJ / (d1 - xJ)) * epsilonUD * ((d4 - xJ) / xJ));
                    epsilonS5Arr.push(-(xJ / (d1 - xJ)) * epsilonUD * ((d5 - xJ) / xJ));
                } else {
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
                console.log('Fyd or Steel modulus needed');
                return
            }

            if (epsilonI <= -epsilonSYD) {
                let sigma = -fyd;
                sigmaS1.push(sigma);
            } else if (epsilonI > -epsilonSYD && epsilonI < epsilonSYD) {
                let sigma = epsilonI * steelModulus * 1000;
                sigmaS1.push(sigma);
            } else if (epsilonI >= epsilonSYD) {
                let sigma = fyd;
                sigmaS1.push(sigma);
            }
        })

        epsilonS2Arr.forEach(epsilonI => {
            if (fyd === 0 || steelModulus === 0) {
                return
            }

            if (epsilonI <= -epsilonSYD) {
                let sigma = -fyd;
                sigmaS2.push(sigma);
            } else if (epsilonI > -epsilonSYD && epsilonI < epsilonSYD) {
                let sigma = epsilonI * steelModulus * 1000;
                sigmaS2.push(sigma);
            } else if (epsilonI >= epsilonSYD) {
                let sigma = fyd;
                sigmaS2.push(sigma);
            }
        })

        epsilonS3Arr.forEach(epsilonI => {
            if (fyd === 0 || steelModulus === 0) {
                return
            }

            if (epsilonI <= -epsilonSYD) {
                let sigma = -fyd;
                sigmaS3.push(sigma);
            } else if (epsilonI > -epsilonSYD && epsilonI < epsilonSYD) {
                let sigma = epsilonI * steelModulus * 1000;
                sigmaS3.push(sigma);
            } else if (epsilonI >= epsilonSYD) {
                let sigma = fyd;
                sigmaS3.push(sigma);
            }
        })

        epsilonS4Arr.forEach(epsilonI => {
            if (fyd === 0 || steelModulus === 0) {
                return
            }

            if (epsilonI <= -epsilonSYD) {
                let sigma = -fyd;
                sigmaS4.push(sigma);
            } else if (epsilonI > -epsilonSYD && epsilonI < epsilonSYD) {
                let sigma = epsilonI * steelModulus * 1000;
                sigmaS4.push(sigma);
            } else if (epsilonI >= epsilonSYD) {
                let sigma = fyd;
                sigmaS4.push(sigma);
            }
        })

        epsilonS5Arr.forEach(epsilonI => {
            if (fyd === 0 || steelModulus === 0) {
                return
            }

            if (epsilonI <= -epsilonSYD) {
                let sigma = -fyd;
                sigmaS5.push(sigma);
            } else if (epsilonI > -epsilonSYD && epsilonI < epsilonSYD) {
                let sigma = epsilonI * steelModulus * 1000;
                sigmaS5.push(sigma);
            } else if (epsilonI >= epsilonSYD) {
                let sigma = fyd;
                sigmaS5.push(sigma);
            }
        })

        for (let i = 0; i <= 125; i++) {
            let xJ = (i / 100) * length;

            let axialForceConcrete = (width * lambda * ((i / 100) * length) * fcd) / 1000;
            let axialForceAs1 = (rebarAreaEndZone * 100 * sigmaS1[i]) / 1000;
            let axialForceAs2 = (rebarAreaMiddleZone * 100 * sigmaS2[i]) / 1000;
            let axialForceAs3 = (rebarAreaMiddleZone * 100 * sigmaS3[i]) / 1000;
            let axialForceAs4 = (rebarAreaMiddleZone * 100 * sigmaS4[i]) / 1000;
            let axialForceAs5 = (rebarAreaEndZone * 100 * sigmaS5[i]) / 1000;


            let totalAxialForce = axialForceConcrete + axialForceAs1 + axialForceAs2 + axialForceAs3 + axialForceAs4 + axialForceAs5;
            // console.log(totalAxialForce.toFixed(0));

            axialForceJArr.push(totalAxialForce);


            let momentConcrete = (width * lambda * xJ * fcd * (length / 2 - lambda * xJ / 2)) / (1000 * 1000);
            let momentAs1 = (rebarAreaEndZone * 100 * sigmaS1[i] * (length / 2 - d1)) / (1000 * 1000);
            let momentAs2 = (rebarAreaMiddleZone * 100 * sigmaS2[i] * (length / 2 - d2)) / (1000 * 1000);
            let momentAs3 = (rebarAreaMiddleZone * 100 * sigmaS3[i] * (length / 2 - d3)) / (1000 * 1000);
            let momentAs4 = (rebarAreaMiddleZone * 100 * sigmaS4[i] * (length / 2 - d4)) / (1000 * 1000);
            let momentAs5 = (rebarAreaEndZone * 100 * sigmaS5[i] * (length / 2 - d5)) / (1000 * 1000);

            let totalMoment = momentConcrete + momentAs1 + momentAs2 + momentAs3 + momentAs4 + momentAs5;

            momentJArr.push(totalMoment);
        }

        canvasWidth = canvas.width = Number(Math.max(...momentJArr) * 2);
        canvasHeight = canvas.height = Number(Math.max(...axialForceJArr) * 2);
        let centerHorizontal = canvasWidth / 2;
        let centerVertical = canvasHeight / 2;



        context.beginPath();
        context.moveTo(0, canvas.height / 2);
        context.lineTo(canvasWidth, canvasHeight / 2);

        context.moveTo(canvasWidth / 2, 0);
        context.lineTo(canvasWidth / 2, canvasHeight);
        context.lineWidth = 1;

        context.moveTo(centerHorizontal, centerVertical);

        for (let i = 0; i <= 125; i += 5) {
            context.lineWidth = 50;
            context.lineTo(momentJArr[i] + centerHorizontal, centerVertical - axialForceJArr[i]);
        }

        for (let i = 125; i >= 0; i -= 5) {
            context.lineWidth = 50;
            context.lineTo(centerHorizontal - momentJArr[i], centerVertical - axialForceJArr[i]);
        }

        context.stroke();

    }, [width, length, d1, rebarAreaEndZone, rebarAreaMiddleZone])


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
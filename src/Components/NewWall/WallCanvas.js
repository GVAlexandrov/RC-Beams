import { useEffect, useRef } from 'react';
import styled from 'styled-components';


const WallCanvas = (props) => {
    const canvasRef = useRef(null);

    let width = props.width;
    let length = props.length;
    let d1 = Number(props.d1);
    let d2 = Number(props.d2);
    let d3 = Number(props.d3);
    let d4 = Number(props.d4);
    let d5 = Number(props.d5);
    let fyd = props.fyd;
    let fcd = props.fcd;
    let steelModulus = props.steelModulus;
    let rebarAreaEndZone = props.rebarAreaEndZone;
    let rebarAreaMiddleZone = props.rebarAreaMiddleZone;
    let epsilonYD = props.epsilonYD;
    console.log(epsilonYD / 1000);

    let epsilonUD = 67.5 / 1000;
    let epsilonC3 = 1.75 / 1000;
    let epsilonCU3 = 3.5 / 1000;
    let epsilonSYD = epsilonYD / 1000;
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


    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        let canvasWidth = 0;
        let canvasHeight = 0;
        const context = canvas.getContext('2d');
        if (!context) return;


        // EPSILON ARR
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


        // SIGMA ARRs
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


        // MOMENTS AND AXIAL FORCES
        for (let i = 0; i <= 125; i++) {
            let xJ = (i / 100) * length;

            let axialForceConcrete = (width * lambda * ((i / 100) * length) * fcd) / 1000;
            let axialForceAs1 = (rebarAreaEndZone * 100 * sigmaS1[i]) / 1000;
            let axialForceAs2 = (rebarAreaMiddleZone * 100 * sigmaS2[i]) / 1000;
            let axialForceAs3 = (rebarAreaMiddleZone * 100 * sigmaS3[i]) / 1000;
            let axialForceAs4 = (rebarAreaMiddleZone * 100 * sigmaS4[i]) / 1000;
            let axialForceAs5 = (rebarAreaEndZone * 100 * sigmaS5[i]) / 1000;


            let totalAxialForce = axialForceConcrete + axialForceAs1 + axialForceAs2 + axialForceAs3 + axialForceAs4 + axialForceAs5;

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


        // CANVAS
        canvasWidth = canvas.width = Number(Math.max(...momentJArr) * 2.05);
        canvasHeight = canvas.height = Number(Math.max(...axialForceJArr) - Math.min(...axialForceJArr)) * 1.05;
        let centerHorizontal = canvasWidth / 2;
        let centerVertical = Math.max(...axialForceJArr) * 1.025;
        let maxMoment = Math.max(...momentJArr);
        let maxAxialForce = Math.max(...axialForceJArr);
        let minAxialForce = Math.min(...axialForceJArr);
        let numberHorizontalLinesAboveZero = Math.floor(maxAxialForce / 1000);
        let numberHorizontalLinesBelowZero = Math.ceil(minAxialForce / 1000);
        let numberVerticalLines = Math.floor(maxMoment / 1000);


        // CHART-----------------------------
        context.beginPath();
        context.moveTo(centerHorizontal, centerVertical - axialForceJArr[0]);
        context.lineWidth = 0.005 * canvasWidth;

        for (let i = 0; i <= 125; i += 1) {
            context.lineTo(momentJArr[i] + centerHorizontal, centerVertical - axialForceJArr[i]);
        }

        for (let i = 125; i >= 0; i -= 1) {
            context.lineTo(centerHorizontal - momentJArr[i], centerVertical - axialForceJArr[i]);
        }

        context.closePath();
        context.fillStyle = 'lightgray';
        context.fill();
        context.stroke();

        // COORDINATE SYSTEM-----------------------------
        context.beginPath();
        context.lineWidth = 0.008 * canvasHeight;
        context.moveTo(0, centerVertical);
        context.lineTo(canvasWidth, centerVertical);
        context.stroke();

        context.beginPath();
        context.lineWidth = 0.006 * canvasWidth;
        context.moveTo(canvasWidth / 2, 0);
        context.lineTo(canvasWidth / 2, canvasHeight);
        context.stroke();

        // ADDITIONAL LINES-----------------------------
        context.beginPath();
        context.setLineDash([0.005 * canvasWidth, 0.005 * canvasWidth]);
        context.strokeStyle = 'black';
        context.lineWidth = 0.0025 * canvasHeight;
        for (let i = 1; i <= numberHorizontalLinesAboveZero; i++) {
            context.font = `${0.03 * canvasHeight}px Arial`;
            context.fillStyle = "darkblue";
            context.fillText(i.toFixed(1), 0.9 * canvasWidth / 2, centerVertical - i * 1000 - 90, 0.035 * canvasWidth);
            context.moveTo(0, centerVertical - i * 1000);
            context.lineTo(canvasWidth, centerVertical - i * 1000);
        }

        for (let i = -1; i >= numberHorizontalLinesBelowZero; i--) {
            context.font = `${0.03 * canvasHeight}px Arial`;
            context.fillStyle = "darkblue";
            context.fillText(i.toFixed(1), 0.89 * canvasWidth / 2, centerVertical - i * 1000 - 50, 0.045 * canvasWidth);
            context.moveTo(0, centerVertical - i * 1000);
            context.lineTo(canvasWidth, centerVertical - i * 1000);
        }
        context.stroke();

        context.beginPath();
        context.setLineDash([0.007 * canvasHeight, 0.007 * canvasHeight]);
        context.strokeStyle = 'black';
        context.lineWidth = 0.001 * canvasWidth;
        for (let i = 1; i <= numberVerticalLines; i++) {
            context.font = `${0.03 * canvasHeight}px Arial`;
            context.fillStyle = "darkblue";
            context.fillText(i.toFixed(1), canvasWidth / 2 + i * 1000 + 50, maxAxialForce, 0.035 * canvasWidth);
            context.moveTo(canvasWidth / 2 + i * 1000, 0);
            context.lineTo(canvasWidth / 2 + i * 1000, canvasHeight);

            context.fillText((-i).toFixed(1), canvasWidth / 2 - i * 1000 + 50, maxAxialForce, 0.045 * canvasWidth);
            context.moveTo(canvasWidth / 2 - i * 1000, 0);
            context.lineTo(canvasWidth / 2 - i * 1000, canvasHeight);
        }
        context.stroke();

        context.font = `${0.033 * canvasHeight}px Arial`;
        context.fillStyle = "darkred";
        context.fillText("-M (x1000) [kN.m]", 0.01 * canvasWidth, 1.08 * maxAxialForce, 0.19 * canvasWidth);
        context.fillText("+M (x1000) [kN.m]", 0.8 * canvasWidth, 1.08 * maxAxialForce, 0.19 * canvasWidth);
        context.fillText("+N (x1000) [kN]", 0.51 * canvasWidth, 0.08 * canvasHeight, 0.17 * canvasWidth);
        context.fillText("[0;0]", 0.51 * canvasWidth, 1.08 * maxAxialForce, 0.06 * canvasWidth);

    }, [width, d5, rebarAreaEndZone, rebarAreaMiddleZone, fcd, fyd, epsilonYD])


    return (
        <DivCanvasWrapperStyled>
            <h2>Chart M-N</h2>
            <CanvasStyled ref={canvasRef} />
        </DivCanvasWrapperStyled>
    )
}

const CanvasStyled = styled.canvas`
display: block;
border:solid 1px;
width:700px;
height:500px;
margin: auto;
`;

const DivCanvasWrapperStyled = styled.div`
margin: 20px;
`;


export default WallCanvas;
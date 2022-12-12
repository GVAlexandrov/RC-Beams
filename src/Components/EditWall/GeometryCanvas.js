import { useEffect, useRef } from 'react';
import styled from 'styled-components';

let canvasHeight = 280;

const GeometryCanvas = (props) => {
    const canvasRef2 = useRef(null);
    let width = props.width;
    let length = props.length;
    let d1 = Number(props.d1);
    let d2 = Number(props.d2);
    let d3 = Number(props.d3);
    let d4 = Number(props.d4);
    let d5 = Number(props.d5);
    let rebarXPositions = [d1, d2, d3, d4, d5];
    let rebarAreaEndZone = props.rebarAreaEndZone;
    let rebarAreaMiddleZone = props.rebarAreaMiddleZone;

    let bottomDimensionsLengths = [50, 200, 400, 600, 750, 800];
    let bottomDimensionsHeights = [20, 50, 80, 110, 140, 170];
    let bottomDimensionsTextX = [100, 150, 270, 370, 410, 440];
    let bottomDimensionsTextY = [110, 140, 170, 200, 230, 260];


    useEffect(() => {
        const canvas = canvasRef2.current;
        canvas.width = 900;
        canvas.height = canvasHeight;
        const context = canvas.getContext('2d');

        // LEFT DIMENSION
        context.beginPath();
        context.lineWidth = "1";
        context.strokeStyle = "black";
        context.rect(55, 5, 40, 70);
        context.stroke();

        context.font = `14px Arial`;
        context.save();
        context.translate(45, 110);
        context.rotate(-Math.PI / 2);
        context.fillText(`Width = ${width} mm`, 0, 0);
        context.restore();


        // BOTTOM DIMENSIONs
        for (let i = 0; i <= 5; i++) {
            context.beginPath();
            context.lineWidth = "1";
            context.strokeStyle = "black";
            context.rect(95, 75, bottomDimensionsLengths[i], bottomDimensionsHeights[i]);
            context.stroke();

            if (i < 5) {
                context.fillText(`d${i + 1} = ${rebarXPositions[i]?.toFixed(0)} mm`, bottomDimensionsTextX[i], bottomDimensionsTextY[i]);
            } else {
                context.fillText(`Length = ${length?.toFixed(0)} mm`, bottomDimensionsTextX[i], bottomDimensionsTextY[i]);
            }

        }


        // WALL CONTOUR
        context.beginPath();
        context.lineWidth = "4";
        context.strokeStyle = "black";
        context.rect(95, 5, 800, 70);
        context.stroke();

        // REINFORCEMENT
        context.beginPath();
        context.lineWidth = "2";
        context.strokeStyle = "black";
        context.fillRect(137.5, 15, 15, 50);
        context.stroke();
        context.fillText(`As1`, 160, 35);
        context.fillText(`${rebarAreaEndZone.toFixed(1)} cm²`, 160, 55);

        context.beginPath();
        context.lineWidth = "2";
        context.strokeStyle = "black";
        context.fillRect(290, 15, 10, 50);
        context.stroke();
        context.fillText(`As2`, 305, 35);
        context.fillText(`${rebarAreaMiddleZone.toFixed(1)} cm²`, 305, 55);

        context.beginPath();
        context.lineWidth = "2";
        context.strokeStyle = "black";
        context.fillRect(490, 15, 10, 50);
        context.stroke();
        context.fillText(`As3`, 505, 35);
        context.fillText(`${rebarAreaMiddleZone.toFixed(1)} cm²`, 505, 55);

        context.beginPath();
        context.lineWidth = "2";
        context.strokeStyle = "black";
        context.fillRect(690, 15, 10, 50);
        context.stroke();
        context.fillText(`As4`, 630, 35);
        context.fillText(`${rebarAreaMiddleZone.toFixed(1)} cm²`, 630, 55);

        context.beginPath();
        context.lineWidth = "2";
        context.strokeStyle = "black";
        context.fillRect(837.5, 15, 15, 50);
        context.stroke();
        context.fillText(`As5`, 770, 35);
        context.fillText(`${rebarAreaEndZone.toFixed(1)} cm²`, 770, 55);
    }, [width, length, d5, rebarAreaEndZone, rebarAreaMiddleZone])



    return (
        <DivCanvasWrapperStyled>
            <h2>Geometry</h2>
            <CanvasStyled ref={canvasRef2} />
        </DivCanvasWrapperStyled>
    )
}

const CanvasStyled = styled.canvas`
display: block;
/* border:solid 1px; */
width:900px;
height:${canvasHeight}px;
margin: auto;
`;

const DivCanvasWrapperStyled = styled.div`
margin: 20px;
`;

export default GeometryCanvas;
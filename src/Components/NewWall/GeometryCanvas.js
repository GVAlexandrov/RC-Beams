import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const GeometryCanvas = (props) => {
    const canvasRef2 = useRef(null);
    let width = props.width;
    let length = props.length;
    let d1 = Number(props.d1);
    let d2 = Number(props.d2);
    let d3 = Number(props.d3);
    let d4 = Number(props.d4);
    let d5 = Number(props.d5);
    let rebarAreaEndZone = props.rebarAreaEndZone;
    let rebarAreaMiddleZone = props.rebarAreaMiddleZone;

    useEffect(() => {
        const canvas = canvasRef2.current;
        canvas.width = 900;
        canvas.height = 320;
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
        context.beginPath();
        context.lineWidth = "1";
        context.strokeStyle = "black";
        context.rect(95, 75, 50, 20);
        context.stroke();
        context.fillText(`d1 = ${d1.toFixed(0)} mm`, 100, 110);

        context.beginPath();
        context.lineWidth = "1";
        context.strokeStyle = "black";
        context.rect(95, 75, 200, 60);
        context.stroke();
        context.fillText(`d2 = ${d2.toFixed(0)} mm`, 150, 150);

        context.beginPath();
        context.lineWidth = "1";
        context.strokeStyle = "black";
        context.rect(95, 75, 400, 100);
        context.stroke();
        context.fillText(`d3 = ${d3.toFixed(0)} mm`, 270, 190);

        context.beginPath();
        context.lineWidth = "1";
        context.strokeStyle = "black";
        context.rect(95, 75, 600, 140);
        context.stroke();
        context.fillText(`d4 = ${d4.toFixed(0)} mm`, 370, 230);

        context.beginPath();
        context.lineWidth = "1";
        context.strokeStyle = "black";
        context.rect(95, 75, 750, 180);
        context.stroke();
        context.fillText(`d5 = ${d5.toFixed(0)} mm`, 410, 270);

        context.beginPath();
        context.lineWidth = "1";
        context.strokeStyle = "black";
        context.rect(95, 75, 800, 220);
        context.stroke();
        context.fillText(`Length = ${length} mm`, 440, 310);

        // WALL CONTOUR
        context.beginPath();
        context.lineWidth = "5";
        context.strokeStyle = "black";
        context.rect(95, 5, 800, 70);
        context.stroke();

        // REINFORCEMENT
        context.beginPath();
        context.lineWidth = "2";
        context.strokeStyle = "black";
        context.fillRect(135, 15, 20, 50);
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
        context.fillRect(835, 15, 20, 50);
        context.stroke();
        context.fillText(`As5`, 790, 35);
        context.fillText(`${rebarAreaEndZone.toFixed(1)} cm²`, 750, 55);
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
height:320px;
margin: auto;
`;

const DivCanvasWrapperStyled = styled.div`
margin: 20px;
`;

export default GeometryCanvas;
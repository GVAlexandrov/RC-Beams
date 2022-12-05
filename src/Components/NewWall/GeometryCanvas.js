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
        canvas.height = 350;
        const context = canvas.getContext('2d');

        // LEFT DIMENSION
        context.beginPath();
        context.lineWidth = "1";
        context.strokeStyle = "black";
        context.rect(55, 20, 40, 70);
        context.stroke();

        context.font = `18px Arial`;
        context.save();
        context.translate(45, 150);
        context.rotate(-Math.PI / 2);
        context.fillText(`Width = ${width} mm`, 0, 0);
        context.restore();

        // BOTTOM DIMENSIONs
        context.beginPath();
        context.lineWidth = "1";
        context.strokeStyle = "black";
        context.rect(95, 90, 50, 20);
        context.stroke();
        context.fillText(`d1 = ${d1.toFixed(0)} mm`, 100, 130);

        context.beginPath();
        context.lineWidth = "1";
        context.strokeStyle = "black";
        context.rect(95, 90, 200, 60);
        context.stroke();
        context.fillText(`d2 = ${d2.toFixed(0)} mm`, 140, 170);

        context.beginPath();
        context.lineWidth = "1";
        context.strokeStyle = "black";
        context.rect(95, 90, 400, 100);
        context.stroke();
        context.fillText(`d3 = ${d3.toFixed(0)} mm`, 260, 210);

        context.beginPath();
        context.lineWidth = "1";
        context.strokeStyle = "black";
        context.rect(95, 90, 600, 140);
        context.stroke();
        context.fillText(`d4 = ${d4.toFixed(0)} mm`, 370, 250);

        context.beginPath();
        context.lineWidth = "1";
        context.strokeStyle = "black";
        context.rect(95, 90, 750, 180);
        context.stroke();
        context.fillText(`d5 = ${d5.toFixed(0)} mm`, 400, 290);

        context.beginPath();
        context.lineWidth = "1";
        context.strokeStyle = "black";
        context.rect(95, 90, 800, 220);
        context.stroke();
        context.fillText(`Length = ${length} mm`, 430, 330);

        // WALL CONTOUR
        context.beginPath();
        context.lineWidth = "5";
        context.strokeStyle = "black";
        context.rect(95, 20, 800, 70);
        context.stroke();

        // REINFORCEMENT
        context.beginPath();
        context.lineWidth = "2";
        context.strokeStyle = "black";
        context.fillRect(135, 30, 20, 50);
        context.stroke();
        context.fillText(`As1`, 160, 50);
        context.fillText(`${rebarAreaEndZone.toFixed(1)} cm²`, 160, 70);

        context.beginPath();
        context.lineWidth = "2";
        context.strokeStyle = "black";
        context.fillRect(290, 30, 10, 50);
        context.stroke();
        context.fillText(`As2`, 305, 50);
        context.fillText(`${rebarAreaMiddleZone.toFixed(1)} cm²`, 305, 70);

        context.beginPath();
        context.lineWidth = "2";
        context.strokeStyle = "black";
        context.fillRect(490, 30, 10, 50);
        context.stroke();
        context.fillText(`As3`, 505, 50);
        context.fillText(`${rebarAreaMiddleZone.toFixed(1)} cm²`, 505, 70);

        context.beginPath();
        context.lineWidth = "2";
        context.strokeStyle = "black";
        context.fillRect(690, 30, 10, 50);
        context.stroke();
        context.fillText(`As4`, 650, 50);
        context.fillText(`${rebarAreaMiddleZone.toFixed(1)} cm²`, 610, 70);

        context.beginPath();
        context.lineWidth = "2";
        context.strokeStyle = "black";
        context.fillRect(835, 30, 20, 50);
        context.stroke();
        context.fillText(`As5`, 790, 50);
        context.fillText(`${rebarAreaEndZone.toFixed(1)} cm²`, 750, 70);
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
height:350px;
margin: auto;
`;

const DivCanvasWrapperStyled = styled.div`
margin: 20px;
`;

export default GeometryCanvas;
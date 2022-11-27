import { useEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';


const WallCanvas = (props) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        context.beginPath();
        context.moveTo(100, 200);
        context.lineTo(200, 250);
        context.lineTo(200, 400);
        context.lineTo(50, 400);
        context.stroke();
    }, [])

    return (
        <>
            <h1>Graph</h1>
            <CanvasStyled ref={canvasRef}>

            </CanvasStyled >
        </>
    )
}

const CanvasStyled = styled.canvas`
display: block;
border:1px solid;
width:500px;
height:500px;
margin: 50px 0px;
`;


export default WallCanvas;
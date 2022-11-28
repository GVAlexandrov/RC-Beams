import { useEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';


const WallCanvas = (props) => {
    const canvasRef = useRef(null);

    let width = props.width;
    let length = props.length;
    console.log(width);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        let canvasWidth = canvas.width = 500;
        let canvasHeight = canvas.height = 500;
        let centerHorizontal = canvasWidth / 2;
        let centerVertical = canvasHeight / 2;
        console.log(canvas);

        const context = canvas.getContext('2d');
        if (!context) return;

        for (let i = 0; i <= 125; i += 1) {
            console.log((i / 100) * length);
        }

        context.beginPath();
        context.moveTo(0, canvas.height / 2);
        context.lineTo(canvasWidth, canvasHeight / 2);

        context.moveTo(canvasWidth / 2, 0);
        context.lineTo(canvasWidth / 2, canvasHeight);

        context.moveTo(centerHorizontal, centerVertical);
        context.lineTo(width, width);
        context.lineTo(-width, 8);
        context.stroke();

    }, [width])

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
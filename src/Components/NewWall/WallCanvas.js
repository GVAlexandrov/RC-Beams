import { useEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';


const WallCanvas = (props) => {
    const canvasRef = useRef(null);

    let width = props.width;
    console.log(width);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        canvas.width = 500;
        canvas.height = 500;
        console.log(canvas);

        const context = canvas.getContext('2d');
        if (!context) return;

        context.beginPath();
        context.moveTo(0, canvas.height / 2);
        context.lineTo(canvas.width, canvas.height / 2);

        context.moveTo(canvas.width / 2, 0);
        context.lineTo(canvas.width / 2, canvas.height);

        context.moveTo(0, 0);
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
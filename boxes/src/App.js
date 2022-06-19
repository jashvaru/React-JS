import React from "react";
import Boxes from "../src/Boxes"
import Box from "../src/Box"

export default function App(props)
{
    const [squares, setSquares] = React.useState(Boxes);

    const squareElements = squares.map( square => (
        <Box key={square.id} />
    ))

    return(
        <main>
            {squareElements}  
        </main>
    );
}
import { useState } from 'react';

const Choice = ({txt, onClicked}) => {
    const gray  = "gray";
    const white = "white";
    const [color, setColor] = useState(gray);
    const handleClick = () => {
        onClicked(txt);
    }
    const changeColor = () => {
        color === gray ? setColor(white) : setColor(gray);
    }
    return (
        <span>
            <p onClick={handleClick}onMouseOver={changeColor} onMouseLeave={changeColor} 
            style={{ "color" : color , "display":"inline-block"}}> {txt} </p>
        </span>        
    )
}

export default Choice;
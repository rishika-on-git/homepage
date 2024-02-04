import React from 'react';
import "./Entry.css";
const TextComponent = () => {
    const text = "CONVO";

    return (
        <div className='body-entry'>
        <div className="css">

            {text.split('').map((letter, index) => (
                <span key={index}>{letter}</span>
            ))}

        </div>
        </div>
    );
};

export default TextComponent;

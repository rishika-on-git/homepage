import React from 'react';
import "./SparkleButton.css";
const ColoredButton = ({ color, text }) => {
  const buttonClass = `btn btn--${color}`;

  return (
    <button type="button" className={buttonClass}>
      <span className="btn__txt">{text}</span>
      {[...Array(4)].map((_, index) => (
        <i key={index} className="btn__bg" aria-hidden="true"></i>
      ))}
    </button>
  );
};

const AppBtn = () => {
  return (
    <div>
      <ColoredButton color="purple" text="LOGIN" />
      </div>
    
  );
};

export default AppBtn;

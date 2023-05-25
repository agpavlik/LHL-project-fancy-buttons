import React from 'react'; //optional
import { useReducer, useState } from "react";

function AngryButton(){

  const [anger, dispatch] = useReducer((anger, action) =>{
    if (anger < 1) {
      return anger > 1 ? 0 : anger + action;
    } else {
      return 0;
    }
  }, 0)


  return (
    <button style={{ backgroundColor: `rgba(255,0,0,${anger})` }} onClick={() => dispatch(0.1)} className="AngryButton">
      {anger < 1 && <span>Don't click me too much! </span>}
      {anger > 1 && <span>Rawr!</span>}
    </button>
  );
}

export default AngryButton;
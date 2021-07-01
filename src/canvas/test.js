import './test.css';
import React, { useState, useEffect, useRef } from 'react';

const handleJpg = (canvasRef) => {
    let ctx = canvasRef.current.getContext('2d');
    let img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 20, 30, 120, 90);
    }
    img.src = "https://cdn.statically.io/img/i.pinimg.com/originals/7d/9f/8b/7d9f8b929315d50ddae5c2879bb17a16.jpg";
}

const handlePng = (canvasRef) => {
    let ctx = canvasRef.current.getContext('2d');
    let img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 160, 30, 120, 90);
    }
    img.src = "https://www.freepnglogos.com/uploads/tiger-png/tiger-png-2.png";
}

function Foo() {

  let canvasRef = useRef(null);

    return(
      <div>
          <canvas ref={canvasRef} className="canvas" />
          <div className="buttons">
              <button className="but_jpg" onClick={() => handleJpg(canvasRef)}>JPG</button>
              <button className="but_png" onClick={() => handlePng(canvasRef)}>PNG</button>
          </div>
      </div>

    )
}
export default Foo


import React, { useState, useEffect, useLayoutEffect } from "react";
import Sketch from "react-p5";

function ArtDebug(props) {
  let valence = (22.4847/50);
  let vl;
  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef);
  }

  const draw = p5 => {
    p5.background(255, 130, 20)
    p5.ellipse(100, 100, 100)
    p5.ellipse(300, 100, 100)
  }


    return (
    <div>
      <Sketch setup={setup} draw={draw} />
    </div);
  }

  export default ArtDebug;
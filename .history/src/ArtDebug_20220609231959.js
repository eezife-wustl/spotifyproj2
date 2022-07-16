import React, { useState } from "react";
import Sketch from "react-p5";

function ArtDebug(props) {
  let valence = (22.4847/50);
  let vl;
  function random(min, max) {
    return Math.random() * (max - min) + min;
  }


  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef);

    p5.triangle(0, 0, 0, 400, 400, 400);
    p5.triangle(0, 0, 400, 0, 400, 400);
    p5.noLoop();
  }

  const draw = p5 => {

  }


    return (<Sketch setup={setup} draw={draw} />);
  }

  export default ArtDebug;
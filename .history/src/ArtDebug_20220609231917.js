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
    //p5.colorMode(p5.HSB, 360, 100, 100);
    //p5.stroke(10, 40, 100);
    p5.noLoop();
  }

  const draw = p5 => {
    p5.colorMode(p5.HSB, 360, 100, 100);
    p5.stroke(vl, 40, 100);
    let sat = random(20,40);
    let bal = random(80,100);
    p5.fill(vl, sat, bal);
    sat = random(20,40);
    bal = random(80,100);
    p5.triangle(0, 0, 0, 400, 400, 400);
    p5.fill(vl, sat, bal);
    p5.triangle(0, 0, 400, 0, 400, 400);
  }


    return (<Sketch setup={setup} draw={draw} />);
  }

  export default ArtDebug;
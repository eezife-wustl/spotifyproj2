import React, { useState } from "react";
import Sketch from "react-p5";

function ArtDebug(props) {
  let valence = (22.4847/50);
  let vl;
  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  const drawTriangle3 = (p5, x, y, X, Y, a, b, level, c) => {
    //calculate midpoint of x coordinate
    let middleX = ((x+a)/2);

    //calculate midpoint of y coordinate
    let middleY = ((y+b)/2);
    //midpoint
    //draw the line
    //a = x coordinate of opposing point to middle line
    //b = y coordinate of opposing point to middle line
    // line(a, b, middleX, middleY);

    let qe = random(20, 40)
    let qd = random(80, 100)
    p5.fill(c, qe, qd);

    p5.triangle(X, Y, middleX, middleY, x, y);

    if (level > 1) {
      let newX = X
      let newY = Y
      let mx = middleX
      let my = middleY
      let newA = a
      let newB = b
      //more energetic music = more chaotic triangles
    let energy = (38.544000000000004/50);
    //console.log(energy)
    let en;
    if (energy >= 0.02 && energy < 0.57) {
      en = random(2, 8);
      //console.log(en)
    }
    if (energy >= 0.57 && energy < 0.71) {
      en = random(0.9, 6);
    }
    if (energy >= 0.71 && energy < 0.83) {
      en = random(0, 5);
      //console.log(en);
    }
    if (energy >= 0.83 && energy <= 1) {
      en = random(0, 2);
    }
    //en = random(3);
  
    
    level = level - 1;
    drawTriangle3(p5, X, Y, middleX*en, middleY*en, x,y,level, c);
    drawTriangle3(p5, newX, newY, mx*en, my*en, newA,newB,level, c);
    }
    
  }

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef);
    p5.noLoop();
  }

  const draw = p5 => {
    p5.triangle(0, 0, 0, 400, 400, 400);
    remove()
    console.log("test")
  }


    return (
    <React.StrictMode>
      <Sketch setup={setup} draw={draw} />
    </React.StrictMode>);
  }

  export default ArtDebug;
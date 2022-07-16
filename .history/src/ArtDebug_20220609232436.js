import React, { useState } from "react";
import Sketch from "react-p5";

function ArtDebug(props) {
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
    p5.colorMode(p5.HSB, 360, 100, 100);
    //p5.stroke(10, 40, 100);
    
    //     more happy music = more red
    // (0=red, 60=yellow, 120=green, 180=cyan, 240=blue, 300=magenta)

    if (valence >= 0 && valence < 0.34) {
      vl = random(180, 240);
    }
    if (valence >= 0.34 && valence < 0.52) {
      vl = random(120, 180);
    }
    if (valence >= 0.52 && valence < 0.7) {
      vl = random(60, 120);
    }
    if (valence >= 0.7 && valence <= 0.99) {
      vl = random(0, 60);
    }

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

    //more danceability = higher base case = more triangles
    var danceability;
    let dance = ((39.93099999999999/50));
    if (dance >= 0.1 && dance < 0.55) {
      danceability = 5;
    }
    if (dance >= 0.55 && dance < 0.66) {
      danceability = 6;
    }
    if (dance >= 0.66 && dance < 0.76) {
      danceability = 7;
    }
    if (dance >= 0.76 && dance <= 0.98) {
      danceability = 8;
    }
    //console.log(danceability)
    //var zzz = random(5,10);
    //console.log(vl)
    drawTriangle3(p5, 0,0, 400,0, 400,400, danceability, vl);
    drawTriangle3(p5, 0,0, 0,400, 400,400, danceability, vl);
  }

  const draw = p5 => {

  }


    return (<Sketch setup={setup} draw={draw} />);
  }

  export default ArtDebug;
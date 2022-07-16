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
    p5.colorMode(p5.HSB, 360, 100, 100);
    //p5.stroke(10, 40, 100);
    p5.noLoop();
  }

  const draw = p5 => {

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


    return (<Sketch setup={setup} draw={draw} />);
  }

  export default ArtDebug;
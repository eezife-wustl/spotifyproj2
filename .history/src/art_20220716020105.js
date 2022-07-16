import React, { useState } from "react";
import Sketch from "react-p5";


function Art({audiodata}) {
  let valence = audiodata[4];
  //let valence = 0.9;
  let vl;
  function random(min, max) {
    return Math.random() * (max - min) + min;
  }
                            //C     B      A
  const drawTriangle3 = (p5, x, y, X, Y, a, b, level, c, distortion) => {
    let energy = 0;
    let qe = random(20, 40)
    let qd = random(80, 100)
    p5.fill(c, qe, qd);
    //p5.stroke(vl, qe, qd);
    p5.triangle(x, y, X, Y, a, b);


    //let energy = (audiodata[1]);
    //console.log(energy)
    //closest to 1 = least chaotic
    let en;
    if (energy >= 0 && energy < 0.20) {
      en = random(0.8, 1);
      //console.log(en)
    }
    if (energy >= 0.20 && energy < 0.40) {
      en = random(0.6, 0.8);
    }
    if (energy >= 0.40 && energy < 0.60) {
      en = random(0.4, 0.6);
    }
    if (energy >= 0.60 && energy < .80) {
      en = random(0.2, 0.4);
    }
    if (energy >= 0.80 && energy <= 1) {
      en = random(0.0001, 0.2);
    }

    let distX = Math.sqrt(Math.pow((x-a),2)+Math.pow((y-b),2));
    //distortion = 0.5;
    //calculate midpoint of x coordinate (point D)
    //D=B(t-1)+Ct

let DX = (distortion) * (a-x) + x;
let DY = (distortion) * (b-y) + y;

    //let DX=((a-x)*(distortion)+x);
    let middleX = ((x+a)/((en)));
    console.log("DX" + DX);

    //calculate midpoint of y coordinate
 //   let DY=((b-y)*(distortion)+y);
    let middleY = ((y+b)/((1-en)));
    console.log("DY" + DY);
    //midpoint
    //draw the line
    //a = x coordinate of opposing point to middle line
    //b = y coordinate of opposing point to middle line
    // line(a, b, middleX, middleY);
  


   // p5.triangle(X, Y, middleX, middleY, x, y);
   // p5.triangle(X, Y, DX, DY, x, y);

    if (level >= 0) {
      let newX = X
      let newY = Y
      let mx = DX
      let my = DY
      let newA = a
      let newB = b
      //more energetic music = more chaotic triangles
  

   // en = 0.5;

    level = level - 1;
    //D=B(t-1)+Ct
  //  drawTriangle3(p5, X, Y, DX, DY, x,y,level, c);
  drawTriangle3(p5, X, Y, DX, DY, x,y,level, c, distortion);
  drawTriangle3(p5, newX, newY, mx, my, newA,newB,level, c, distortion);
  // drawTriangle3(p5, X, Y, middleX*en, middleY*en, x*(1-en),y*(1-en),level, c);
  // drawTriangle3(p5, newX, newY, mx*en, my*en, newA*(1-en),newB*(1-en),level, c);
    // drawTriangle3(p5, X, Y, middleX*(1-en), middleY*en, x,y,level, c);
    // drawTriangle3(p5, newX, newY, mx*(1-en), my*en, newA,newB,level, c);
    }
    
  }

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth/4, p5.windowWidth/2.5).parent(canvasParentRef);
    p5.colorMode(p5.HSB, 360, 100, 100);
    //p5.stroke(10, 40, 100);
    p5.noLoop();
  }

  const draw = p5 => {
    

    //     more happy music = more red
    //more sad = more blue
    // (0=red, 60=yellow, 120=green, 180=cyan, 240=blue, 300=magenta)
    
    //very sad = blue
    if (valence >= 0 && valence < 0.05) {
      vl = random(222, 240);
    }
    if (valence >= 0.05 && valence < 0.10) {
      vl = random(204, 222);
    }
    if (valence >= 0.10 && valence < 0.15) {
      vl = random(186, 204);
    }
    if (valence >= 0.15 && valence < 0.20) {
      vl = random(168, 186);
    }
    //sad = lighter blue
    if (valence >= 0.20 && valence < 0.25) {
      vl = random(150, 168);
    }
    if (valence >= 0.25 && valence < 0.30) {
      vl = random(132, 150);
    }
    if (valence >= 0.30 && valence < 0.35) {
      vl = random(114, 132);
    }
    if (valence >= 0.35 && valence < 0.40) {
      vl = random(96, 114);
    }
    //balanced
    if (valence >= 0.40 && valence < 0.45) {
      vl = random(78, 96);
    }
    if (valence >= 0.45 && valence < 0.50) {
      vl = random(60, 78);
    }
    if (valence >= 0.50 && valence < 0.55) {
      vl = random(42, 60);
    }
    if (valence >= 0.55 && valence < 0.60) {
      vl = random(24, 42);
    }
    //happy
    if (valence >= 0.60 && valence < 0.65) {
      vl = random(24, 42);
    }
    if (valence >= 0.65 && valence < 0.70) {
      vl = random(6, 24);
    }
    if (valence >= 0.70 && valence < 0.75) {
      vl = random(342, 360);
    }
    if (valence >= 0.75 && valence < 0.80) {
      vl = random(324, 342);
    }
    //very happy
    if (valence >= 0.80 && valence < 0.85) {
      vl = random(306, 324);
    }
    if (valence >= 0.85 && valence < 0.90) {
      vl = random(288, 306);
    }
    if (valence >= 0.90 && valence < 1) {
      vl = random(270, 288);
    }



    // if (valence >= 0 && valence < 0.34) {
    //   vl = random(180, 240);
    // }
    // if (valence >= 0.34 && valence < 0.52) {
    //   vl = random(120, 180);
    // }
    // if (valence >= 0.52 && valence < 0.7) {
    //   vl = random(60, 120);
    // }
    // if (valence >= 0.7 && valence <= 0.99) {
    //   vl = random(0, 60);
    // }

    p5.colorMode(p5.HSB, 360, 100, 100);
    // p5.stroke(vl, 40, 100);
    p5.noStroke();
    let sat = random(20,40);
    let bal = random(80,100);
    p5.fill(vl, sat, bal);
    sat = random(20,40);
    bal = random(80,100);
    //p5.triangle(0, 0, 0, 400, 400, 400);
    p5.fill(vl, sat, bal);
   //p5.triangle(0, 0, 400, 0, 400, 400);

    //more danceability = higher base case = more triangles
    var danceability;
 let dance = audiodata[0];
 // let dance = 0.8;
    if (dance >= 0 && dance < 0.20) {
      danceability = 2;
    }
    if (dance >= 0.20 && dance < 0.40) {
      danceability = 4;
    }
    if (dance >= 0.40 && dance < 0.60) {
      danceability = 6;
    }
    if (dance >= 0.60 && dance <= 0.80) {
      danceability = 8;
    }
    if (dance >= 0.80 && dance <= 1) {
      danceability = 10;
    }

   // danceability = 5;
    //console.log(danceability)
    //var zzz = random(5,10);
    console.log(valence);
    
    p5.colorMode(p5.HSB, 360, 100, 100);
    let red = 300;
    let blue = 240;
    let green = 120;
    let yellow = 30;

    let en;
    let energy =  audiodata[1];
   // let energy =  0.8;
    if (energy >= 0 && energy < 0.20) {
      en = p5.randomGaussian(0.5,0.01);
      //console.log(en)
    }
    if (energy >= 0.20 && energy < 0.40) {
      en = p5.randomGaussian(0.55,0.01);
    }
    if (energy >= 0.40 && energy < 0.60) {
      en = p5.randomGaussian(0.6,0.01);
    }
    if (energy >= 0.60 && energy < .80) {
      en = p5.randomGaussian(0.65,0.01);
    }
    if (energy >= 0.80 && energy <= 1) {
      en = p5.randomGaussian(0.70,0.01);
    }
    let middle = 0.5;
    //en = middle-0.33;
    let pz = en;

 //   p5.fill(red, sat, bal);
 drawTriangle3(p5, p5.windowWidth,p5.windowWidth, p5.windowWidth,0, 0,0, danceability, vl, pz);
  //  p5.fill(blue, sat, bal);
    drawTriangle3(p5, 0,0, 0,p5.windowWidth, p5.windowWidth,p5.windowWidth, danceability, vl, pz);
  //  p5.fill(green, sat, bal);
    
   // p5.fill(yellow, sat, bal);
 //drawTriangle3(p5, 400,0, 400,400, 0,400, danceability, yellow);
//drawTriangle3(p5, 0,400, 400,400, 400,0, danceability, green);
  }

  function windowResized(p5) {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  }

    return (<Sketch setup={setup} draw={draw} />);
  }

  export default Art;
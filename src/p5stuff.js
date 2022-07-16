function setup() {
    createCanvas(400, 400);
     noLoop() 
  }
  
  function draw() {
    background(220);
    let c = color(255, 204, 0);
    fill(c);
    triangle(0, 0, 0, 400, 400, 400);
    triangle(0, 0, 400, 0, 400, 400);
    drawTriangle3(0,0, 400,0, 400,400, 5);
    drawTriangle3(0,0, 0,400, 400,400, 5);
  }
  
  function drawTriangle(x, X, y, Y, a, b, level) {
    //calculate midpoint of x coordinate
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    middleX = ((x+X)/2);
    //√[(x2 – x1)2 + (y2 – y1)2]
    //calculate midpoint of y coordinate
    middleY = ((y+Y)/2);
    //midpoint
    //draw the line
    //a = x coordinate of opposing point to middle line
    //b = y coordinate of opposing point to middle line
    line(a, b, middleX, middleY);
    //circle(middleX, middleY , 20);
    if (level > 1) {
  //      x = a;
  //      y = b;
  //      a = middleX;
  //      b = middleY;
       level = level - 1;
      let newX = a
      let newY = b
      let newA = middleX
      let newB = middleY
      let newx = x
      let newy = y
  //      drawTriangle(x, X, y, Y, a, b, level)
  drawTriangle(a, X, b, Y, middleX,middleY,level)
  //drawTriangle(x, a, y, b, middleX,middleY,level)
  
    }
  }
  
  function drawTriangle2(x, X, y, Y, a, b, level) {
    //calculate midpoint of x coordinate
    middleX = ((x+X)/2);
    //√[(x2 – x1)2 + (y2 – y1)2]
    //calculate midpoint of y coordinate
    middleY = ((y+Y)/2);
    //midpoint
    //draw the line
    //a = x coordinate of opposing point to middle line
    //b = y coordinate of opposing point to middle line
    line(a, b, middleX, middleY);
    //circle(middleX, middleY , 20);
    if (level > 1) {
  //      x = a;
  //      y = b;
  //      a = middleX;
  //      b = middleY;
       level = level - 1;
      let newX = a
      let newY = b
      let newA = middleX
      let newB = middleY
      let newx = x
      let newy = y
  //      drawTriangle(x, X, y, Y, a, b, level)
  //drawTriangle(a, X, b, Y, middleX,middleY,level)
  drawTriangle2(x, a, y, b, middleX,middleY,level)
  
    }
  }
  
  function drawTriangle3(x, y, X, Y, a, b, level) {
    //calculate midpoint of x coordinate
      
    middleX = ((x+a)/2);
    //√[(x2 – x1)2 + (y2 – y1)2]
    //calculate midpoint of y coordinate
    middleY = ((y+b)/2);
    //midpoint
    //draw the line
    //a = x coordinate of opposing point to middle line
    //b = y coordinate of opposing point to middle line
    // line(a, b, middleX, middleY);
    //triangle(0, 0, 0, 400, 400, 400);
    let c = color(255, 204, 0);
    fill(c);
    triangle(X, Y, middleX, middleY, x, y);
   // triangle(x, y, middleX, middleY, X, Y);
    //circle(middleX, middleY , 20);
    if (level > 1) {
      let newX = X
      let newY = Y
      let mx = middleX
      let my = middleY
      let newA = a
      let newB = b
    level = level - 1;
    drawTriangle3(X, Y, middleX, middleY, x,y,level)
    drawTriangle3(newX, newY, mx, my, newA,newB,level)
    }
  }

  //wait
  function setup() {
    createCanvas(400, 400);
     noLoop() 
  }
  
  function draw() {
    background(220);
    // randomSeed(random(100+20+13+3+10));
    let c = random(100+20+13+3+10);
    colorMode(HSB, 360, 100, 100);
    fill(c, 20, 100);
    triangle(0, 0, 0, 400, 400, 400);
    triangle(0, 0, 400, 0, 400, 400);
    drawTriangle3(0,0, 400,0, 400,400, 5, c);
    drawTriangle3(0,0, 0,400, 400,400, 5, c);
  }

  function drawTriangle3(x, y, X, Y, a, b, level, c) {
    //calculate midpoint of x coordinate
      
    middleX = ((x+a)/2);
    //√[(x2 – x1)2 + (y2 – y1)2]
    //calculate midpoint of y coordinate
    middleY = ((y+b)/2);
    //midpoint
    //draw the line
    //a = x coordinate of opposing point to middle line
    //b = y coordinate of opposing point to middle line
    // line(a, b, middleX, middleY);
    //triangle(0, 0, 0, 400, 400, 400);
    let d = random(300+20+13+3+10);
    fill(d, 40, 100)
    triangle(X, Y, middleX, middleY, x, y);
   // triangle(x, y, middleX, middleY, X, Y);
    //circle(middleX, middleY , 20);
    if (level > 1) {
      let newX = X
      let newY = Y
      let mx = middleX
      let my = middleY
      let newA = a
      let newB = b
    level = level - 1;
    drawTriangle3(X, Y, middleX, middleY, x,y,level)
    drawTriangle3(newX, newY, mx, my, newA,newB,level)
    }
  }

//three
function setup() {
    createCanvas(400, 400);
     noLoop() 
  }
  
  function draw() {
    background(220);
    // randomSeed(random(100+20+13+3+10));
    let c = random(100+20+13+3+10);
    colorMode(HSB, 360, 100, 100);
    fill(c, 40, 100);
    let d = random(100+20+13+3+10);
    triangle(0, 0, 0, 400, 400, 400);
    fill(d, 40, 100);
    triangle(0, 0, 400, 0, 400, 400);
    drawTriangle3(0,0, 400,0, 400,400, 5, c);
    drawTriangle3(0,0, 0,400, 400,400, 5, d);
  }

  function drawTriangle3(x, y, X, Y, a, b, level, c) {
    //calculate midpoint of x coordinate
      
    middleX = ((x+a)/2);
    //√[(x2 – x1)2 + (y2 – y1)2]
    //calculate midpoint of y coordinate
    middleY = ((y+b)/2);
    //midpoint
    //draw the line
    //a = x coordinate of opposing point to middle line
    //b = y coordinate of opposing point to middle line
    // line(a, b, middleX, middleY);
    //triangle(0, 0, 0, 400, 400, 400);
    let d = random(300+20+13+3+10);
    console.log(d)
    fill(d, 40, 100)
    triangle(X, Y, middleX, middleY, x, y);
   // triangle(x, y, middleX, middleY, X, Y);
    //circle(middleX, middleY , 20);
    if (level > 1) {
      let newX = X
      let newY = Y
      let mx = middleX
      let my = middleY
      let newA = a
      let newB = b
    level = level - 1;
    drawTriangle3(X, Y, middleX, middleY, x,y,level)
    drawTriangle3(newX, newY, mx, my, newA,newB,level)
    }
  }

  //four
  function setup() {
    createCanvas(400, 400);
     noLoop() 
  }
  
  function draw() {
    background(220);
    // randomSeed(random(100+20+13+3+10));
    let k = random(100+20+13+3+10);
    colorMode(HSB, 360, 100, 100);
    fill(k, 40, 100);
    let d = random(100+20+13+3+10);
    triangle(0, 0, 0, 400, 400, 400);
    fill(d, 40, 100);
    triangle(0, 0, 400, 0, 400, 400);
    drawTriangle3(0,0, 400,0, 400,400, 5, k);
    drawTriangle3(0,0, 0,400, 400,400, 5, d);
  }

  function drawTriangle3(x, y, X, Y, a, b, level, c) {
    //calculate midpoint of x coordinate
      
    middleX = ((x+a)/2);
    //√[(x2 – x1)2 + (y2 – y1)2]
    //calculate midpoint of y coordinate
    middleY = ((y+b)/2);
    //midpoint
    //draw the line
    //a = x coordinate of opposing point to middle line
    //b = y coordinate of opposing point to middle line
    // line(a, b, middleX, middleY);
    //triangle(0, 0, 0, 400, 400, 400);
    c = random(300-20+13+3+10);
    let qe = random(40, 45)
    fill(c, qe, 100)
    //console.log(d)
    triangle(X, Y, middleX, middleY, x, y);
   // triangle(x, y, middleX, middleY, X, Y);
    //circle(middleX, middleY , 20);
    if (level > 1) {
      let newX = X
      let newY = Y
      let mx = middleX
      let my = middleY
      let newA = a
      let newB = b
      let d = random(300-20+13+3+10);
    level = level - 1;
    drawTriangle3(X, Y, middleX, middleY, x,y,level, c)
    drawTriangle3(newX, newY, mx, my, newA,newB,level, d)
    }
  }

  //five
  function setup() {
    createCanvas(400, 400);
     noLoop() 
  }
  
  function draw() {
    background(220);
    // randomSeed(random(100+20+13+3+10));
    let k = random(300+20+13+3+10);
    colorMode(HSB, 360, 100, 100);
    stroke(k, 40, 100);
     let d = random(20,40);
    let dd = random(80,100);
    fill(k, d, dd);
    d = random(20,40);
    dd = random(80,100);
    triangle(0, 0, 0, 400, 400, 400);
    fill(k, d, dd);
    triangle(0, 0, 400, 0, 400, 400);
    drawTriangle3(0,0, 400,0, 400,400, 5, k);
    drawTriangle3(0,0, 0,400, 400,400, 5, k);
  }

  function drawTriangle3(x, y, X, Y, a, b, level, c) {
    //calculate midpoint of x coordinate
     //x = x *random(0,10);
    // Y = Y * random(0,10) ;
    rando = random(0,1)
    // c = random(300+20+13+3+10);
    middleX = ((x+a)/2);

    
    //√[(x2 – x1)2 + (y2 – y1)2]
    //calculate midpoint of y coordinate
    middleY = ((y+b)/2);
    //midpoint
    //draw the line
    //a = x coordinate of opposing point to middle line
    //b = y coordinate of opposing point to middle line
    // line(a, b, middleX, middleY);
    //triangle(0, 0, 0, 400, 400, 400);
    let qe = random(20, 40)
    let qd = random(80, 100)
    fill(c, qe, qd)
    //console.log(d)
    triangle(X, Y, middleX, middleY, x, y);
   // triangle(x, y, middleX, middleY, X, Y);
    //circle(middleX, middleY , 20);
    if (level > 1) {
      let newX = X
      let newY = Y
      let mx = middleX
      let my = middleY
      let newA = a
      let newB = b
      let d = random(300-20+13+3+10);
    level = level - 1;
    drawTriangle3(X, Y, middleX, middleY, x,y,level, c)
    drawTriangle3(newX, newY, mx, my, newA,newB,level, c)
    }
  }

  //six?
  function setup() {
    createCanvas(400, 400);
     noLoop() 
  }
  
  function draw() {
    background(220);
    // randomSeed(random(100+20+13+3+10));
    let exd = (20+13+3+10)/80
    let k = random(360);
    console.log(k);
    colorMode(HSB, 360, 100, 100);
    stroke(k, 40, 100);
     let d = random(20,40);
    let dd = random(80,100);
    fill(k, d, dd);
    d = random(20,40);
    dd = random(80,100);
    triangle(0, 0, 0, 400, 400, 400);
    fill(k, d, dd);
    triangle(0, 0, 400, 0, 400, 400);
    drawTriangle3(0,0, 400,0, 400,400, 5, k);
    drawTriangle3(0,0, 0,400, 400,400, 5, k);
  }

  function drawTriangle3(x, y, X, Y, a, b, level, c) {
    //calculate midpoint of x coordinate
     //x = x *random(0,10);
    // Y = Y * random(0,10) ;
    rando = random(0,10)
    // c = random(300+20+13+3+10);
    middleX = ((x+a)/2);

    
    //√[(x2 – x1)2 + (y2 – y1)2]
    //calculate midpoint of y coordinate
    middleY = ((y+b)/2);
    //midpoint
    //draw the line
    //a = x coordinate of opposing point to middle line
    //b = y coordinate of opposing point to middle line
    // line(a, b, middleX, middleY);
    //triangle(0, 0, 0, 400, 400, 400);
    let qe = random(20, 40)
    let qd = random(80, 100)
    fill(c, qe, qd)
    //console.log(d)
    triangle(X, Y, middleX, middleY, x, y);
   // triangle(x, y, middleX, middleY, X, Y);
    //circle(middleX, middleY , 20);
    if (level > 1) {
      let newX = X
      let newY = Y
      let mx = middleX
      let my = middleY
      let newA = a
      let newB = b
      let d = random(300-20+13+3+10);
    level = level - 1;
    drawTriangle3(X, Y, middleX, middleY, x,y,level, c)
    drawTriangle3(newX, newY, mx, my, newA,newB,level, c)
    }
  }

  //whatever
  function setup() {
    createCanvas(400, 400);
     noLoop() 
  }
  
  function draw() {
    background(220);
    // randomSeed(random(100+20+13+3+10));
    let exd = (20+13+3+10)/80
    //Equal weighting of dance, energy, valence
    let dance = 360 * ((30.269000000000002/50));
    let energy = 360 * (32.33200000000001/50);
    let valence = 360 * (25.692000000000004/50);
    //console.log(valence)
    //console.log(33.754999999999995/50)
    let k = dance + energy + valence;
    
    //Equal weighting of dance, energy, valence, acoustic
    let dance2 = 90 * (30.269000000000002/50);
    let energy2 = 90 * (32.33200000000001/50);
    let valence2 = 90 * (25.692000000000004/50);
    let ac = 90 * (9.337368/50);
//   k = dance2 + energy2 + valence2 + ac;
    //let k = random(360);
    console.log(k);
    colorMode(HSB, 360, 100, 100);
    stroke(k, 40, 100);
     let d = random(20,40);
    let dd = random(80,100);
    fill(k, d, dd);
    d = random(20,40);
    dd = random(80,100);
    triangle(0, 0, 0, 400, 400, 400);
    fill(k, d, dd);
    triangle(0, 0, 400, 0, 400, 400);
    //var zzz = random(5,10);
    drawTriangle3(0,0, 400,0, 400,400, 5, k);
    drawTriangle3(0,0, 0,400, 400,400, 5, k);
  }

  function drawTriangle3(x, y, X, Y, a, b, level, c) {
    //calculate midpoint of x coordinate
     //x = x *random(0,10);
    // Y = Y * random(0,10) ;
    rando = random(0,10)
    // c = random(300+20+13+3+10);
    middleX = ((x+a)/2);

    
    //√[(x2 – x1)2 + (y2 – y1)2]
    //calculate midpoint of y coordinate
    middleY = ((y+b)/2);
    //midpoint
    //draw the line
    //a = x coordinate of opposing point to middle line
    //b = y coordinate of opposing point to middle line
    // line(a, b, middleX, middleY);
    //triangle(0, 0, 0, 400, 400, 400);
    let qe = random(20, 40)
    let qd = random(80, 100)
    fill(c, qe, qd)
    //console.log(d)
    triangle(X, Y, middleX, middleY, x, y);
   // triangle(x, y, middleX, middleY, X, Y);
    //circle(middleX, middleY , 20);
    if (level > 1) {
      let newX = X
      let newY = Y
      let mx = middleX
      let my = middleY
      let newA = a
      let newB = b
      //more energetic music = more chaotic triangles
      //more happy music = more red
      //more danceability = higher base case
    let d = random(3);
    level = level - 1;
    drawTriangle3(X, Y, middleX*d, middleY*d, x,y,level, c)
    drawTriangle3(newX, newY, mx*d, my*d, newA,newB,level, c)
    }
  }

  //final perhaps
  function setup() {
    createCanvas(400, 400);
     noLoop() 
  }
  
  function draw() {
    background(220);
    // randomSeed(random(100+20+13+3+10));
    let exd = (20+13+3+10)/80
    //more happy music = more red
    //(0=red, 60=yellow, 120=green, 180=cyan, 240=blue, 300=magenta)
    let valence = (22.4847/50);
    let vl;
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
    //console.log(valence)
    //console.log(33.754999999999995/50)
    

    //let k = random(360);
    //console.log(k);
    colorMode(HSB, 360, 100, 100);
    stroke(vl, 40, 100);
     let d = random(20,40);
    let dd = random(80,100);
    fill(vl, d, dd);
    d = random(20,40);
    dd = random(80,100);
    triangle(0, 0, 0, 400, 400, 400);
    fill(vl, d, dd);
    triangle(0, 0, 400, 0, 400, 400);
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
    console.log(danceability)
    //var zzz = random(5,10);
    console.log(vl)
    drawTriangle3(0,0, 400,0, 400,400, danceability, vl);
    drawTriangle3(0,0, 0,400, 400,400, danceability, vl);
  }

  function drawTriangle3(x, y, X, Y, a, b, level, c) {
    //calculate midpoint of x coordinate
     //x = x *random(0,10);
    // Y = Y * random(0,10) ;
    rando = random(0,10)
    // c = random(300+20+13+3+10);
    middleX = ((x+a)/2);

    
    //√[(x2 – x1)2 + (y2 – y1)2]
    //calculate midpoint of y coordinate
    middleY = ((y+b)/2);
    //midpoint
    //draw the line
    //a = x coordinate of opposing point to middle line
    //b = y coordinate of opposing point to middle line
    // line(a, b, middleX, middleY);
    //triangle(0, 0, 0, 400, 400, 400);
    let qe = random(20, 40)
    let qd = random(80, 100)
    fill(c, qe, qd)
    //console.log(d)
    triangle(X, Y, middleX, middleY, x, y);
   // triangle(x, y, middleX, middleY, X, Y);
    //circle(middleX, middleY , 20);
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
      console.log(en)
    }
    if (energy >= 0.71 && energy < 0.83) {
      en = random(5);
    }
    if (energy >= 0.83 && energy <= 1) {
      en = random(2);
    }
    //en = random(3);
    
    
    level = level - 1;
    drawTriangle3(X, Y, middleX*en, middleY*en, x,y,level, c)
    drawTriangle3(newX, newY, mx*en, my*en, newA,newB,level, c)
    }
  }
let aPosition = 0;

function setup() {
  createCanvas(1200, 800);
  background(0);
}

function draw() {
  // background(0);
  let d = millis()/1000;
  // var n = d.getTime();
  let xSin = sin(TWO_PI * 0.1 * d);
  let ySin = sin(TWO_PI * 0.2 * d) + sin(TWO_PI * 0.41 * d) + sin(TWO_PI * 0.7 * d) ;
  // let ySin = sin(TWO_PI * 0.2 * d);

  let aSin = sin(TWO_PI * 0.5 * d)* 1.2;
  let bSin = sin(TWO_PI * 0.75 * d)* 0.8;
  let cSin = sin(TWO_PI * 0.2 * d)* 0.6;
  let sumSin = aSin + bSin + cSin;

  let mapsSin = map(aSin, -1, 1, 120, 20);
  let mapbSin = map(bSin, -1, 1, 250, 150);
  let mapcSin = map(cSin, -1, 1, 380, 280);
  let mapSumSin = map(sumSin, -1, 1, 600, 700);



  let xCos = sin(PI * 0.2 * d);
  let xTan = sin(HALF_PI * 0.2 * d);
  


  let sizeSin = map(xSin, -1, 1, 0, width);
  let sySin = map(ySin, -1, 1, 400, 200);

  let sizeCos = map(xCos, -1, 1, 0, -400);
  let sizeTan = map(xTan, -1, 1, 0, -400);


  ellipse(aPosition, mapsSin, 5);
  ellipse(aPosition, mapbSin, 5);
  ellipse(aPosition, mapcSin, 5);
  ellipse(aPosition, mapSumSin, 5);



  
  // ellipse(50, 50, 80, 80);

  // rect(100, 400, 50, sizeSin);
  // rect(170, 400, 50, sizeCos);
  // rect(240, 400, 50, sizeTan);
  fill(255);
  textSize(20)
  // text("A = " + aSin, 20, 600);
  // text("B = " + bSin, 20, 650);
  // text("Sum = " + sumSin, 20, 700);

  // ellipse(sizeSin, sySin, 5);
  // console.log((TWO_PI * 0.2 * d));
 
  
  // put drawing code here
  aPosition = aPosition + 2;

  if (aPosition > width) {
    aPosition = 0;
    background(0);
  }

}

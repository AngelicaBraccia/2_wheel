function setup() {
  createCanvas(800,600);
  background(40);
}

function draw() {
  translate(width/2,height/2);
  if(frameCount<=160){
    var alp = PI/80;
    var x = cos(frameCount*alp);
    var y = sin(frameCount*alp);
  line(260,0,x*260,y*260);
  stroke(lerpColor(color('#0fefca'),color('#ea0043'),frameCount/130));
  }
}

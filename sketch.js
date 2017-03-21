var iMax=2000;
var x = new Array();
var y = new Array();
var Size = new Array();
var Alpha = new Array();
var Col = new Array();
var Alpha2=255;

function preload() {
Menu_song=loadSound('me.mp3');
myFont=loadFont('me123.ttf');
logo_me = loadImage("logo_me.png");
}

function setup(){
createCanvas(windowWidth,windowHeight);  
frameRate(60);
var Earth={size:100};
    
var Logo={x:windowWidth/2,y:windowHeight/2};

for (i=0;i<iMax;i++) {
var ran= random(1000);
x[i]=map(ran,0,1000,0,windowWidth);
}
    
for (i=0;i<iMax;i++) {
var ran= random(1000);
y[i]=map(ran,0,1000,0,windowHeight);
}

for (i=0;i<iMax;i++) {
var ran= random(6);
Size[i]=ran;
}

for (i=0;i<iMax;i++) {
var ran= random(50,255);
Alpha[i]=ran;
}

for (i=0;i<iMax;i++) {
var ran= random(200,255);
Col[i]=ran;
}
    
}

function draw() {
Menu_song.setVolume(0.1);
if(Menu_song.isPlaying())
 {

 }
    else{ Menu_song.play();}
background(0); 
for (i=0;i<iMax;i++){
    noStroke();
    fill(255,Col[i],Col[i]-10,Alpha[i]);
    ellipse(x[i],y[i],Size[i],Size[i]);
}
noStroke();
fill(255,255,255,80);
//strokeWeight(20);
//nofill();
ellipse(windowWidth,windowHeight+150,windowWidth*2+490,2090);

fill(60,105,255);
noStroke();
ellipse(windowWidth,windowHeight+150,windowWidth*2+400,2000);

textFont(myFont);
fill(255);
stroke(0);
strokeWeight(6);
textSize(20);
textAlign(CENTER,CENTER)
text('Press any key to continue',windowWidth/2,windowHeight/2+(windowHeight/4));
image(logo_me,windowWidth/4,windowHeight/5,3000/3,1199/3);
noStroke();
fill(0,0,0,Alpha2);
rect(0,0,windowWidth,windowHeight);
Alpha2-=2*0.5;
}

function mousePressed(){
 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

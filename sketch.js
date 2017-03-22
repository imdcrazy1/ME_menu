var iMax=500;
var x = new Array();
var y = new Array();
var Size = new Array();
var Alpha = new Array();
var Col = new Array();
var Alpha2=255;
var Alpha2_change=0;
var Volume_change=0.1;
var Velocity=0;
var Count=0;
var TextAlpha=255;
var Gay_power;

function preload() {
Menu_song=loadSound('me.mp3');
Menu_sound=loadSound('me2.mp3');
myFont=loadFont('me123.ttf');
logo_me = loadImage("logo_me.png");
}

function setup(){
createCanvas(windowWidth,windowHeight);
frameRate(60);
Gay_power=createVideo('GAY_POWER.webm');
Gay_power.loop();
Gay_power.pause();
Gay_power.hide();
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

if (Velocity==0){}else{Velocity+=1;TextAlpha-=10;}
console.log(Alpha2);

Menu_song.setVolume(Volume_change);
if(Menu_song.isPlaying())
 {

 }
    else{ Menu_song.play();}
background(0);
for (i=0;i<iMax;i++){
    noStroke();
    fill(255,Col[i],Col[i]-10,Alpha[i]);
    ellipse(x[i],y[i]+Velocity,Size[i],Size[i]);
}
for (i=0;i<iMax;i++){
    noStroke();
    fill(255,Col[i],Col[i]-10,Alpha[i]);
    ellipse(x[i],y[i]-windowHeight+Velocity,Size[i],Size[i]);
}
noStroke();
fill(255,255,255,80);
//strokeWeight(20);
//nofill();
ellipse(windowWidth,windowHeight+150+(2*Velocity),windowWidth*2+490,2090);

fill(60,105,255);
noStroke();
ellipse(windowWidth,windowHeight+150+(2*Velocity),windowWidth*2+400,2000);

textFont(myFont);
fill(255,TextAlpha);
stroke(0,TextAlpha);
strokeWeight(6);
textSize(10);
textAlign(CENTER,CENTER);
if(Alpha2>-500 && Alpha2_change==0){text('Loading',windowWidth/2,windowHeight/2);}
tint(255,TextAlpha+500);
textSize(20);
text('Press any key to continue',windowWidth/2,windowHeight/2+(windowHeight/4)+Velocity);
image(logo_me,windowWidth/2-250,windowHeight/5+Velocity);


noStroke();
fill(0,0,0,Alpha2);
rect(0,0,windowWidth,windowHeight);
if(Alpha2>(-500) && Alpha2_change==0){Alpha2-=6;}
if(Alpha2_change==1){Alpha2+=6;}
if(Alpha2>500 && Alpha2_change==1){
    Gay_power.loop();
    tint(255);
    image(Gay_power,0,0,windowWidth,windowWidth/1.77);}
}

function mousePressed(){
if (Velocity>0 || Alpha2>-500 && velocity>0){}else{
Volume_change=0;
Menu_sound.play();
Velocity=0.001;
Alpha2_change=1;
}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

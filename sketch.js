let img;
let imgs;
let click;
let count;
let blacklist;
let num;
let rolled;
let myFont;

function preload() {
    myFont = loadFont('assets/Roboto-Medium.ttf');
  }

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  img = loadImage('assets/dice50.jpg');
  click = 0;
  count = 50; //total amount of numbers
  blacklist = [25, 33, 41]; //numbers you dont want

  imgs = [];
  for (let i = 0; i <= count; i++) {
    imgs[i] = loadImage('assets/dice' + str(i) + '.jpg');
  }

  num = 0;
  rolled = [];
  textFont(myFont);
  textSize(50);
}

function draw() {
  background(220);
  
  //text('potato', -(windowWidth/2) + 50, -(windowHeight/2) + 80)

  if (click == 0) {
      // translate(windowWidth/2, windowHeight/2, 0);
      push();
    //   img = loadImage('assets/dice' + str(ceil(random(count))) + '.jpg');
      texture(imgs[ceil(random(count))]);
      rotateX(frameCount * -0.2);
      box(170, 170, 170);
      pop();
    }
  else if (click == 1) {
      push();
    //   img = loadImage('assets/dice' + str(num) + '.jpg');
      texture(imgs[num]);
      rotateX(0);
      box(170, 170, 170);
      pop();
    }
  
    
    updateText()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  if (click == 0) {
    click = 1;

    num = ceil(random(count)) + 1;

    while (blacklist.includes(num)) {
        console.log('re rolling. Num is:', num)
        num = ceil(random(count)) + 1;
    }


    console.log('num is:', num)
    rolled.push(num);
    
  }

  else if (click == 1) {
    if (rolled.length >= 3) {
        click = 2;
        //console.log('if you click again the rolled numbers will be reset.   ');
        rolled.push('if you click again the rolled numbers will be reset.   ');
    }
    else if (rolled.length <3) {
        click = 0;
    }

  }

  else if (click == 2) {
    click = 0;
    rolled = [];
    
  }



}


function updateText() {
    //console.log('updating text')
    for (let i = 0; i < rolled.length; i++) {
        text(rolled[i], -(windowWidth/2) + 50, -(windowHeight/2) + 80 + 50*i);
        //console.log('updated text')
    }
}
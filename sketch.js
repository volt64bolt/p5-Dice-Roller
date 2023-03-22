let imgs;
let click;
let count;
let blacklist;
let nums;
let rolled;
let myFont;
let rdm

function preload() {
    myFont = loadFont('assets/Roboto-Medium.ttf');
  }

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  click = 0;
  count = 43; //total amount of numbers
  blacklist = [9]; //numbers you dont want

  imgs = [];
  for (let i = 0; i <= count + 1; i++) {
    imgs[i] = loadImage('assets/dice' + str(i) + '.jpg');
  }

  nums = [0, 0, 0];
  rolled = [];

  rdm = [imgs[0], imgs[0], imgs[0]];

  textFont(myFont);
  textSize(75);
}

function draw() {
  background(220);
  drawDice(0, -200, 0);
  drawDice(1, 0, 0);
  drawDice(2, 200, 0);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  if (click == 0) {
    click = 1;

    for (let i = 0; i < 3; i++) {
      nums[i] = ceil(random(count)) + 1;

      while (blacklist.includes(nums[i])) {
          console.log('re rolling. Num was:', nums[i])
          nums[i] = ceil(random(count)) + 1;
      }

      console.log('num is:', nums[i])
      rolled.push(nums[i]);
    }
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
        text(rolled[i], -(windowWidth/2) + 50, -(windowHeight/2) + 100 + 75*i);
        //console.log('updated text')
    }
}

function drawDice(c, x, y) {
    if (click == 0) {
      push();
      translate(x, y, 0);
      if ((frameCount * -5) % 90 == 0) {
        rdm[c] = imgs[ceil(random(count))];
      }
      texture(rdm[c])
      rotateX(radians(frameCount * -5));
      box(170, 170, 170);
      pop();
    }
  else if (click == 1) {
      push();
      translate(x, y, 0);
      texture(imgs[nums[c]]);
      rotateX(0);
      box(170, 170, 170);
      pop();
    }
    updateText()
}

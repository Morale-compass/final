let myTitle
let myButton1; // create two button variables
let myButton2;
let buttonPush;

// an array to randomly choose from. 80% of the time 1 will be chosen
// .. 20% of the time 2 will be chosen
let choices = [1, 2, 2, 2, 2];
let choice; // empty variable we'll use below

function setup() {
  noCanvas();
  myTitle = select ('#myTitle')

  myButton1 = select('#myButton1');
  myButton1.mousePressed(buttonPress1);

  myButton2 = select ('#myButton2')
  buttonPush = 0;
}

function draw() {
  
}

function buttonPress1() {
  // we can use the random function to randomly select an element from the array
  buttonPush = buttonPush + 1;
  if (buttonPush === 1) {

    myTitle.html ('"Oh my dear! Everyone is sick!"')
    myButton1.html ('"What does that mean?"')
  }

  else if (buttonPush === 2) {
    
    myTitle.html ('"Let me help you."')
    myButton1.html ('"Alright"')
  }
  else if (buttonPush === 3) {

    myTitle.html ("The treatment is painful, piercing, and in moments your vision blurs. You are cured, but unfortunately the disease you suffered was life")
    myButton1.hide ();
    myButton2.hide ();
  }
}
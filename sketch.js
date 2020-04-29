let myTitle;
let myButton1, myButton2, myButton3;
let buttonPush;
let myInput;
let input;

function setup () {
  noCanvas ()
  myTitle = select ('#myTitle')

  myButton1 = select ('#myButton1')
  myButton1.mousePressed (buttonPressed);
  buttonPush = 0;
  myButton2 = select ('#myButton2')
  myButton3 = select ('#myButton3')

  input = select ('#input')
  myInput = select('#myInput')
  myString = ' ';
}

function draw () {
   myString = myInput.value ();
   
}

function mousePressed () {
  
}

function buttonPressed () {
  buttonPush = buttonPush + 1;
  if (buttonPush === 1) {
   
    myTitle.html ('"Oh you\'re awake!"')
    myButton1.html ('"Who are you?"')
  }
  else if (buttonPush === 2) {

    myTitle.html ('"Dr. Alban Baines. I am here to help"')
    myButton1.html ('"Help?"')
  }

  else if (buttonPush === 3) {
    
    myTitle.html ('"What\'s your name?"')
    myButton1.html ('>')
    myInput.show ();
  }

  else if (buttonPush === 4) {

    myTitle.html ('"Yes, ' + myString + ', you\'re on my list. You\'re very, very, sick. But I can cure you. Come with me."')
    myInput.hide ();
    myButton1.hide ();
    myButton2.show ();
    myButton3.show ();
   
    myButton2.position (550, 150)
    myButton3.position (650,150)
  }

  else if (buttonPush === 5) {

    myButton1.mousePressed (wakeUp);

  }

function wakeUp () {
    createCanvas (100, 100)
    background (0)

  }


  
}
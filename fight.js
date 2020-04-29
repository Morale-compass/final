let myTitle
let myButton1, myButton2, myButton3, myButton4;
let buttonPush1, buttonPush2, buttonPush3, buttonPush4;
let myInput
let myString


// an array to randomly choose from. 80% of the time 1 will be chosen
// .. 20% of the time 2 will be chosen
let choices = [1, 2, 2, 2, 2];
let choice; // empty variable we'll use below

function setup() {
  noCanvas();
  myTitle = select ('#myTitle')

  myButton1 = select ('#myButton1')
  myButton2 = select ('#myButton2')
  myButton3 = select ('#myButton3')
  myButton4 = select ('#myButton4')

  myInput = select('#myInput')

  choice = random(choices);  
  if (choice === 1) {
   myTitle.html ("You manage to fight him off long enough to escape. Where do you go?")
  } else if (choice === 2) {
    myTitle.html ("The fight doesn't last long, you lunge at the doctor and feel something sharp pierce your stomach. The doctor leaves you there, bleeding out.")
    myButton1.hide ();
    myButton2.hide ();
    myButton3.hide ();
    myButton4.hide ();
  }
  myButton1.mousePressed (left);
  myButton2.mousePressed (right);
  myButton3.mousePressed (forward);
  myButton4.mousePressed (back);
  buttonPush1 = 0
  buttonPush2 = 0
  buttonPush3 = 0
  buttonPush4 = 0
}

function draw() {
  myString = myInput.value ();
  if (myString === "bastart") { myTitle.html ("You escaped! You tell as many people as you can about the doctor, but you never see or hear about him again. It soon becomes just another scary story you tell to terrorize the neighbor kids, laughing and explaining how you nearly had an impromptu bloodletting from something straight out of a history book. But every so often you swear you see a strange beak peek from around a corner....")}
}

function left () {
  buttonPush1 = buttonPush1 + 1;
  if (buttonPush3 < 2 
    || buttonPush4 < 2 
    || buttonPush1 > 2
    || buttonPush1 === 2 && buttonPush2 < 1
    ) { myTitle.html ("You keep running and running until you finally see another person. You beg them for help, explaining everything that has happened with this deadly doctor. They hand you an apple... An apple a day, after all")
  myButton1.hide ();
    myButton2.hide ();
    myButton3.hide ();
    myButton4.hide ();

}

}

function right () { 
  buttonPush2 = buttonPush2 + 1;

  if (buttonPush2 === 2 && 
    buttonPush1 === 2 && 
    buttonPush4 === 2 &&
    buttonPush3 === 2) {
    myInput.show ()
  
    myButton1.hide ();
    myButton2.hide ();
    myButton3.hide ();
    myButton4.hide ();}

      else if ( buttonPush1 < 1 || 
      buttonPush4 < 2 ||
      buttonPush3 < 2 ) { myTitle.html ("You aren't sure how long you run, it feels like several hours too long, but you eventually do end up back home, and safely in your bed. After some time you wonder if it was all just a bad dream in the first place")

      myButton1.hide ();
      myButton2.hide ();
      myButton3.hide ();
      myButton4.hide ();}

    

}

function forward () {
  buttonPush3 = buttonPush3 + 1;
  if (buttonPush3 > 2) {myTitle.html ("The landscape is entirely unknown to you you swear you've been here before, but every twist and turn is strange and you only end up more and more lost. You lose tract of time. Has it been hours? Days?")
    myButton1.hide ();
    myButton2.hide ();
    myButton3.hide ();
    myButton4.hide ();
    }

}

function back () {
  buttonPush4 = buttonPush4 + 1;
  if (buttonPush3 < 2 
    || buttonPush4 > 2) { myTitle.html ("The doctor catches up. You shout and fight and beat your fists against him, but it's too late.... after a while you go cold") 
    myButton1.hide ();
    myButton2.hide ();
    myButton3.hide ();
    myButton4.hide ();
}

}
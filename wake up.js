function setup () {
  createCanvas (1340, 620)
  
}

function draw () {
  background (255)
  textSize(100);
    textAlign(CENTER);
    fill(random(0,50));
    text('wake up', random(width/2-3, width/2+3), random(height/2-3, height/2+3));
   
}

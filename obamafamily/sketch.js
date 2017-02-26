// created by Laura Eise
// last edited 1/30/17
// Assignment 2 - Lego Family: The Obama Family

var barackX = 100; // position Barack's lego to the left of the canvas
var barackY = 100; // position Barack's lego to the top of the canvas
var michelleX = 0; // position Michelle's lego to the left of the canvas
var michelleY = 0; // position Michelle's lego to the top of the canvas
var maliaX = 100; // position Malia's lego to the left of the canvas
var maliaY = 500; // position Malia's lego to the bottom of the canvas
var sashaX = 700; // position Sasha's lego to the right of the canvas
var sashaY = 100; // position Sasha's lego to the top of the canvas
var boX = 700; // position Bo's lego to the right fo the canvas
var boY = 700; // position Bo's lego to the bottom of the canvas
var sunnyX = 0; // position Sunny's lego to the left of the canvas
var sunnyY = 700; // position Sunny's lego tothe bottom of the canvas

function setup() {
  createCanvas(800, 800); // set up parameters of canvas
  background(102,124,78); // set color of the background (in this case, to represent grass)
  noStroke(); // remove strokes so there are no outlines
  fill(223,250,253); // set color of sky
  rect(0,0,800,575); // create sky boundaries
}

function draw() {

  background(102,124,78); // repeat background so that the loop refreshes and characters appear to move
  fill(223,250,253); // repeat sky fill so that the loop refreshes
  rect(0,0,800,575); // repeat sky shape so that the loop refreshes
  Barack(); // add Barack's function to the loop
  Michelle(); // add Michelle's function to the loop
  Malia(); // add Malia's function to the loop
  Sasha(); // add Sasha's function to the loop
  Bo(); // add Bo's function to the loop
  Sunny(); // add Sunny's function to the loop
  
  barackX = min(barackX + 1, 400); // stop variable from going above 400
  barackY = min(barackY + 1, 300); // stop variable from going above 300
  
  michelleX = min(michelleX + 1, 300); // stop variable from going above 300
  michelleY = min(michelleY + 1, 320); // stop varaible from going aboe 320
  
  maliaX = min(maliaX + 1, 220); // stop variable from going above 220
  maliaY = max(maliaY - 1, 300); // stop variable from going below 300
  
  sashaX = max(sashaX - 1, 500); // stop variable from going below 500
  sashaY = min(sashaY + 1, 350); // stop variable from going above 350

  boX = max(boX - 2, 575); // stop variable from going below 575
  boY = max(boY - 2, 550); // stop variable from going above 550

  sunnyX = min(sunnyX + 3, 125); // stop variable from going below 125
  sunnyY = max(sunnyY - 3, 550); // stop varaible from going above 550
}

// Barack in Suit
function Barack() {
  fill(0); // set background as black for suit and hair color
  rect(barackX, barackY, 75, 300); // create body
  fill(182, 125, 101); // set color of face
  rect(barackX, barackY + 10, 75, 60); // create face
  fill(200); // set color for grey in hair
  rect(barackX + 5, barackY, 10, 10); // create small rectangle to show grey in hair
  rect(barackX + 20, barackY, 10, 10); // create small rectangle to show grey in hair
  rect(barackX + 45, barackY, 10, 10); // create small rectangle to show grey in hair
  rect(barackX + 60, barackY, 10, 10); // create small rectangle to show grey in hair
}

// Michelle in Dress
function Michelle() {
  fill(177, 116, 91); // set skin color
  rect(michelleX, michelleY, 70, 280); // create body
  fill(1, 146, 160); // set dress color
  rect(michelleX, michelleY + 65, 70, 150); // create dress
}

// Malia in Skirt
function Malia() {
  fill(182, 125, 101); // set skin color
  rect(maliaX, maliaY, 55, 300); // create body
  fill(134, 154, 207); // set dress color
  rect(maliaX, maliaY + 60, 55, 160); // create dress
}

// Sasha in Pants
function Sasha() {
  fill(177, 116, 91); // set skin color
  rect(sashaX, sashaY, 60, 250); // create body
  fill(254, 97, 70); // set color of shirt
  rect(sashaX, sashaY + 50, 60, 100); // create shirt
  fill(216, 194, 60); // set color of pants
  rect(sashaX, sashaY + 75, 60, 125); // create pants
}

// Black & White Dog
function Bo() {
  fill(0); // set color of fur
  rect(boX, boY, 70, 50); // create body
  fill(255); // set color of spotted fur
  rect(boX + 15, boY + 20, 40, 30); // create fur spot
}

// Black Dog
function Sunny() {
  fill(0); // set color of fur
  rect(sunnyX, sunnyY, 70, 50); // create body
}
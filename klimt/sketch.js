function setup() {
  createCanvas(230,150); // created rectangular canvas to reflect the size of my cropped digital drawing
  strokeWeight(0); // set thickness of lines to 0 so there would be no borders
  background(127,73,9); // set the color that occurred the most in the picture to fill in the gaps
  
  // Purple Rectangle
  fill(54,5,93); // set color of the upcoming rectangle; captured RGB from cropped painting
  rect(0,0,150,100); // created shape
  fill(245,203,248); // set color of the upcoming rectangle; captured RGB from cropped painting
  rect(20,20,110,60); // created shape
  fill(169,73,134); // set color of the upcoming rectangle; captured RGB from cropped painting
  rect(30,30,90,40); // created shape
  fill(245,203,248); // set color of the upcoming rectangle; captured RGB from cropped painting
  rect(65,45,20,10); // created shape
  
  // Small Squares
  fill(250,231,239) // set color of the upcoming squares; captured RGB from cropped painting
  rect(0,100,50,50) // created shape
  rect(100,100,50,50) // created shape
  fill(28,17,17) // set color of the upcoming squares; captured RGB from cropped painting
  rect(10,110,30,30) // created shape
  rect(110,110,30,30) // created shape
  
  // Tall & Skinny Rectangle
  fill(118,86,122) // set color of the upcoming rectangle; captured RGB from cropped painting
  rect(190,0,25,20) // created shape
  fill(218,189,181) // set color of the upcoming rectangle; captured RGB from cropped painting
  rect(190,20,25,60) // created shape
  fill(157,181,103) // set color of the upcoming rectangle; captured RGB from cropped painting
  rect(190,80,25,70) // created shape
  
  // Tan Details
  fill(140,84,23) // set color of the upcoming ovals; captured RGB from cropped painting
  ellipse(160,40,5,30) // created shape
  ellipse(170,60,5,35) // created shape
  ellipse(180,50,5,50) // created shape
  ellipse(160,100,5,20) // created shape
  ellipse(160,80,5,30) // created shape
  ellipse(170,120,5,35) // created shape
  ellipse(180,100,5,50) // created shape
  ellipse(160,180,5,20) // created shape
}

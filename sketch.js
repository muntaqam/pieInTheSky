let pies=[];
let plate;
let digitsDiv;
let digits ="3.";
let pi;
let piShow = '';
piCounter=0;
let gameover = false;
let screen =0;

function preload(){
  pi=loadStrings('one-million.txt');
}

function setup() {
  pi=pi.join('');
  // console.log(pi);
  createCanvas(800, 400);
  
  plate=new Plate(width/2,50);
  digitsDiv=createDiv(digits);
  digitsDiv.style('font-size','63pt');
  digitsDiv.position(50,600);
  piShow=pi.substring(0,2);
}

function draw() {
  	if (screen == 0) {
		startScreen();
	} else if (screen == 1) {
		gameOn();
	// if the screen variable was changed to 2, show the game over screen 	
	} else if (screen == 2) {
		gameOver();
	}

  
}


function mousePressed() {
	if (screen == 0) {
		screen = 1

	} else if (screen == 2) {
        
		screen = 1 
	}
}
  
 
  function gameOn(){
    
      if(gameover){
         digitsDiv.html(digits);
        
      }
      background(0);
      fill(255);
      textSize(48);
      text(piShow,width-64,47);
      fill(0,255,0);
      text(piShow.charAt(0),width-75.6,47);

      if(random(1)< 0.05){
       pies.push(new Pie(random(width), random(-100, -20)));

      }


      for(let pie of pies){
        pie.show();
        pie.update();

      }
        //if it reaches the bottom of the screen
        for(let i=pies.length-1;i>=0;i--){
        if (plate.catches(pies[i])){
          //cath the pie
          //check digit and deal w score
          let digit = pies[i].digit;
          let correctDigit = pi.charAt(piCounter)
          if (correctDigit==digit){
            console.log("🥧")
            digits+=digit;
            piCounter++;
            piShow=pi.substring(piCounter,piCounter+2);
          }else{
            gameover=true;
            screen=2;
            console.log("😔" );

          }

          digitsDiv.html(digits);
          pies.splice(i,1);


        }else if(pies[i].y>height +pies[i].r){
          //eat it
          pies.splice(i,1);

        }


      }
       plate.x=mouseX;
        plate.show();
  
  }
  
  function gameOver(){
    background(200, 200, 255);
    fill(255)
	textAlign(CENTER);
    textSize(40)
    fill(255, 50, 255)
    text("Game Over 🥲", width/2, height/2-40);
    
    
    fill(255)
	textAlign(CENTER);
    textSize(20)
    text("refresh the page to try again 🔄", width/2, height/2);
    
    fill(255)
	textAlign(CENTER);
    textSize(13);
    text("Click to continue current game ", width/2, height/2+30);
    reset();
    return;  
    
  }
function reset(){
    let pies=[];
    let plate;
    let digitsDiv;
    let digits ="3.";
    let pi;
    let piShow = '';
    piCounter=0;
    let screen =0;
  
   
    }
    

  function startScreen(){
		background(96, 157, 255)
		fill(255)
		textAlign(CENTER);
        textSize(13);
		text('WELCOME TO  🥧  in the sky', width / 2, height / 2)
		text('click to streak', width / 2, height / 2 + 20);
  	    
}
 
  
 

  




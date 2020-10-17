class Game{
 constructor(){
 }

 register(){
     if(gameState===0){
     form = new Form();
     //background(224, 201, 71);
     background(0, 29, 255);
     //background(bgImg);  
     form.display();
     }
 }

 play(){
    
     if(gameState===1){
        form.hide(); 
        background(224, 201, 71);
        player1.body.visible = true;
        player2.body.visible = true;
        dragon1.visible = true;
        
          if(gameState===1 && dragon1.y<550){
            dragon1.velocityX = 2;
            dragon1.velocityY = 3;
          }
        
          if(dragon1.y>550){
            console.log("am inside");
            dragon1.x = 800;
            dragon1.y = 400;
          }

          dragon2.visible = true;

          if(gameState===1 && dragon2.y<550){
            dragon2.velocityX = 2;
            dragon2.velocityY = -3;
          }

          if(dragon2.y<300){
            dragon2.x = 1000;
            dragon2.y = 500;
          }

          dragon3.visible = true;

          if(gameState===1 && dragon3.y<550){
            dragon3.velocityX = -2;
            dragon3.velocityY = 3;
          }

          if(dragon3.y>600){
            dragon3.x = 1000;
            dragon3.y = 200;
          }
        
          if(keyDown(RIGHT_ARROW)){
            player1.body.x  = player1.body.x + 10;
          }
        
          if(keyDown(UP_ARROW)){
            player1.body.y  = player1.body.y - 10;
          }

          if(keyDown(LEFT_ARROW)){
            player1.body.x =  player1.body.x - 10;
          }

          if(keyDown(DOWN_ARROW)){
            player1.body.y  = player1.body.y + 10;
          }

          if(player1.body.isTouching(egg)){
            gameState = 2;
            egg.destroy();
            dragon1.destroy();
            dragon2.destroy();
            dragon3.destroy();
          }

        
        drawSprites();
     }
 }

 playMaze(){
    // egg.destroy();
    // dragon1.destroy();
if(gameState===2){
    background(0);
    player1.body.changeImage("MazePlayer1", player1Maze);
    player2.body.changeImage("MazePlayer2", player2Maze);
    drawSprites();
}
 }

 
}
class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    textSize(20)
    text("Game Begins!",200,200)
    Player.getPlayerInfo();
    if(allPlayers !== null){
var displayPosition=130;
for(var pla in allPlayers){
  if(pla==="player"+player.index)
fill("red")
else
fill("blue")
displayPosition=displayPosition+20;
textSize(20);
text(allPlayers[pla].name + ":" + allPlayers[pla].distance,150,displayPosition)
}
    }
    if(keyDown("w")&& player.index !==null){
      player.distance+=20;
      player.update()
    }
  }
  
}

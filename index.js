
var userClickedPattern=[];
var gamePattern=[];
var buttonColors=['red','blue','green','yellow'];
var level=0;
function nextsequence(){
  userClickedPattern=[];
  var randomNumber=Math.floor(Math.random()*4);

  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  animatePress(randomChosenColour);
  $('h1').text("Level "+level);
  level+=1;
}

$(".btn").click(function(){
  var userChosenColour=this.id;
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);


  checkAnswer(userClickedPattern.length-1);


})

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour){

  $("#"+currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
$('body').on("keypress",function(){
  $('h1').text("Level "+level)
  nextsequence();

})

function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {


      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextsequence();
        }, 1000);

      }

    } else {

      console.log("wrong");
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      startOver();
      $("#level-title").text("Game Over, Press Any Key to Restart");
    }
  }
function startOver(){
  level=0;
  gamePattern=[];
  userClickedPattern=[];
  var aud=new Audio("sounds/wrong.mp3");
  aud.play();
}

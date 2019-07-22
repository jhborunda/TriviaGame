$(document).ready(function(){

   //time
   var count=0;
   var time =30;
   var isClicked=false;
   var ticker;
   var correct=0;
   var incorrect=0;
   var unanswered=0;

   //Questions
    var question1 = "The NCAA Football Bowl Subdivision, Divison 1 consist of how many conferences?"
    var answer = ["10"];
    var firstPick=["8"];
    var secondPick=["10"];
    var thridPick=["12"];
    var fourthPick=["14"];

    //items to be showed
    function showItems(){
        // $("#time-left").show();
        $("#question").show();
        $("#choice1").show();
        $("#choice2").show();
        $("#choice3").show();
        $("#choice4").show();
    }

    function hideItems(){
        $("#question").hide();
        $("#choice1").hide();
        $("#choice2").hide();
        $("#choice3").hide();
        $("#choice4").hide();
    }

    function hideAnswer(){
        $("#correct1").hide();
        $("incorrect").hide();
        $("unanswered").hide();
        $("restart").hide();
    }

    //items to be displayed
    function displayQuestion(){
    hideAnswer();
    $("#answer").hide();
    $("#image").hide();
    $("time-left").hide();

    showItems();
    $("#question").html(question1);
    $("#choice1").html(firstPick);
    $("#choice2").html(secondPick);
    $("#choice3").html(thridPick);
    $("#choice4").html(fourthPick);
    }

    //check answeres
    function checkAnswer(){

        hideItems;

        if($(this).text()===answer){
            stopTime();
            isS
        }
    }
    //display of time
    function showTime(){
        time--;
        $("#time-left").html("Time remaining: "+ time);

        if (time <= 0) {
            hideItems();
            stopTime();
            $("#answer").show();
            $("#answer").html("Time is up! The answer is: " + answer);
        }

    }

     //start game
     function startGame(){
        $(".start").hide();
        startTime();
        displayQuestion;
    }
    //rest time
    function resetTime(){
        time=30;
    }

    //start time
    function startTime(){
        clearInterval(ticker);
        tickler = setInterval(showTime, 1000);
    }

    //stop time
    function stopTime(){
        clearInterval(ticker);
        resetTime();
    }

    //start game when button is clicked
        $(".start").on("click", function(){
            startGame();
        })


   
});
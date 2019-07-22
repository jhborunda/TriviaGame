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
    var question1 = ["The NCAA Football Bowl Subdivision, Divison 1 consist of how many conferences?", "One of the Universities below is not part of the Big 12; which one is it?", "Which Universtiy below has been to the most Bowl games?", "Which Univeristy below has won the most overlal conference championships?", "The Ohio State/Michigabn rivalary startred in 1987 when Michigan defeated The Buckeyes, 34-0, which University has the most wins in the series?", "The Red River Rivalary first played in 1900, and was first won by The University of Texas, which University hgas the nost wins in rthe series?", "What is the Texas Tech's Mascot's Name?", "For which of the following Universites did Von Miller play for?"]
    var answer = ["10", "Texas A&M", "Alabama", "Nebraska", "Michigan", "The University of Texas", "The Masked Raider", "Texas A&M"];
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
        displayQuestion();
    }

    //rest time
    function resetTime(){
        time=30;
    }

    //start time
    function startTime(){
        clearInterval(ticker);
        ticker = setInterval(showTime, 1000);
    }

    //stop time
    function stopTime(){
        clearInterval(ticker);
        resetTime();
        if(count < question1.length -1){
            setTimeout(startTime, 2000);
            setTimeout(displayQuestion, 3000);
        }
    }

    resetTime();

    //need to add images


    //start game when button is clicked
        $(".start").on("click", function(){
            startGame();
        })


   
});
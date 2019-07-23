$(document).ready(function(){

   //time
   var count=0;
   var time=30;
   var isClicked=false;
   var ticker;
   var correct=0;
   var incorrect=0;
   var unanswered=0;

   //Questions
    var question1 = ["The NCAA Football Bowl Subdivision, Division 1 consist of how many conferences?", "One of the Universities below is not part of the Big 12; which one is it?", "Which University below has been to the most Bowl games?", "Which University below has won the most overall conference championships?", "The Ohio State/Michigan rivalry started in 1987 when Michigan defeated The Buckeyes, 34-0, which University has the most wins in the series?", "The Red River Rivalry first played in 1900, and was first won by The University of Texas, which University has the most wins in the series?", "What is the Texas Tech's Mascot's Name?", "For which of the following Universities did Von Miller play for?"];

    var answer = ["10", "Texas A&M", "Alabama", "Nebraska", "Michigan", "The University of Texas", "The Masked Raider", "Texas A&M"];

    var firstPick=["8", "Texas Tech", "The University of Texas", "USC", "The Ohio State University", "Oklahoma University", "Rowdy Raider", "Tedas Christain University"];
    
    var secondPick=["10", "The Universtiy of Texas", "The Ohio State University", "Alabama", "Michigan", "The Univeristy of Texas", "Pistol Pete", "The University of Texas"];
    
    var thridPick=["12", "Texas Christian University", "Okalhoma State Universituy", "Auburn", " ", " ", "The Masked Rider", "Texas Tech"];

    var fourthPick=["14", "Texas A&M", "Florida State University", "Nebraska", " ", " ", "Cowboy Pete", "Texas A&M"];
 

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
    $("#question").html(question1[count]);
    $("#choice1").html(firstPick[count]);
    $("#choice2").html(secondPick[count]);
    $("#choice3").html(thridPick[count]);
    $("#choice4").html(fourthPick[count]);

    };

    //onclick
    $("#choice1").on("click", checkAnswer);
    $("#choice2").on("click", checkAnswer);
    $("#choice3").on("click", checkAnswer);
    $("#choice4").on("click", checkAnswer);
    //check answers
    function checkAnswer(){

        hideItems;

        if($(this).text()===answer[count]){
            stopTime();
            isClicked=true;
            $("#answer").show();
            $("#answer").html("Right! The answer is: " + answer[count]);
            showImage();
            correct++;
            count++;
        }
        else {
            stopTime();
            isClicked=true;
            $("#answer").show();
            $("#answer").html("Wrong! The answer is: " + answer[count]);
            showImage();
            incorrect++;
            count++;
        }

        gameEnd();
    }

    //end of game
    function gameEnd(){
        if(count===question1.length){
         $("#time-left").hide();
         showTotals();
         count=0;
         $(".start").show();
         $(".start").on("click", function(){
             resetTotals();
             startGame();
         });
        }
        
    }
    //rest time
    function resetTime(){
    time=30;
    }

    //display of time
    function showTime(){
        time--;
        $("#time-left").html("Time remaining: " + time);

        if (time <= 0) {
            hideItems();
            stopTime();
            $("#answer").show();
            $("#answer").html("Time is up! The answer is: " + answer[count]);

            unanswered++;
            count++;
            gameEnd();
        }

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
    function showImage (){
        if (count === 0){
            $("#image").show();
            $("#image").html('<img src="assets/images/ten.png">');
        } else if(count ===1) {
            $("#image").show();
            $("#image").html('<img src="assets/images/TexasA&M.jpg">');
        }



    }

    //totals tally

    function showTotals(){
        $("#correct1").show();
        $("#correct1").html("Correct:" + correct);
        $("#incorrect").show();
        $("#incorrect").html("Incorrect:" + incorrect);
        $("#unanswered").show();
        $("#unanswered").html("Unanswered:" + unanswered);
    }

    //reset results

    //start game
    function startGame(){
        $(".start").hide();
        startTime();
        displayQuestion();
    }

   
 

    //reset totals
    function resetTotals(){
        correct=0;
        incorrect=0;
        unanswered=0;
    }


    //start game when button is clicked
        $(".start").on("click", function(){
            startGame();
        })


   
});
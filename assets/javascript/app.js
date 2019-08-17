// Global Variables 
//===========================================================================================================================
//Reference for the timer 
var timeRemainingSeconds = 60;
var intervalId;
//Reference for showing the answer screen only for a given amount of time
var displayAnswerTimeout;
//Counter for correct answers 
var correctAnswers = 0;
//Counter for incorrect answers 
var incorrectAnswers = 0;
//Counter for unanswered questions 
var unanswered = 0;



//Function Definitions 
//===========================================================================================================================
//Function for the timer that runs for each question 

//On-click function for the start button, first question will be displayed, timer will start to count down 
$("#start-button").on("click", function(){
    $("#start-game").hide();
    $("#time-remaining").show();
    $("#question-1").show();
    //if timer runs out, display incorrect answer screen 

})

//On-click functions for multiple choice options 
//Correct choice
//If correct choice made, timer pauses, and the correct answer screen is displayed
    //only happens if timer is greater than 0
$("#correct-choice-1").on("click", function(){
    correctAnswers++;
    $("#time-remaining").hide();
    $("#question-1").hide();
    $("#answer-1").show();
    //After 5 seconds, display next question 
    displayAnswerTimeout = setTimeout(function() {
        $("#answer-1").hide();
        $("#question-2").show();
        }, 5000); 
}); 
//Incorrect choice 
//If incorrect choice made, timer pauses, and the incorrect answer screen is displayed
    //only happens if timer is greater than 0  

$(document).on("click", ".incorrect-choice-1", function(){
    incorrectAnswers++;
    $("#time-remaining").hide();
    $("#question-1").hide();
    $("#answer-1").show();
    //After 5 seconds, display next question 
    displayAnswerTimeout = setTimeout(function() {
        $("#answer-1").hide();
        $("#question-2").show();
        }, 5000); 
});

//Display the total number correct at the end of the game 

//On-click function for restarting the game 



//Function Calls 
//===========================================================================================================================

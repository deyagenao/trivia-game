// Global Variables
//===========================================================================================================================
// Reference for the timer
var timeRemainingSeconds = 30;
var intervalId;
// Reference for showing the answer screen only for a given amount of time
var displayAnswerTimeout;
// Counter for correct answers
var correctAnswers = 0;
// Counter for incorrect answers
var incorrectAnswers = 0;
// Counter for unanswered questions
var unanswered = 0;
// Counter for the current question number 
var questionCounter = 0;

// Function Definitions & Calls
//===========================================================================================================================
// Function for the timer that runs for each question
function runTimeLeft() {
    // clearInterval(intervalID);
    // reset timer for 30 seconds 
    timeRemainingSeconds = 30;
    intervalID = setInterval(decrement, 1000);
}
// Decrement function that will actually decrease the number of seconds and display on the screen
function decrement () {
    //decrease seconds by 1 
    timeRemainingSeconds--;
    //display the number in the "time remaining text" box
    $("#time-remaining").text("Time Remaining: " + timeRemainingSeconds);
    // when the time remaining reaches 0 seconds, then stop 
    if (timeRemainingSeconds === 0) {
        clearInterval(intervalID);
    }
}
/////////////////
// Attaching an event handler (function) to the start button
$("#start-button").on("click", function() {
    // start button is hidden
  $("#start-game").hide();
  // first question is displayed
    displayQuestion();
});

/////////////////
// function for displaying each question
var displayQuestion = function () {
    // display the question on the page with h3 formatting
    $("#question-element").html("<h3>" + questions[questionCounter].question + "</h3>");
    // display the choices for the question
    for (var i = 0; i < questions[0].choices.length; i++) {
        // create a paragraph for each choice element and insert the text of each choice into the paragraph
        var newChoice = $("<p>").text(questions[questionCounter].choices[i]);
        // add the multiple choice to add formatting 
        newChoice.addClass("multiple-choice");
        // appending each new paragraph with each multiple choice to the choices element to display on the page 
        $("#choices-element").append(newChoice);
    }
    // display the timer to show the time left to answer the question
    $("#time-remaining").show();
    // begin the timer 
    runTimeLeft();
    // if the timer reaches 0 seconds, automatically move onto displaying the answer for the current question
    
}

/////////////////
// function for displaying the answer screen 
var displayAnswer = function() {
    // clear the question from the display 
    $("#question-element").empty();
    // clear the choices from the display
    $("#choices-element").empty();
    // hide the timer 
    $("#time-remaining").hide();
    // displaying the correct answer for the user 
    $("#correct-answer-element").text(
      "The correct answer was: " + questions[questionCounter].correctAnswer
    );
    // var answerImage = $("<img>");
    // answerImage.attr("src", "questions[questionCounter].correctAnswer");
    // $("#answer-gif-element").append(answerImage);

    // function to set a timeout for displaying the answer and automatically moving onto the next question after 4 seconds 
    displayAnswerTimeout = setTimeout(function() {
        // clear text and images from the screen 
        $("#feedback-element").empty();
        $("#correct-answer-element").empty();
        $("#answer-gif-element").empty();
        // increase the question counter to move onto the next question
        questionCounter++;
        // run the displayQuestion function to move onto the next question 
        displayQuestion();
    }, 4000);
}

/////////////////
// Attaching event handlers to the different multiple choice options
$(document).on("click", ".multiple-choice", function() {
  //check if the answer is correct
  if ($(this).text() === questions[questionCounter].correctAnswer) {
    // give positive feedback to the user
    $("#feedback-element").html("<h3>True! Your intelligence is impressive.</h3>")
    // increase number of correct answers
    correctAnswers++;
  } else {
    // give negative feedback to the user
    $("#feedback-element").html("<h3>False. Are you sure you are a fan of GOT?")
    // increase number of incorrect answers
    incorrectAnswers++;
  };
  // automatically display the answer page
  displayAnswer();
});

/////////////////
// Function for ending the game 
// The game will end when the questions are complete, which is equal to the total number of objects in the questions array 
// if (questionCounter === questions.length) {
    
// }
//Display the total number correct at the end of the game

/////////////////
//On-click function for restarting the game
// $("#restart-game").on("click", function(){

// })

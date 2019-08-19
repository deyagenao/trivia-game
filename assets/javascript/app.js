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
// Questions 
var questions = [{
    question: '1) The Braavos saying "Valar Morghulis" translates to...',
    choices: ["a) All men must serve", "b) Praise the Many Faced God", "c) All men must die", "d) Praise the Braavosi"],
    correctAnswer: "c) All men must die",
    correctAnswerGifUrl: "assets/images/valar-morhulis-gif.webp",
},
{
    question: "2) Who was responsible for the death of Robb and Catelyn Stark?",
    choices: ["a) The Lannisters", "b) The Greyjoys", "c) The Baratheons", "d) The Freys"],
    correctAnswer: "d) The Freys",
    correctAnswerGifUrl: "assets/images/frey.gif",
},
{
    question: "3) Which of the following is not part of Daenerys Targaryen's full title?",
    choices: ["a) The Silver-haired", "b) The Mother of Dragons", "c) The Breaker of Chains", "d) The Queen of the Andals"],
    correctAnswer: "a) The Silver-haired",
    correctAnswerGifUrl: "assets/images/daenerys.gif",
},
{
    question: "4) After traveling North of the Wall, Brandon Stark becomes ...",
    choices: ["a) Bran the Broken", "b) A Whitewalker ", "c) The Three-Eyed Raven", "d) One of the Free Folk"],
    correctAnswer: "c) The Three-Eyed Raven",
    correctAnswerGifUrl: "assets/images/bran-stark.gif",
},
{
    question: "5) What discovery does Samwell Tarly make while at the Citadel?",
    choices: ["a) Jaime Lannister fathered Cersei's children", "b) Jon Snow's true parents are Lyanna Stark and Rhaegar Targaryen", "c) Tyrion Lannister murdered his father", "d) Cersei Lannister used wildfire to destroy the Sept of Baelor"],
    correctAnswer: "b) Jon Snow's true parents are Lyanna Stark and Rhaegar Targaryen",
    correctAnswerGifUrl: "assets/images/samwell-tarly.gif",
},
{
    question: "6) Who did Arya Stark train to serve?",
    choices: ["a) The Lord of Light", "b) The New Gods - The Seven ", "c) The Horse God", "d) The Many-Faced God"],
    correctAnswer: "d) The Many-Faced God",
    correctAnswerGifUrl: "assets/images/many-faced.gif",
},
{
    question: "7) Who is Roberty Baratheon's last heir?",
    choices: ["a) Tommen", "b) Joffrey", "c) Gendry", "d) Myrcella"],
    correctAnswer: "c) Gendry",
    correctAnswerGifUrl: "assets/images/gendry.gif",
},
{
    question: "8) At the end of the series, the rightful leader in the North is...",
    choices: ["a) Jon Snow", "b) Sansa Stark", "c) Daenerys Targaryen", "d) Brandon Stark"],
    correctAnswer: "b) Sansa Stark",
    correctAnswerGifUrl: "assets/images/sansa.gif",
},
{
    question: "9) Who defeated the Night King?",
    choices: ["a) Arya Stark", "b) Jon Snow", "c) Daenerys Targaryen", "d) Brandon Stark"],
    correctAnswer: "a) Arya Stark",
    correctAnswerGifUrl: "assets/images/night-king.gif",
},
{
    question: '10) Complete this famous line: "When you play the Game of Thrones..."',
    choices: ["a) you fly, or you fry.", "b) everyone is your enemy.", "c) you answer to no one.", "d) you win, or you die."],
    correctAnswer: "d) you win, or you die.",
    correctAnswerGifUrl: "assets/images/cersei.gif",
}
]

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
function decrement() {
    //display the number in the "time remaining text" box
    $("#time-remaining").text("Time Remaining: " + timeRemainingSeconds);
    //decrease seconds by 1 
    timeRemainingSeconds--;
    // when the time remaining reaches 0 seconds, then stop 
    if (timeRemainingSeconds === 0) {
        stopTimer();
    }
}
var stopTimer = function() {
    clearInterval(intervalId);
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
    // display the timer to show the time left to answer the question
    $("#time-remaining").show();
    // begin the timer 
    runTimeLeft();
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
    // if the timer reaches 0 seconds, automatically move onto displaying the answer for the current question
    
}

/////////////////
// function for displaying the answer screen 
var displayAnswer = function() {
    // clear the question from the display 
    $("#question-element").empty();
    // clear the choices from the display
    $("#choices-element").empty();
    // stop the timer
    stopTimer();
    // displaying the correct answer for the user 
    $("#correct-answer-element").text(
      "The correct answer was: " + questions[questionCounter].correctAnswer
    );
    var answerImage = $("<img>");
    answerImage.attr("src", questions[questionCounter].correctAnswerGifUrl);
    answerImage.addClass("answer-image");
    $("#answer-gif-element").append(answerImage);

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

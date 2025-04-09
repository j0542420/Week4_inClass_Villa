"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Jose Villa
      Date:   7/9/2025

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");

let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions
// step 3
let timeID;
//step 4
let questionList = document.querySelectorAll("div#quiz input");

// step 5
startQuiz.onclick = function(){
   overlay.className="showquiz";
   timeID = window.setInterval(countdown,1000);

}

// step 6
function countdown(){
   if(timeLeft==0){
      clearInterval(timeID) // 6a
      let totalCorrect = checkAnswers()//6b
      if(totalCorrect==correctAnswers.length)
      {
         window.alert('congrats! you got 100%')
      }
      else //step 6c
      {
         timeleft = quizTime
         quizClock.value = timeLeft

         overlay.className = "hidequiz"
         window.alert('you answered correct '+totalCorrect+' out of '+correctAnswers.length+' questions ')
      }
   }
   else
   {
      timeleft--;
      quizClock.value = timeLeft
   }
   
}



/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}


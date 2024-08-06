/*Add your JavaScript here*/
stemScore = 0;
humanityScore = 0;
numQuestion = 0;
questionCount = 0;

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var restart = document.getElementById("restart");

//listens to click on function
q1a1.addEventListener("click", () => {
  stem();
  disableQ1Btn();
});
q1a2.addEventListener("click", () => {
  humanity();
  disableQ1Btn();
});
q2a1.addEventListener("click", () => {
  stem();
  disableQ2Btn();
});
q2a2.addEventListener("click", () => {
  humanity();
  disableQ2Btn();
});
q3a1.addEventListener("click", () => {
  humanity();
  disableQ3Btn();
});
q3a2.addEventListener("click", () => {
  stem();
  disableQ3Btn();
});


restart.addEventListener("click", () => {
  restartButton();
  enableBtn();
});

function stem (){
  stemScore +=1;
  questionCount +=1;
  console.log("questionCount = " + questionCount + " stemScore = "+stemScore);

  if (questionCount == 3){
  console.log("The quiz is done!");
  updateResult();

  }
}


function humanity(){
  humanityScore +=1;
  questionCount +=1;
  console.log("questionCount = " +questionCount + " humanityScore = "+humanityScore);

  if (questionCount == 3){
  console.log("The quiz is done!");
  updateResult();
  }
}

//Disables button after click
function disableQ1Btn(){
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
}
function disableQ2Btn(){
  document.getElementById("q2a1").disabled = true;
  document.getElementById("q2a2").disabled = true;
}
function disableQ3Btn(){
  document.getElementById("q3a1").disabled = true;
  document.getElementById("q3a2").disabled = true;
}

function enableBtn(){
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
}

function updateResult(){
  if (stemScore >=2){
      result.innerHTML = "You are a STEM person!";
      console.log("You are a STEM person!");
      }else if (humanityScore >= 2){
        result.innerHTML = "You are a arts & humanity person!";
        console.log("You are a arts & humanity person!");
      }


}

function restartButton(){
  questionCount = 0;
  stemScore = 0;
  humanityScore = 0;
  result.innerHTML = "You are a...";
  console.log("questionCount = "+questionCount);
  console.log("stemScore = " + stemScore);
  console.log("humanityScore = "+ humanityScore);
}
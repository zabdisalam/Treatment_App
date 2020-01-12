const QUESTIONONE = document.querySelector('.mc1');
const QUESTIONTWO = document.querySelector('.mc2');
const QUESTIONTHREE = document.querySelector('.mc3');
const QUESTIONFOUR = document.querySelector('.mc4');
const QUESTIONFIVE = document.querySelector('.mc5');
const QUESTIONSIX = document.querySelector('.mc6');
const SUBQUESTION = document.querySelector('#mc12');
const OUTPUT = document.querySelector('#output');

function check() {

     var questionOne = document.quiz.question1.value;
     var questionTwo = document.quiz.question2.value;
     var questionThree = document.quiz.question3.value;
     var subQuestion = document.querySelector('#mc12').value;
     var name = document.querySelector('#name').innerHTML;
     var result1;
     var result2;
     var result3;

    if(questionOne == "no") {
       result1 = name + ` doesn't like science. `;
       document.querySelector('#sub').style.visibility = 'hidden';
  } else if(questionOne == "yes") {   
       document.querySelector('#sub').style.visibility = 'visible';
       result1 = name + ` is interested in ` + subQuestion;
  } else if (subQuestion !== null && questionOne == "yes"){
       result1 = name + ` is interested in science`;
  } if(questionTwo == "no") {
       result2 = name + ` doesn't like math. `;
  } else if(questionTwo == "yes") {
     result2 = name + ` is interested in math. `;
  } if(questionThree == "yes") {
       result3 = name + ` has a good diet. `;
  } else if(questionThree == "no") {
     result3 = name + ` has a terrible diet. `;
  }  
  if (result1 !== undefined && result2 !== undefined && result3 !== undefined) {
     document.querySelector('#output').innerHTML = result1 + ' ' + result2 + ' ' + result3; 
  } else if (result1 !== undefined && result2 == undefined && result3 == undefined) {
     document.querySelector('#output').innerHTML = result1;
  } else if (result1 !== undefined && result2 !== undefined && result3 == undefined) {
     document.querySelector('#output').innerHTML = result1 + ' ' + result2;
  } else if(result1 !== undefined && result2 == undefined && result3 !== undefined) {
     document.querySelector('#output').innerHTML = result1 + ' ' + result3;
  }
  console.log(typeof(subQuestion));
}

QUESTIONFIVE.addEventListener("click", check, false);
QUESTIONSIX.addEventListener("click", check, false);
SUBQUESTION.addEventListener("keyup", check, false);
OUTPUT.addEventListener("click", check, false);














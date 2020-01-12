var business = ["Math", "Sports", "Highly Intense", "Low", "Traveling"];
var businessval = 0;
var technology = ["Computer Science", "Technology", "Laissez-faire" ,"High", "Office"];
var techval = 0;
var healthCare = ["Science", "Music", "Highly Intense", "Medium", "Standing"];
var healthval = 0;
var publicRelations = ["Social Studies", "Literature", "Intense", "Medium", "Outdoors"];
var publicval = 0;
var data = ['Business', 'Technology', 'Health Care', "Public Relations"];

function check() {

     var questionOne = document.quiz.question1.value;
     var questionTwo = document.quiz.question2.value;
     var questionThree = document.quiz.question3.value;
     var questionFour = document.quiz.question4.value;
     var questionFive = document.quiz.question5.value;
     var final = [questionOne, questionTwo, questionThree, questionFour, questionFive]
     var i;
     for (i = 0; i < final.length; i++) {
      if(business.indexOf(final[i]) !== -1){
        businessval += 1
      }else if(technology.indexOf(final[i]) !== -1){
        techval += 1
      }else if(healthCare.indexOf(final[i]) !== -1){
        healthval += 1
      }else if(publicRelations.indexOf(final[i]) !== -1){
        publicval += 1
      } finalints = [businessval, techval, healthval, publicval]
    }

  
  finaldata = data[finalints.indexOf(Math.max(...finalints))]

    document.querySelector('#output').innerHTML = finaldata;
}

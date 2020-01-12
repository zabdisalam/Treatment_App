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

    if(finaldata == "Business"){
      document.querySelector('#number_correct').innerHTML = "LUCKY YOU!!! Business and related subjects (such as the FAME group – finance, accounting, management and economics) are among the most popular fields of study at universities worldwide, particularly at the graduate level. You might have some vague ideas about why this is the case – business graduates are in high demand worldwide, business touches on pretty much every aspect of modern human society, careers with a business degree are diverse and often highly paid – and these assumptions are likely to be largely true.";
    }else if(finaldata == "Technology"){
      document.querySelector('#number_correct').innerHTML = "LUCK YOU!! This ever-changing field is constantly evolving as new forms of technology are introduced. That makes it a great choice if you want a dynamic career that will keep you learning and gaining new skills. In addition to the new tech skills you’ll develop, you’ll also benefit from learning the basics of logic, design and engineering. A good foundation in these disciplines won’t just help you write code and de-bug software – they’ll help you in other areas of your life and studies, too. When you major in Computers and Technology, you’ll have the opportunity to be involved in innovation and to do work that has a real impact on society. And aside from those intrinsic rewards, you’ll also be very well compensated! With just a bachelor’s degree and a few years of experience, you could find yourself earning more than $100,000 a year";
    }else if(finaldata == "Health Care"){
      document.querySelector('#number_correct').innerHTML = "The healthcare field is one of the biggest and rapidly growing fields today. The ageing population has been the primary reason for the growth spurt of this field in the past couple of years. As the baby boomers grow old, there will be an increasing number of people who will need special age-related care. Furthermore, in the past couple of years, more and more people are becoming health conscious. They want to remain fit and take care of themselves. They make regular checkup appointments with their doctors to ensure they are fit and leading a healthy life. Due to these reasons, the health care industry is flourishing, and it needs more professionals.";
    }else if(finaldata == "Public Relations"){
      document.querySelector('#number_correct').innerHTML = "Public Relations is an excellent field to go into because it is important for every business and organization. The skills within the field such as writing, speaking, research and establishing relationships are important to any job so you will graduate prepared with real-world skills. There are so many job opportunities within public relations that span from nonprofit organizations to PR firms to high-powered businesses. If you like a fast-paced, exciting environment where every day will be a challenge, then you should study public relations.";
    }
}

function open(){
  window.open("C:/Users/Zakaria%20Abdisalam/Documents/Treatment_App/pure/pricing.html");
}
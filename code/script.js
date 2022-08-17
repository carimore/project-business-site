// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
//function toggle() {
  //this.classList.toggle("active")
//}

 //Selects an HTML element, and calls a function which will be executed when the element is clicked.
//document.getElementById("section1").onclick = toggle





const questionOne = document.querySelector ("#question1");
const answerOne = document.querySelector (".answer1");
questionOne.addEventListener("click", function(){
  answerOne.classList.toggle("answer1")
});

const questionTwo = document.querySelector ("#question2");
const answerTwo = document.querySelector (".answer2");
questionTwo.addEventListener("click", function(){
  answerTwo.classList.toggle("answer2")
});








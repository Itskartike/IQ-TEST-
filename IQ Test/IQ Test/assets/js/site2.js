
let questions = [
  {
    id: 1,
    question: "If I drink, I die. If I eat, I’m fine. What am I?",
    answer: "Fire",
    options: [
      "Water",
      "Air",
      "Fire",
      "Poison"
    ]
  },
  {
    id: 2,
    question: "Before Mt. Everest was discovered, what was the highest mountain in the world?",
    answer: "Mt. Everest",
    options: [
      "Mt. Kilimanjaro",
      "K2 (Mount Godwin-Austen)",
      "Mt. McKinley",
      "Mt. Everest"
    ]
  },
  {
    id: 3,
    question: "Why is it important for individuals to have a basic understanding of statistics?",
    answer: "To make informed decisions in various aspects of life",
    options: [
      "To impress others with data",
      "To make informed decisions in various aspects of life",
      "To win at gambling",
      "To become a mathematician"
    ]
  },

  {
    id: 4,
    question: "What is the formula for calculating gravitational potential energy?",
    answer: "E = mgh",
    options: [
      "E = mc^2",
      "E = mgh",
      "F = ma",
      " P = VI"
    ]
  },

  {
    id: 5,
    question: "What is the chemical symbol for gold?",
    answer: "Au",
    options: [
      "Au",
      "Ag",
      "Fe",
      "Cu"
    ]
  },

  {
    id: 6,
    question: "Which river is the longest in the world?",
    answer: "Amazon",
    options: [
      "Nile",
      "Yangtze",
      "Mississippi",
      "Amazon"
    ]
  },

  {
    id: 7,
    question: "In which year did the United States declare its independence?",
    answer: "1776",
    options: [
      "1776",
      "1789",
      "1800",
      "1812"
    ]
  },


  {
    id: 8,
    question: "What has one eye but can’t see anything at all?",
    answer: "A needle",
    options: [
      "A camera",
      "A needle",
      "A hurricane",
      "A potato"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>S${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}

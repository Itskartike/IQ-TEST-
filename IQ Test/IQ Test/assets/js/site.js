
let questions = [
  {
    id: 1,
    question: "What comes next in the sequence: 2, 5, 10, 17, __?",
    answer: "26",
    options: [
      "19",
      "21",
      "24",
      "26"
    ]
  },
  {
    id: 2,
    question: "Finger is to Hand as Toe is to _____?",
    answer: "Foot",
    options: [
      "Hand",
      "Foot",
      "Arm",
      "Leg"
    ]
  },
  {
    id: 3,
    question: "If a cat is a mammal and all mammals have a backbone, does a cat have a backbone?",
    answer: "Yes",
    options: [
      "Yes",
      "No",
      "Sometimes",
      "Maybe"
    ]
  },

  {
    id: 4,
    question: "If a shirt costs $20 and is on sale for 25% off, how much will it cost?",
    answer: "15",
    options: [
      "10",
      "15",
      "18",
      "25"
    ]
  },

  {
    id: 5,
    question: "Which shape is the odd one out: square, triangle, circle, hexagon?",
    answer: "Circle",
    options: [
      "Square",
      "Triangle",
      "Circle",
      "Hexagon"
    ]
  },

  {
    id: 6,
    question: "Why do you think people need to sleep?",
    answer: "To rest and recharge",
    options: [
      "To have dreams",
      "To socialize",
      "To rest and recharge",
      "To exercise"
    ]
  },

  {
    id: 7,
    question: "Fill in the missing number: 8, 16, 24, __, 40.",
    answer: "32",
    options: [
      "28",
      "30",
      "32",
      "35"
    ]
  },


  {
    id: 8,
    question: "Solve for x: 2x + 5 = 15",
    answer: "x = 5",
    options: [
      "x = 3",
      "x = 4",
      "x = 5",
      "x = 6"
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

if (points==40){
  console.log("you are great")
}
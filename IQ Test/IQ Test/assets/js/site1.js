
let questions = [
  {
    id: 1,
    question: "What comes next in the sequence: 3, 6, 12, 24, __?",
    answer: "48",
    options: [
      "36",
      "48",
      "30",
      "42"
    ]
  },
  {
    id: 2,
    question: "Finger is to Hand as Toe is to _____.",
    answer: " Foot",
    options: [
      "Foot",
      "Leg",
      "Body",
      "Hand"
    ]
  },
  {
    id: 3,
    question: "If 4x + 7 = 31, what is the value of x?",
    answer: "6",
    options: [
      "6",
      "5",
      "4",
      "7"
    ]
  },

  {
    id: 4,
    question: "Why do you think the Earth has seasons?",
    answer: "Because of the tilt of the Earth's axis",
    options: [
      "Because of the distance from the Sun",
      "Because of the tilt of the Earth's axis",
      "Because of the Earth's rotation",
      "Because of the Moon's orbit"
    ]
  },

  {
    id: 5,
    question: "If all squares are rectangles and some rectangles are not circles, can we conclude that some squares are not circles?",
    answer: "Yes",
    options: [
      "Yes",
      "No",
      "It depends",
      "Not enough information"
    ]
  },

  {
    id: 6,
    question: "If 1/4 of a number is 5, what is the number?",
    answer: "20",
    options: [
      "10",
      "15",
      "20",
      "25"
    ]
  },

  {
    id: 7,
    question: "Which word in the dictionary is always spelled incorrectly?",
    answer: "Incorrectly",
    options: [
      "Correct",
      "NOt Correct",
      "Incorrectly",
      "WRong"
    ]
  },


  {
    id: 8,
    question: "If I drink, I die. If I eat, I’m fine. What am I?",
    answer: "Fire",
    options: [
      "Water",
      "Fire",
      "Air",
      "Poison"
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

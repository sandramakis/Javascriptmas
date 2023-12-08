"use strict";
// DAY 2
// ADD HOVER EFFECT WITH JS
// const container = document.querySelector(".container"),
//   buttonBorder = document.querySelector(".button-border");

// function addHover() {
//   const gradient1 = "#6a0d83";
//   const gradient2 = "#eeaf61";

//   const arr = [gradient1, gradient2];

//   //   get a random number from the array and switch the color
//   for (let i = 0; i < arr.length; i++) {
//     let randomColor = Math.floor(Math.random() * arr.length);

//     if ((randomColor = 1)) {
//       buttonBorder.style.background = `linear-gradient(115deg, ${arr[0]}, ${arr[1]}`;
//     } else return;
//   }
// }

// function removeHover() {
//   buttonBorder.style.background = `linear-gradient(115deg, #ee5d6c, #6a0d83)`;
// }

// buttonBorder.addEventListener("mouseover", addHover);
// buttonBorder.addEventListener("mouseout", removeHover);

// DAY 3: DIVIDE CANDY
function calcTotalCandies(children, candy) {
  /** Challenge:
   * Some children have got some pieces of candy. They
   * want to eat as much candy as they can but each
   * child must eat exactly the same amount. Determine
   * how many pieces of candy can be eaten altogether.
   * A piece of candy can not be split.
   *
   * Example:
   * Children: 3, Candies: 10
   * Each of the 3 children can eat 3 candies.
   * So the total number of candies that can be eaten
   * is 3*3 = 9. So the function calcTotalCandies should
   * log out 9.
   **/

  const totalCandiesEaten = candy - (candy % children);
  console.log(totalCandiesEaten);
}

calcTotalCandies(3, 10); // expected output: 9
calcTotalCandies(4, 20); // expected output: 20
calcTotalCandies(6, 25); // expected output: 24

// DAY 4
// USING AI to generate text (a Christmas joke)
// import { HfInference } from "npm:@huggingface/inference";
// import { HfInference } from "https://esm.sh/@huggingface/inference";

// const hf = new HfInference(process.env.HF_API_KEY);
const jokeDisplay = document.querySelector("#joke-display");

let open = false;

// document
//   .getElementById("window-container")
//   .addEventListener("click", function () {
//     /**
//      * 🎄 Challenge:
//      * 1. When clicked, the doors should open
//      *    to reveal a festive joke.
//      *
//      * 🎁 hint.md for help!
//      **/

//     setTimeout(function () {
//       (async () => {
//         const response = await hf.conversational({
//           //  model: 'facebook/blenderbot-400M-distill',
//           model: "Intel/neural-chat-7b-v3-1",
//           inputs: "Christmas joke generator",
//         });
//         console.log(response);

//         // const lines = response.generated_text.split('\n').slice(1);
//         // console.log(lines)

//         jokeDisplay.textContent = response.generated_text;
//       })();
//     }, 1000);

//     if (open) {
//       document.querySelector(".left-door").classList.add("open");
//       document.querySelector(".right-door").classList.add("open");
//       document.querySelector(".joke-display").classList.add("open");
//     } else {
//       document.querySelector(".left-door").classList.remove("open");
//       document.querySelector(".right-door").classList.remove("open");
//       document.querySelector(".joke-display").classList.remove("open");
//     }

//     open = !open;
//   });

// DAY 6: SECRET SANTA PAIR

const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"];

function shuffleArray(arr) {
  const shuffledArray = arr.slice();

  // loop through the initial array
  for (let i = arr.length - 1; i > 0; i--) {
    // get random index
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[i],
    ];
  }
  return shuffledArray;
}

function generateSecretSantaPairs(arr) {
  // Your code here

  const shuffledArray = shuffleArray(arr);
  console.log(shuffledArray);

  const result = {};

  // match each element in the shuffled array to one element in the original array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === shuffledArray[i]) {
      shuffledArray[i] = arr[i + 1];
    }
    result[arr[i]] = shuffledArray[i];
  }

  console.log(result);
  return result;
}

generateSecretSantaPairs(people);

/**
Example output:
{
    Alice: "Dan",
    Bob: "Ferdinand",
    Carly: "Ed",
    Dan: "Alice",
    Ed: "Ginny",
    Ferdinand: "Bob",
    Ginny: "Carly"
}
 */

// Add event listener for the form

const form = document.querySelector("form.get-pair-form");
const input = document.querySelector('input[type="text"]');
const ul = document.querySelector("ul.people");

const submitBtn = document.querySelector('input[type="button"]');
const displayPair = document.querySelector(".paired-people");

const names = [];
const results = {};

function submitForm(e) {
  if (input.value !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    ul.append(li);

    names.push(li.textContent);
  } else {
    alert("Please, input a name!");
  }

  input.value = "";
  e.preventDefault();
}

const displayPairUl = document.querySelector(".paired-people ul");
const pairPeople = () => {
  const li = document.createElement("li");

  if (names.length > 1) {
    // loop through the lists of people, and run a similar shuffled array ftn
    for (let i = 0; i < names.length; i++) {
      const initialInput = names[i];
      const shuffledNames = shuffleArray(names);
      console.log(shuffledNames[i]);

      console.log(shuffledNames[i]);
      if (initialInput === shuffledNames[i]) {
       [ shuffledNames[i]] = [initialInput[i + 1]];
      }

      const text = `${initialInput}: "${shuffledNames[i]}"`;
      displayPair.style.display = "block";
      li.textContent = text;
      displayPairUl.append(li);
    }
  } else {
    console.log("error");
  }
};

form.addEventListener("submit", submitForm);
submitBtn.addEventListener("click", pairPeople);

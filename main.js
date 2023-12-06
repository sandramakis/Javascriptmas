"use strict";
// DAY 2
// ADD HOVER EFFECT WITH JS
const container = document.querySelector(".container"),
  buttonBorder = document.querySelector(".button-border");

function addHover() {
  const gradient1 = "#6a0d83";
  const gradient2 = "#eeaf61";

  const arr = [gradient1, gradient2];

  //   get a random number from the array and switch the color
  for (let i = 0; i < arr.length; i++) {
    let randomColor = Math.floor(Math.random() * arr.length);

    if ((randomColor = 1)) {
      buttonBorder.style.background = `linear-gradient(115deg, ${arr[0]}, ${arr[1]}`;
    } else return;
  }
}

function removeHover() {
  buttonBorder.style.background = `linear-gradient(115deg, #ee5d6c, #6a0d83)`;
}

buttonBorder.addEventListener("mouseover", addHover);
buttonBorder.addEventListener("mouseout", removeHover);

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
import { HfInference } from "https://esm.sh/@huggingface/inference";

const hf = new HfInference(process.env.HF_API_KEY);
const jokeDisplay = document.querySelector("#joke-display");

let open = false;

document
  .getElementById("window-container")
  .addEventListener("click", function () {
    /**
     * 🎄 Challenge:
     * 1. When clicked, the doors should open
     *    to reveal a festive joke.
     *
     * 🎁 hint.md for help!
     **/

    setTimeout(function () {
      (async () => {
        const response = await hf.conversational({
          //  model: 'facebook/blenderbot-400M-distill',
          model: "Intel/neural-chat-7b-v3-1",
          inputs: "Christmas joke generator",
        });
        console.log(response);

        // const lines = response.generated_text.split('\n').slice(1);
        // console.log(lines)

        jokeDisplay.textContent = response.generated_text;
      })();
    }, 1000);

    if (open) {
      document.querySelector(".left-door").classList.add("open");
      document.querySelector(".right-door").classList.add("open");
      document.querySelector(".joke-display").classList.add("open");
    } else {
      document.querySelector(".left-door").classList.remove("open");
      document.querySelector(".right-door").classList.remove("open");
      document.querySelector(".joke-display").classList.remove("open");
    }

    open = !open;
  });

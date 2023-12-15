// node_modules / dotenv.config();

("use strict");
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
// import { HfInference } from "https://esm.sh/@huggingface/inference";

// const hf = new HfInference(process.env.HF_API_KEY);
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

  const result = {};

  // match each element in the shuffled array to one element in the original array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === shuffledArray[i]) {
      shuffledArray[i] = arr[i + 1];
    }
    result[arr[i]] = shuffledArray[i];
  }

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
// const results = {};

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
        [shuffledNames[i]] = [initialInput[i + 1]];
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

// DAY 9; AI CHRISTMAS CARD GENERATOR
// To visit the code on DAY 9, use the link on the HTML

// DAY 10: Rockin' Around

const player = document.getElementById("player");

function playSong(videoId) {
  // Challenge: Add code here to make the youtube player play the new YouTube song

  const videoURL = `https://www.youtube.com/embed/${videoId}`;
  player.src = videoURL;
}

// DAY 12: SANTA'S GIFT SORTER
const xmasGifts = [
  "guitar 🎸",
  "skates ⛸",
  "bear 🧸",
  "magnet 🧲",
  "laptop 💻",
  "games console 🎮 ",
  "jewellery 💍",
  "kite 🪁",
];

const sortAlphabetically = document.querySelector("button.alphabetically");
const sortReverseAlphabetically = document.querySelector(
  "button.reverse-alphabetically"
);
const display = document.querySelector("div.display");

/**
 * Challenge:
 * 1. Sort the array twice. Alphabetically and reverse alphabetically.
 **/

// Sort A-Z
sortAlphabetically.addEventListener(
  "click",
  function () {
    const sortedAZ = xmasGifts.sort();
    console.log("A-Z: ", sortedAZ);

    display.style.background = "beige";
    const ol = document.createElement("ol");
    display.append(ol);

    xmasGifts.forEach((gift) => {
      const li = document.createElement("li");
      li.innerText = gift;

      ol.append(li);
    });
  },
  { once: true }
);
//["bear 🧸", "games console 🎮 ", "guitar 🎸", "jewellery 💍", "kite 🪁", "laptop 💻", "scarf 🧣", "skates ⛸"]

// Sort Z-A
sortReverseAlphabetically.addEventListener(
  "click",
  function () {
    display.style.background = "beige";

    const sortedZA = xmasGifts.sort((a, b) => {
      return a > b ? -1 : 1;
    });
    console.log("Z-A: ", sortedZA);

    const ol = document.createElement("ol");
    display.append(ol);

    sortedZA.forEach((gift) => {
      const li = document.createElement("li");
      li.innerText = gift;

      ol.append(li);
    });
  },
  { once: true }
);

//["skates ⛸", "scarf 🧣", "laptop 💻", "kite 🪁", "jewellery 💍", "guitar 🎸", "games console 🎮 ", "bear 🧸"

// DAY 13- Christmas Dinner Picker

const numberOfGuests = document.querySelector("input[type=number]");
const isVegeterian = document.querySelector("input[type=checkbox]");

const dinnerForm = document.querySelector(".day-13-section form"),
  calculateBtn = document.querySelector("#btn"),
  retryBtn = document.querySelector("#retry");
const food = document.querySelector("span#food");

let dinner;

// VEGAN CHRISTMAS DINNER
const veganFoods = {
  one: [
    "Pear and Greens Salad",
    "Vegetarian and Vegan Roasted Chestnut Soup",
    "Smoked Salmon Crostini",
    "Brocolli Quinoa Cake",
    "Spaghetti squash with Chard, Walnuts and Chevre",
    "Butternut Lasagna with Mushrooms and Sage",
    "Italian Baked Beans and Greens",
    "BUTTERNUT LASAGNA",
    "MUSHROOM RISOTTO WITH FRIZZLED LEEKS",
  ],

  twoOrMore: [
    "Classic Holiday Green Bean Casserole",
    "Hasselback Butternut Squash",
    "Bread Stuffing",
    "Cheddar Cheese Scalloped Potatoes",
    "Kidney Bean Burger",
    "Quick Bean Burritos",
    "Creamy Mac and Cheese",
    "ORECCHIETTE PASTA WITH BROCCOLI SAUCE",
  ],

  fiveOrMore: [
    "Creamed Spinach With Parmesan Cheese",
    "ALOO GOBI (INDIAN-SPICED POTATOES & CAULIFLOWER)",
    "GOLDEN CAULIFLOWER DAL W/ RED LENTILS, COCONUT AND SPINACH",
    "EGGPLANT LASAGNA",
    "VEGGIE POT PIE WITH ROASTED BUTTERNUT, LENTILS AND KALE",
    "INDIAN SHEPHERD’S PIE",
    "Sweet Potato Curry",
    "Healthy Vegan Lasagna",
    "TOFU STIR-FRY WITH BROCCOLINI AND MUSHROOMS",
  ],
};

// NON-VEGAN CHRISTMAS DINNER
const nonveganFoods = {
  one: [
    "Chicken and mushroom wellington",
    "Gochujang-glazed celeriac with black beans & green salsa",
    "No Yeast Dinner Rolls",
    "Apple Cranberry Cobbler",
    "Classic Sugar Cookies",
    "Orange-stuffed Christmas duck",
    "Gingerbread With Lemon Glaze",
    "Homemade Mashed Potatoes",
  ],

  twoOrMore: [
    "Roast guinea fowl with chestnut, sage & lemon stuffing",
    "Golden-glazed carrot, mushroom & hazelnut tart",
    "One-pot partridge with drunken potatoes",
    "Beef fillet, Marmite mash & roasted cabbage",
    "Brown butter-poached halibut with celeriac purée & caper crumbs",
    "Nonalcoholic Eggnog",
    "Glazed ham, carrots, Brussels sprouts, potatoes au gratin",
    "Roasted Brussels Sprouts, Butternut Squash, and Cranberries",
  ],

  fiveOrMore: [
    "Simple Orange-Glazed Pork Roast",
    "French Baked Ham With Spiced Apples and Pears",
    "Roasted Rack of Lamb",
    "Instant Pot Coq au Vin",
    "Maple-Glazed Roasted Parsnips",
    "Honey-Glazed Baby Carrots",
    "Baked Corn Casserole",
  ],
};

function pickDinner(e) {
  e.preventDefault();

  // make sure there's no empty value
  if (numberOfGuests.value !== "") {
    food.textContent = "";

    // check for vegeterians and the number pf guests
    if (isVegeterian.checked && numberOfGuests.value == 1) {
      dinner = Math.floor(Math.random() * veganFoods.one.length);
      food.innerText = veganFoods.one[dinner];
    } else if (isVegeterian.checked && numberOfGuests.value <= 4) {
      dinner = Math.floor(Math.random() * veganFoods.twoOrMore.length);
      food.innerText = veganFoods.twoOrMore[dinner];
      3;
    } else {
      dinner = Math.floor(Math.random() * veganFoods.fiveOrMore.length);
      food.innerText = veganFoods.fiveOrMore[dinner];
    }

    // non-vegetarians
    if (!isVegeterian.checked && numberOfGuests.value == 1) {
      dinner = Math.floor(Math.random() * nonveganFoods.one.length);
      food.innerText = nonveganFoods.one[dinner];
    } else if (!isVegeterian.checked && numberOfGuests.value <= 4) {
      dinner = Math.floor(Math.random() * nonveganFoods.twoOrMore.length);
      food.innerText = nonveganFoods.twoOrMore[dinner];
    } else {
      dinner = Math.floor(Math.random() * nonveganFoods.fiveOrMore.length);
      food.innerText = nonveganFoods.fiveOrMore[dinner];
    }
  } else {
    alert("Please, input the number of guests for the dinner");
  }
}

dinnerForm.addEventListener("submit", pickDinner);
calculateBtn.addEventListener("click", pickDinner);
retryBtn.addEventListener("click", pickDinner);

// DAY 14- Loely Elf
const elf = document.getElementById("elf");
const duplicateBtn = document.querySelector(".day-14-section #btn");
const elfHangout = document.querySelector(".elf-hangout-zone");

let totalcount = 1;

function duplicateElf() {
  /** Challenge:
    - Write a function to duplicate the elf when the button is clicked.
    - See index.css for optional styling challenges.
  **/

  if (totalcount <= 100 && elfHangout.childElementCount <= 100) {
    for (let i = 0; i <= totalcount; i++) {
      const clonedElf = elf.cloneNode(true);
      elfHangout.appendChild(clonedElf);
    }
  } else {
    alert("Max of 100 reached!");
  }

  totalcount * 2;
}

/** Stretch goals:
  - Write a function to give the elves some tools, or a cup of tea!
  - Limit the total number of elves to 100.
**/

duplicateBtn.addEventListener("click", duplicateElf);

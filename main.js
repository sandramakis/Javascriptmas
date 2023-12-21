// node_modules / dotenv.config();

"use strict";
// DAY 2
// ADD HOVER EFFECT WITH JS
const container = document.querySelector(".button-container"),
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

// DAY 15: ARCHERY TARGET
const rings = document.querySelector(".rings");

const displayClicked = document.querySelector("p.display-clicked");

rings.addEventListener(
  "click",
  function (e) {
    console.log(e.target);

    if (e.target === document.querySelector(".ring-1")) {
      displayClicked.textContent = "You hit the black ring";
    } else if (e.target === document.querySelector(".ring-2")) {
      displayClicked.textContent = "You hit the blue ring";
    } else if (e.target === document.querySelector(".ring-3")) {
      displayClicked.textContent = "You hit the red ring";
    } else if (e.target === document.querySelector(".bullseye")) {
      displayClicked.textContent = "You hit the BULLS EYE!";
    }
  },
  { capture: false }
);

// DAY 16: Naughty list, nice list
const niceListEL = document.querySelector(".nice-list");
const naughtyListEl = document.querySelector(".naughty-list");
const sortBtn = document.querySelector(".day-16-section #btn");

const addNewName = document.querySelector(".day-16-section input[type=text]");

const sorteesArr = [
  {
    name: "David",
    hasBeenGood: false,
  },
  {
    name: "Del",
    hasBeenGood: true,
  },
  {
    name: "Valerie",
    hasBeenGood: false,
  },
  {
    name: "Astrid",
    hasBeenGood: true,
  },
];

const naughtyList = sorteesArr.filter((feeling) => {
  if (feeling.hasBeenGood === false) {
    return feeling.name;
  }
});

const niceList = sorteesArr.filter((feeling) => {
  if (feeling.hasBeenGood === true) {
    return feeling.name;
  }
});

const sortLists = () => {
  // display naughty list
  for (let i = 0; i < naughtyList.length; i++) {
    const li = document.createElement("li");
    const names = naughtyList[i].name;
    li.textContent = names;
    document.querySelector("#naughty-list").append(li);
  }

  // display nice list
  for (let i = 0; i < niceList.length; i++) {
    const li = document.createElement("li");
    const names = niceList[i].name;
    li.textContent = names;
    document.querySelector("#nice-list").append(li);
  }
};

const addNewNaughty = () => {
  if (addNewName.value !== "") {
    const li = document.createElement("li");
    li.textContent = addNewName.value;
    document.querySelector("#naughty-list").append(li);
  } else alert("Please, input a name!");
};

const addNewNice = () => {
  if (addNewName.value !== "") {
    const li = document.createElement("li");
    li.textContent = addNewName.value;
    document.querySelector("#nice-list").append(li);
  } else alert("Please, input a name!");
};

sortBtn.addEventListener("click", sortLists, { once: true });
document.querySelector("#add-naughty").addEventListener("click", addNewNaughty);
document.querySelector("#add-nice").addEventListener("click", addNewNice);

// DAY 18- Debug Jingle Words
const word = "santa";
const wordArr = word.split("");
const wordDisplay = document.getElementById("word-display");
document.addEventListener("submit", handleGuess);

function renderSpaces() {
  const wordHtml = wordArr.map(() => {
    return `<span class="letter">-</span>`;
  });
  wordDisplay.innerHTML = wordHtml.join("");
}
renderSpaces();

function renderGuess(arr) {
  const wordHtml = arr.map((letter) => {
    return `<span class="letter">${letter}</span>`;
  });
  wordDisplay.innerHTML = wordHtml.join("");
}

function handleGuess(e) {
  e.preventDefault();
  /**
   * Debug Challenge:
   * 1. There are loads of problems with the
   *    code below. Find them and fix them!
   **/

  /* bugs begin 🦠*/
  let currentState = [];
  let input = document.getElementById("users-input");
  let guess = input.id;
  const guessArr = guess.split(" ");
  wordArr.foreach((letter) => {
    if (letter === guessArr[""]) {
      currentState.push(letter);
    } else {
      currentState.push(letter);
    }
  });
  /* bugs end 🦠*/
  renderGuess(currentState);
  checkWin(guess);
  input.value = "";
}

// function checkWin(guess) {
//   if (word === guess) {
//     const jsConfetti = new JSConfetti();
//     jsConfetti.addConfetti({
//       emojis: ["🧑‍🎄", "🎅"],
//       emojiSize: 50,
//       confettiNumber: 60,
//       confettiRadius: 6,
//     });
//     jsConfetti.addConfetti();
//   }
// }

// Day 20: Save Santa
const dangerArray = [
  ["🎅", "👺"],
  [
    ["🎅", "🦁"],
    ["👹", "🎅"],
  ],
  [
    [
      ["🎅", "🐻"],
      ["🧌", "🎅"],
    ],
    [
      ["🐯", "🎅"],
      ["🎅", "😈"],
    ],
  ],
];

function saveSanta(arr) {
  // Your code here

  const flattenArr = arr.flat(Infinity);
  const regex =
    /[\u{1F47A}\u{1F981}\u{1F42F}\u{1F608}\u{1F43B}\u{1F9D8}\u{1F479}]/iu;

  const filteredEmojis = flattenArr.filter((emoji) => !regex.test(emoji));

  document.querySelector(
    "section.day-20-section p.initial"
  ).textContent = `Initial Array: [ ${flattenArr}]`;
  document.querySelector(
    "section.day-20-section p.current"
  ).textContent = `Better:  ${filteredEmojis}`;
}

saveSanta(dangerArray);
// Check the returned results from saveSanta()

// DAY 21: Expand search bar
const searchBar = document.querySelector(".day-21-section input[type=search]");

searchBar.addEventListener("click", function () {
  this.classList.add("expand");
  this.style.animation = "ease-out 2s";
  this.placeholder = "";
});

searchBar.addEventListener("mouseout", function () {
  this.classList.remove("expand");
  this.placeholder = "Search...";
});

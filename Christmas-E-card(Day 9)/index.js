import { HfInference } from "https://esm.sh/@huggingface/inference";

const dialogModal = document.getElementById("dialog-modal");
const imageContainer = document.getElementById("image-container");

/** show dialog on load **/
dialogModal.show();

/**
 * 🎄 Challenge:
 * 1. When a user hits submit, dialogModal
 *    should be hidden.
 * 2. Use the inputted text to generate an image
 *    for the e-card using an AI model.
 *    ⚠️ Make sure the image is square.
 * 3. Render the image to imageContainer.
 *
 * 🎁 hint.md for help!
 **/

const hf = new HfInference("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");

const input = document.querySelector("#user-input");
const sendBtn = document.querySelector(".submit-btn");
console.log(input, sendBtn);

// const result = await hf.textToImage({
//   inputs: `${input.value}`,
//   model: "stabilityai/stable-diffusion-2",
//   parameters: {
//     negative_prompt: "blurry",
//   },
// });

const getInputValue = (e) => {
  e.preventDefault();
  dialogModal.close();
  //   dialogModal.style.display = "hidden";

  try {
    if (input.value !== "") {
      document.querySelector(".placeholder-img").style.display = "none";

      //   convert the blob object into a url and pass it as it's src
      const img = document.createElement("img");

      const imageURL = URL.createObjectURL(result);
      img.src = imageURL;

      imageContainer.append(img);
    } else {
      alert("Please input a valid description!");
      document.querySelector(".placeholder-img").style.display = "block";
      dialogModal.show();
      return;
    }
  } catch (error) {
    console.error(error);
  }
};

sendBtn.addEventListener("click", getInputValue);

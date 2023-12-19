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
const input = document.querySelector("input#user-input");
const sendBtn = document.querySelector(".submit-btn");
const displayProgessBar = document.querySelector(".progress-bar-container");

const getInputValue = async (e) => {
  e.preventDefault();
  dialogModal.close();

  // try {
  if (input.value !== "") {
    setTimeout(() => {}, 2000);
    const result = await hf.textToImage({
      inputs: input.value,
      model: "stabilityai/stable-diffusion-2",
      parameters: {
        negative_prompt: "blurry",
      },
    });

    //   convert the blob object into a url and pass it as it's src
    const img = document.createElement("img");

    const imageURL = URL.createObjectURL(result);
    img.src = imageURL;

    imageContainer.append(img);
    document.querySelector(".placeholder-img").style.display = "none";

    setTimeout(() => {
      displayProgessBar.classList.add("displayAnimation");
    }, 2000);
  } else {
    alert("Please input a valid description!");
    document.querySelector(".placeholder-img").style.display = "block";
    dialogModal.show();
    return;
  }
};
//   catch (error) {
//     console.error(error);
//   }
// };

sendBtn.addEventListener("click", getInputValue);

// Day 18: AI Alt Text Generator

async function generateImage(imageToGenerate) {
  const response = await hf.textToImage({
    inputs: imageToGenerate,
    model: "stabilityai/stable-diffusion-2",
  });

  const imageUrl = URL.createObjectURL(response);

  generateAltText(imageUrl);

  setTimeout(() => {
    // revoke URL after use
    URL.revokeObjectURL(imageUrl);
  }, 10000);
}

async function generateAltText(imageUrl) {
  /**
   * 🎄 Challenge:
   * 1. Use AI to generate alt text for the
   *    image provided by generateImage().
   * 2. Pass the alt text to renderImage()
   *    as a parameter.
   *
   * 🎁 hint.md for help!
   **/

  const response = await fetch(imageUrl);
  const imageBlob = await response.blob();

  const result = await hf.imageToText({
    data: imageBlob,
    model: "nlpconnect/vit-gpt2-image-captioning",
  });

  const altText = result.generated_text;
  renderImage(imageUrl, altText);
}

generateAltText(generateImage(input.value));

function renderImage(imageUrl, altText) {
  console.log(altText);

  const imageContainer = document.getElementById("image-container");

  imageContainer.innerHTML = "";
  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = altText;
  imageContainer.appendChild(image);
}

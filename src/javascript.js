function displayDestination(response) {
  new Typewriter("#destination", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generateDestination(event) {
  event.preventDefault();
  let instructions = document.querySelector("#prompt-instructions");
  let apiKey = "bbco0f50t952db4519a3613cfbc4bfb3";
  let prompt = `User instructions: Generate a Travel destination that is ${instructions.value} `;
  let context =
    "You are a knowledgeable travel expert and love to provide travel destination recommendations. You should generate a travel destination and three short facts about why this destination is good to visit in BASIC HTML and separate each line with a <br/>. You should always have the question of why it would be good to visit the destination before the three short facts, inside a <strong> element. The name of the destination should be the title inside an <h2> element. Make sure to follow the user instructions. Sign the recommendation with 'SheCodes AI' inside a <strong> element AT THE END of the recommendation and NOT be at the beginning. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poem = document.querySelector("#destination");
  destination.classList.remove("destination-hidden");
  destination.innerHTML = `Generating a travel destination that is <strong>${instructions.value}</strong>`;

  axios.get(apiUrl).then(displayDestination);
}

let formElement = document.querySelector("#destination-generator");
formElement.addEventListener("submit", generateDestination);

function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructions = document.querySelector("#prompt-instructions");
  let apiKey = "bbco0f50t952db4519a3613cfbc4bfb3";
  let prompt = `User instructions: Generate a Travel poem about ${instructions.value} `;
  let context =
    "You are a romantic poem expert and love to write short poems. You should generate a poem of four lines in BASIC HTML and separate each line with a <br/>. Do not give the poem a title. Make sure to follow the user instructions. Sign the poem with 'SheCodes AI' inside a <strong> element AT THE END of the poem and NOT be at the beginning.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let formElement = document.querySelector("#poem-generator");
formElement.addEventListener("submit", generatePoem);

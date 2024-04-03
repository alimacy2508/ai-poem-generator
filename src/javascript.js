function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Your generated poem here",
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

let formElement = document.querySelector("#poem-generator");
formElement.addEventListener("submit", generatePoem);

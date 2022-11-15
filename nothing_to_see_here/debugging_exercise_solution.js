"use strict";

const imageElement = document.getElementById("image"); // Wrong selector name

let url;

const getUrl = async function (searchQuery) {
  const response = await fetch(
    `https://source.unsplash.com/random/500×300/?${searchQuery}` // Typo in URL
  );
  url = await response.url;
};

const setImage = function (imageSubject) {
  imageElement.src = `${url}`;
  imageElement.alt = `${imageSubject}`;
  imageElement.style["display"] = "block"; // Wrong style property
};

const clickHandler = async function (event) {
  // event being set to null for no reason

  try {
    await getUrl(event.target.id);
  } catch (error) {
    console.log("Something went wrong when fetching the image:", error);
  } finally {
    setImage(event.target.id);
  }
};

const allButtons = document.querySelectorAll("button");
for (let button of allButtons) {
  // Missing closing parenthesis
  button.addEventListener("click", clickHandler); // Wrong handler name
}

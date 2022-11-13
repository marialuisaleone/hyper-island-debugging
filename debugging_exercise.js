"use strict";

const imageElement = document.getElementsById("image");

let url;

const getUrl = async function (searchQuery) {
  const response = await fetch(
    `https://source.unsplush.com/random/500×300/?${searchQuery}`
  );
  url = await response.url;
};

const setImage = function (imageSubject) {
  imageElement.src = `${url}`;
  imageElement.alt = `${imageSubject}`;
  imageElement.style["visibility"] = "block";
};

const clickHandler = async function (event) {
  event = null;

  try {
    await getUrl(event.target.id);
  } catch (error) {
    console.log("Something went wrong when fetching the image:", error);
  } finally {
    setImage(event.target.id);
  }
};

const allButtons = document.querySelectorAll("button");
for (let button of allButtons {
  button.addEventListener("click", klickHandler);
}

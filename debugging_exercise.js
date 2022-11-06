"use strict";

const imageElement = document.getElementsById("image");

let url;

const getUrl = async (searchQuery) => {
  const response = await fetch(
    `https://source.unsplush.com/random/500×300/?${searchQuery}`
  );
  url = await response.url;
};

const setImage = (imageSubject) => {
  imageElement.src = `${url}`;
  imageElement.alt = `${imageSubject}`;
  imageElement.style["visibility"] = "block";
};

const clickHandler = async (e) => {
  e = null;
  try {
    await getUrl(e.target.id);
  } finally {
    setImage(e.target.id);
  }
};

const allButtons = Array.from(document.getElementsByTagName("button");
allButtons.forEach((button) => button.addEventListener("click", klickHandler);

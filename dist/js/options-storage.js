// Functions for setting and getting user preferences from localstorage

// set the title of the homepage
function setTitle(title) {
  localStorage.setItem("title", title);
}

// get the homepage title
function getTitle() {}

// get page title from input
function getTitleInput() {
  return document.getElementById("titleInput")?.value;
}

// set the listener on the button
function setButtonListener() {
  const btn = document.getElementById("logTitleButton");
  console.log("found button", btn);
  btn.onclick = () => {
    const val = getTitleInput();
    console.log(`value: ${val}`);
  };
}

setButtonListener();

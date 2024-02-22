// Functions for setting and getting user preferences from localstorage

// set the title of the homepage from form value
function setTitle() {
  const title = document.getElementById("titleInput")?.value || "";
  console.log(`=== debug: set title: `, title);
  localStorage.setItem("title", title);
}

// get the homepage title from local storage
function getTitle() {
  const title = localStorage.getItem("title");
  console.log(`=== debug: got title: `, title);
}

// toggle visibility of the title editor form
function toggleFormVisible() {
  const el = document.getElementById("title-editor-form");
  el.classList.toggle("hidden");
}
// set the listener on the button
function setButtonListeners() {
  // Add editor button onclick handler
  document.getElementById("title-editor-submit").onclick = setTitle;

  // Add toggle visibility button handler
  document.getElementById("btn-toggle-editor").onclick = toggleFormVisible;
}

setButtonListeners();

// Functions for setting and getting user preferences from localstorage

// set the title of the homepage from form value
function setTitle() {
  const title = getTitle();
  console.log(`=== debug: set title: `, title);

  // Store to local storage
  storeTitle(title);

  // Replace the title on the page
  replacePageTitle(title);
}

// Replace the main title of the page
const replacePageTitle = (title) => {
  document.getElementById("page-title").innerHTML = title;
};

// Store title to localstorage
const storeTitle = (title) => localStorage.setItem("title", title);

// get the homepage title from local storage
const getTitle = () => localStorage.getItem("title") || "";

// toggle visibility of the title editor form
function toggleFormVisible() {
  document.getElementById("title-editor-form")?.classList.toggle("hidden");
}

// Set the input form text
const setInputFormText = (title) =>
  (document.getElementById("titleInput").value = title);

// Set button actions for editor form submit, toggle visibility
function setButtonListeners() {
  const title = getTitle() || "Example Placeholder Title";

  // Set placeholder values
  setInputFormText(title);
  replacePageTitle(title);

  // Add button listeners
  document.getElementById("title-editor-submit").onclick = setTitle;
  document.getElementById("btn-toggle-editor").onclick = toggleFormVisible;
}

setButtonListeners();

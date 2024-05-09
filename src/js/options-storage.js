// Functions for setting and getting user preferences from localstorage

// set the title of the homepage from form value
function setAndStoreTitle() {
  const title = document.getElementById('titleInput').value;

  if (!!title) {
    // Store to local storage
    localStorage.setItem('title', title);

    // Replace the title on the page
    replacePageTitle(title);
  }

  // Hide the editor form
  document.getElementById('title-editor-form')?.classList.add('hidden');
}

// Replace the main title of the page
const replacePageTitle = (title) => {
  document.getElementById('page-title').innerHTML = title;
};

// get the homepage title from local storage
const getTitle = () => localStorage.getItem('title') || '';

// toggle visibility of the title editor form
function toggleFormVisible() {
  const editorDiv = document.getElementById('title-editor-form');
  if (editorDiv.classList.contains('hidden')) {
    // Show and select the form content
    editorDiv.classList.remove('hidden');
    document.getElementById('titleInput').select();
  } else {
    editorDiv.classList.add('hidden'); // hide
  }
}

// Set the input form text
const setInputFormText = (title) =>
  (document.getElementById('titleInput').value = title);

// Set button actions for editor form submit, toggle visibility
function setButtonListeners() {
  const title = getTitle() || 'Welcome to your Example Page';

  // Set placeholder values
  setInputFormText(title);
  replacePageTitle(title);

  // Add button listeners
  document.getElementById('title-editor-submit').onclick = setAndStoreTitle;
  document.getElementById('btn-toggle-edit-title').onclick = toggleFormVisible;
}

setButtonListeners();

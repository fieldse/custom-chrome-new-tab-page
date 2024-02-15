const DEFAULT_SEARCH_URL = "https:///www.duckduckgo.com/?q=";

// handler function for the search form
function search() {
  // Join the search form content by '+' characters
  const q = toQueryString(getFormContent());
  if (!q.length) {
    return;
  }

  // Open the search url
  location.href = DEFAULT_SEARCH_URL + q;
}

// Join content string with "+"
const toQueryString = (val) => {
  if (val) {
    return val
      .split(" ")
      .map((x) => x.trim())
      .join("+");
  }
  return "";
};

// Get the content of the search input field
function getFormContent() {
  const el = document.querySelector("#input-search");
  return el?.value || "";
}

// Log the input form content
function debugLogInput() {
  const val = document.querySelector("#input-search").value;
  console.log("=== debug: value:", val);
}

// Add listeners for search form
function addListeners() {
  document.querySelector("#search-form").addEventListener("submit", (event) => {
    event.preventDefault();
    search();
  });
}

// Add listeners on page load
window.onload = () => addListeners();

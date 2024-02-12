const DEFAULT_SEARCH_URL = 'https:///www.duckduckgo.com/?q=';

// handler function for the search form
function search() {
  const el = document.querySelector("#input-search")
  const val = el.value;

  // Join the search query string by '+' characters
  const asQueryString = val && val.split(" ").map((x) => x.trim()).join("+") || "";
  if (!asQueryString.length) {
    return
  }

  // Open the search url
  location.href = DEFAULT_SEARCH_URL + asQueryString;
}

// Add listeners for search form
function addListeners() {
  document.querySelector('#search-form').addEventListener('submit', (event) => {
    event.preventDefault();
    search();
  });
}

// handler function for the search form
function search() {
  const el = document.getElementById("#search-form")
  const val = el.value;
  console.log(`== debug: got element: `, el)
  console.log(`== debug: value: `, val)
}

// Add listeners for search form
function addListeners() {
  document.querySelector('#search-form').addEventListener('submit', (event) => {
    event.preventDefault();
    search();
  });
}

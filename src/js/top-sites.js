// Functions for setting the user's favorite top sites.

const DEFAULT_TOP_SITES = [
  'https://duckduckgo.com',
  'https://dev.to/',
  'https://www.hackthebox.com',
  'https://github.com',
  'https://en.wikipedia.org',
  'https://nytimes.com',
  'https://news.ycombinator.com',
  'https://unsplash.com',
];

// Return an array of the store top sites;
// If empty, returns the default sites.
function getTopSites() {
  const sites = JSON.parse(localStorage.getItem('topSites')) || [];
  return sites.length ? sites : DEFAULT_TOP_SITES;
}

// Append a url to the top sites store
function addTopSite(url) {
  // TODO - sanitize the input
  url = cleanUrl(url);
  if (!url.length) {
    console.error('invalid url');
    return;
  }
  var sites = getTopSites();
  sites.push(url);

  // Store
  try {
    localStorage.setItem('topSites', JSON.stringify(sites));
    console.log('stored site');
  } catch (err) {
    console.error('error storing site:', err);
  }
}

// Clean up a url for storing to top sites
function cleanUrl(url) {
  if (!url || !url.trim().length) {
    return '';
  }

  // Validate -- ensure no weird characters
  // TODO - properly sanitize / HTML escape this
  url = url.trim();
  if (!url.match(/[^a-zA-Z0-9+?%\/:.-]/)) {
    console.error('invalid url');
    return;
  }

  // Ensure it starts with an http(s)
  if (!url.startsWith('http')) {
    url = 'https://' + url;
  }
  return url;
}

// Create a new top sites list item as HTML string
const topSiteEl = (url) =>
  `<li class="my-3"><a class="py-1 px-2" href="${url}">${url}</a></li>`;

// Generate a pair of edit buttons to update/delete a top site item
const editButtons = (url) => {
  const span = document.createElement('span');

  // Save button
  const btnSave = document.createElement('button');
  btnSave.textContent = 'Save';
  btnSave.addEventListener('click', () => {
    console.log(`placeholder: save top site: ${url}`);
  });

  // Delete button
  const btnDelete = document.createElement('button');
  btnDelete.textContent = 'Delete';
  btnDelete.addEventListener('click', () => {
    console.log(`placeholder: delete top site: ${url}`);
  });

  span.append(btnSave, btnDelete);
  return span;
};

// Generate an edit form item for a single top-site row
const editSiteRow = (url) => {
  const span = document.createElement('span');
  const input = document.createElement('input');
  input.type = 'text';
  input.value = url;
  const buttons = editButtons();
  span.append(input, buttons);
  return span;
};

// Generate rows for the edit top sites form
function generateEditForm() {
  console.log('== debug: generating edit site form rows');

  // Get the sites list from storage
  const urls = getTopSites();

  // Generate edit buttons and form items
  const rows = urls.map((url) => editSiteRow(url));

  // Find the root form and add the edit form
  const el = document.getElementById('form-edit-top-sites');
  console.log(`== debug: found form element: ${el}`);
  el.replaceChildren(rows);
}

// Append a new list item element to the top sites list
function insertTopSiteItem(url) {
  addTopSite(url);
  populateTopSitesList();
}

// Populate the top-sites list with content
function populateTopSitesList() {
  const urls = getTopSites();
  const ul = document.getElementById('top-sites');
  const items = urls.map((s) => topSiteEl(s));
  ul.innerHTML = items.join('');
}

// Toggle visibility of edit top-sites form
function toggleTopSitesEditForm() {
  const form = document.getElementById('form-edit-top-sites');
  const btn = document.getElementById('btn-toggle-edit-top-sites');

  // Toggle visibility of edit form and populate it
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    generateEditForm();
    btn.innerHTML = 'done';
  } else {
    form.classList.add('hidden');
    form.replaceChildren();
    btn.innerHTML = 'edit';
  }
}

// Add onclick function for buttons
function addButtonListeners() {
  document
    .querySelector('#btn-toggle-edit-top-sites')
    .addEventListener('submit', (event) => {
      event.preventDefault();
      toggleTopSitesEditForm();
    });
}
// Populate the top-sites list and add button listeners on page load
function onload() {
  populateTopSitesList();
  addButtonListeners();
}

onload();

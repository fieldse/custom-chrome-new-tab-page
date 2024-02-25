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

// Populate the top-sites list on page load
populateTopSitesList();

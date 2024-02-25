// Functions for setting the user's favorite top sites.

const DEFAULT_TOP_SITES = [
  "https://duckduckgo.com",
  "https://dev.to/",
  "https://www.hackthebox.com",
  "https://github.com",
  "https://en.wikipedia.org",
  "https://nytimes.com",
  "https://news.ycombinator.com",
  "https://unsplash.com",
];

// Return an array of the store top sites;
// If empty, returns the default sites.
function getTopSites() {
  const sites = JSON.parse(localStorage.getItem("topSites")) || [];
  return sites.length ? sites : DEFAULT_TOP_SITES;
}

// Add a site to the top sites store
function addTopSite(url) {
  // TODO - sanitize the input
  url = cleanUrl(url);
  if (!url.length) {
    console.error("invalid url");
    return;
  }
  var sites = getTopSites();
  sites.push(url);

  // Store
  try {
    localStorage.setItem("topSites", JSON.stringify(sites));
    console.log("stored site");
  } catch (err) {
    console.error("error storing site:", err);
  }
}

// Clean up a url for storing to top sites
function cleanUrl(url) {
  if (!url || !url.trim().length) {
    return "";
  }

  // Validate -- ensure no weird characters
  // TODO - properly sanitize / HTML escape this
  url = url.trim();
  if (!url.match(/[^a-zA-Z0-9+?%\/:.-]/)) {
    console.error("invalid url");
    return;
  }

  // Ensure it starts with an http(s)
  if (!url.startsWith("http")) {
    url = "https://" + url;
  }
  return url;
}

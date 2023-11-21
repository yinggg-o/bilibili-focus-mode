// content.js
function hideUnwantedContent() {
  // Define the selector for the dropdown banner
  var dropdownBannerSelector = '#your-dropdown-banner-id'; // Replace with your actual selector

  // Hide the dropdown banner
  var dropdownBanner = document.querySelector(dropdownBannerSelector);
  if (dropdownBanner) {
    dropdownBanner.style.display = 'none';
  }

  // Define the selectors for unwanted feeds
  var unwantedFeedSelectors = [
    '.bili-feed4-layout',
    '.left-entry',
    '.bili-header__banner',
    '.header-channel-fixed'
    // Add more selectors as needed
  ];

  // Hide unwanted feeds
  function hideElements(elements) {
    elements.forEach(element => {
      element.style.display = 'none';
    });
  }

  // Hide unwanted feeds based on defined selectors
  unwantedFeedSelectors.forEach(selector => {
    var unwantedFeeds = document.querySelectorAll(selector);
    hideElements(unwantedFeeds);
  });
}

// Run the function when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', hideUnwantedContent);
} else {
  hideUnwantedContent();
}

// Set up a MutationObserver to watch for dynamically loaded elements
var targetNode = document.body;
var config = { childList: true, subtree: true };

var callback = function (mutationsList, observer) {
  for (var mutation of mutationsList) {
    if (mutation.type === 'childList') {
      // Check if a new node with the dropdown banner selector has been added
      var addedNodes = Array.from(mutation.addedNodes);
      var dropdownBanner = addedNodes.find(node => node.matches && node.matches(dropdownBannerSelector));
      if (dropdownBanner) {
        // Hide the dynamically loaded dropdown banner
        dropdownBanner.style.display = 'none';
      }

      // Check if a new node with an unwanted feed selector has been added
      unwantedFeedSelectors.forEach(selector => {
        var unwantedFeeds = addedNodes.filter(node => node.matches && node.matches(selector));
        hideElements(unwantedFeeds);
      });
    }
  }
};

var observer = new MutationObserver(callback);
observer.observe(targetNode, config);

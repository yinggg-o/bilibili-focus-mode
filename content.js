// content.js

console.log('Content script executed!');

// Add a style to hide the body by default
var style = document.createElement('style');
style.textContent = 'body { display: none !important; }';
document.head.appendChild(style);


function hideIrrelevantElements() {
  // Get the current URL
  var currentUrl = window.location.href;

  // Define fixed URLs for different pages
  var pageMappings = {
    'https://www.bilibili.com/': [
      // Homepage selectors
      '.animated-banner'
    ],
    'https://search.bilibili.com/': [
      '.brand-ad-list.search-all-list',
      // Add more selectors for the search result page as needed
    ],
    'https://www.bilibili.com/video/': [  
      '.rec_list',
      '.rec-footer',
      // Add more selectors for the video watch page as needed
    ],
    'https://t.bilibili.com/': [
      '.livestream-sidebar',
      // Add more selectors for the member page as needed
    ],
    'https://space.bilibili.com/': [
      // Add selectors for the space page as needed
    ],
    'https://www.bilibili.com/account/': [
      // Add selectors for the history page as needed
    ],
    // Add more URLs and selectors as needed
  };

  // Check if the current URL is in the mapping
  if (currentUrl in pageMappings) {
    // Set data-page-url attribute for the current page
    document.body.setAttribute('data-page-url', currentUrl);
    // Apply styles for the current page
    hideElements(pageMappings[currentUrl]);

    // Show the body after hiding irrelevant elements
    document.body.style.display = 'block';
  }
}

function hideElements(selectors) {
  // Hide elements based on provided selectors
  selectors.forEach(selector => {
    var elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      element.style.display = 'none';
      element.style.opacity = '0';
    });
  });
}


// Run the function when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', hideIrrelevantElements);
} else {
  hideIrrelevantElements();
}

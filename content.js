// content.js

function hideIrrelevantElements() {
  // Get the current URL
  var currentUrl = window.location.href;

  // Define fixed URLs for different pages
  var homepageUrl = 'https://www.bilibili.com/';
  var videoWatchPageUrl = 'https://www.bilibili.com/video/';
  var searchPageUrl = 'https://search.bilibili.com/';
  var memberPageUrl = 'https://t.bilibili.com/';
  var spacePageUrl = 'https://space.bilibili.com/';
  var messagePageUrl = 'https://message.bilibili.com/';
  var historyPageUrl='https://www.bilibili.com/account/history';

  // Check the current URL and apply specific styles accordingly
  if (currentUrl === homepageUrl) {
    document.body.setAttribute('data-page-url', homepageUrl);
    // Apply styles for the homepage
    var homepageSelectors = [
      // '.sidebar-homepage',
      // '.homepage-related-element'
    ];

    hideElements(homepageSelectors);
  } else if (currentUrl.startsWith(videoWatchPageUrl)) {
    document.body.setAttribute('data-page-url', videoWatchPageUrl);
    // Apply styles for the video watch page
    var videoWatchPageSelectors = [
      '.slide-ad-cards',
      '.reco-list'
    ];

    hideElements(videoWatchPageSelectors);
  } else if (currentUrl.startsWith(searchPageUrl)) {
    document.body.setAttribute('data-page-url', searchPageUrl);
    // Apply styles for the member page
    var searchPageSelectors = [
      '.sidebar-member-page',
      '.slide-ads'    
    ];

    hideElements(searchPageSelectors);
  } else if (currentUrl.startsWith(memberPageUrl)) {

    document.body.setAttribute('data-page-url', memberPageUrl);
    // Apply styles for the livestream page
    var memberPageSelectors = [
      '.livestreammer-info',
      '.slide-ads'
    ];

    hideElements(memberPageSelectors);
  }else if (currentUrl.startsWith(spacePageUrl)) {

    document.body.setAttribute('data-page-url', spacePageUrl);
    // Apply styles for the livestream page
    var spacePageSelectors = [
      '.sidebar',
      '.reco-list',
    ];

    hideElements(spacePageSelectors);
  // Add more conditions for other pages as needed
  }else if (currentUrl.startsWith(messagePageUrl)) {

    document.body.setAttribute('data-page-url', messagePageUrl);
    // Apply styles for the livestream page
    var messagePageSelectors = [
      '.message-sidebar',
     
    ];
    hideElements(messagePageSelectors);
  // Add more conditions for other pages as needed
  }else if (currentUrl.startsWith(historyPageUrl)) {

    document.body.setAttribute('data-page-url', historyPageUrl);
    // Apply styles for the livestream page
    var historyPageSelectors = [
      '.livestream-sidebar',
      // Add more selectors for the livestream page as needed
    ];
    hideElements(historyPageSelectors);
  // Add more conditions for other pages as needed
  }
}



function hideElements(selectors) {
  // Hide elements based on provided selectors
  selectors.forEach(selector => {
    var elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      element.style.display = 'none';

    });
  });
}

// Run the function when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', hideIrrelevantElements);
} else {
  hideIrrelevantElements();
}

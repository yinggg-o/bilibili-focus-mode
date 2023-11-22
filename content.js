// content.js

function hideIrrelevantElements() {
  // Get the current URL
  var currentUrl = window.location.href;

  // Define fixed URLs for different pages
  var homepageUrl = 'https://www.bilibili.com/';
  var videoWatchPageUrl = 'https://www.bilibili.com/video/';
  var memberPageUrl = 'https://member.bilibili.com/';
  var livestreamPageUrl = 'https://live.bilibili.com/';

  // Check the current URL and apply specific styles accordingly
  if (currentUrl === homepageUrl) {
    // Set data-page-url attribute for the homepage
    document.body.setAttribute('data-page-url', homepageUrl);

    // Apply styles for the homepage
    var homepageSelectors = [
      '.animated-banner',
      '.bili-feed4-layout',
      // Add more selectors for the homepage as needed
    ];

    hideElements(homepageSelectors);
  } else if (currentUrl.startsWith(videoWatchPageUrl)) {
    // Set data-page-url attribute for the video watch page
    document.body.setAttribute('data-page-url', videoWatchPageUrl);

    // Apply styles for the video watch page
    var videoWatchPageSelectors = [
      '.video-player',
      '.related-videos'
      // Add more selectors for the video watch page as needed
    ];

    hideElements(videoWatchPageSelectors);
  } else if (currentUrl.startsWith(memberPageUrl)) {
    // Set data-page-url attribute for the member page
    document.body.setAttribute('data-page-url', memberPageUrl);

    // Apply styles for the member page
    var memberPageSelectors = [
      '.sidebar-member-page',
      '#profile-section',
      '.member-related-element'
      // Add more selectors for the member page as needed
    ];

    hideElements(memberPageSelectors);
  } else if (currentUrl.startsWith(livestreamPageUrl)) {
    // Set data-page-url attribute for the livestream page
    document.body.setAttribute('data-page-url', livestreamPageUrl);

    // Apply styles for the livestream page
    var livestreamPageSelectors = [
      '.livestream-sidebar',
      '.livestream-related-element'
      // Add more selectors for the livestream page as needed
    ];

    hideElements(livestreamPageSelectors);
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


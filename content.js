var isBlocking = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'toggleBlocking') {
    isBlocking = !isBlocking;
    updateBlocking();
  }
});

function updateBlocking() {
  if (isBlocking) {
    // Hide sidebar recommendations on Bilibili
    var sidebarRecommendations = document.querySelectorAll('.left-entry'); // Replace with the actual selector for sidebar recommendations
    sidebarRecommendations.forEach(video => {
      video.style.display = 'none';
    });
  } else {
    // Show sidebar recommendations on Bilibili
    var sidebarRecommendations = document.querySelectorAll('.left-entry'); // Replace with the actual selector for sidebar recommendations
    sidebarRecommendations.forEach(video => {
      video.style.display = '';
    });
  }
}

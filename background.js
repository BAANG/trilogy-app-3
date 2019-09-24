// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    // Send a message to the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
  });


var timeCount = {};

 function queryTabs () {
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
     var activeTabs = tabs
     chrome.tabs.sendMessage(activeTabs, {"message": "query_tabs"})
   })
 }

 setInterval(queryTabs, 10000)
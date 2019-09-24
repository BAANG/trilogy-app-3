// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
    // Send a message to the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { "message": "clicked_browser_action" });
    });
});


var timeCount = 0; // Keeps track of every 10s user is on active tab.

function queryTabs() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0]
        timeCount++
        chrome.tabs.sendMessage(activeTab.id, {"message": "query_tabs", "time": timeCount})
    })
}

setInterval(queryTabs, 10000)
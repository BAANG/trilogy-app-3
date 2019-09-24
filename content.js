var firstHref = $("a[href^='http']").eq(0).attr("href");

// Wait for message to be received from background.js
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        switch (request.message) {
            case "clicked_browser_action":
                console.log(firstHref);
                break;
            case "query_tabs":
                console.log(firstHref, request.time)
        }
    }
);





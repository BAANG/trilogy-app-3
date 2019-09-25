var firstHref = $("a[href^='http']").eq(0).attr("href");

function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}

// Wait for message to be received from background.js
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        switch (request.message) {
            case "clicked_browser_action":
                console.log(firstHref);
                break;
            case "query_tabs":
                console.log(extractHostname(firstHref), request.time);
                console.log("\n", request)
        }
    }
);





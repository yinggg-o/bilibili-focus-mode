const host = "https://www.bilibili.com/";

function makePath(path = "") {
    return `${host}${path}`
}

function removeHomepage() {
    for (const element of document.getElementsByTagName("left-entry")) {
        element.remove()
    }
}

// function removeRecommended() {
//     document.getElementById("secondary").remove()

//     setTimeout(() => {
//         for (const element of document.getElementsByClassName("html5-endscreen")) {
//             element.remove()
//         }
//     }, 1000)
// }

chrome.tabs.onUpdated.addListener(async (tabId, info) => {
    const tab = await chrome.tabs.get(tabId)
    
    if (info.status !== "complete" || !tab.url.startsWith(host)) {
        return
    }

    let func

    if (tab.url === host) {
        func = removeHomepage
    } else if (tab.url.startsWith(makePath("watch/"))) {
        func = removeRecommended
    } else if (tab.url.startsWith(makePath("shorts/"))) {
        chrome.tabs.update(tab.id, {url: makePath(`watch?v=${tab.url.split("/").pop()}`)})
        func = removeRecommended
    } else {
        return
    }
    
    chrome.scripting.executeScript(
        {
            target: {tabId: tab.id},
            func: func
        }
    )
})
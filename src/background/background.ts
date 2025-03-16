console.log("Extension worker started")

async function checkAndSendEvent(details: chrome.webRequest.WebResponseCacheDetails) { 
    if (details.url.includes("m3u8")) {
    console.log("M3u8 detected", details)
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true})
      if (!tab.id) { return }
    await chrome.tabs.sendMessage(tab.id, details.url)
    }
}

chrome.webRequest.onCompleted.addListener(
  checkAndSendEvent,
    { urls: ["<all_urls>"] },
  )
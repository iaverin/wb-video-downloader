console.log("Hello")

chrome.runtime.onStartup.addListener(() => {
	console.log("Extension installed")
})



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
    // Modify response headers (e.g., add CORS headers)
    //   const headers = details.responseHeaders || [];
    //   headers.push({ name: "Access-Control-Allow-Origin", value: "*" });
    
    //   return { responseHeaders: headers };
    
    { urls: ["<all_urls>"] },
  )
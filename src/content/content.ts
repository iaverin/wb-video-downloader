import M3U8 from '../lib/m3u8'

var currentVideoPlaylistUrl = ""

document.addEventListener('keypress', (event: KeyboardEvent) => {
    if (event.key !== '4') return
    if (!currentVideoPlaylistUrl) return

    const m3u8 = new M3U8()
    
    const download = m3u8.start(currentVideoPlaylistUrl)
    
    download.on("progress", (progress: any) => {
        console.log(progress)
      }).on("finished", (finished: any) => {
        console.log(finished)
      }).on("error", (message: any) => {
        console.error(message) 
      }).on("aborted", () => {
        console.log("Download aborted")
      })
})

  
chrome.runtime.onMessage.addListener((request) => {
    currentVideoPlaylistUrl = request
    console.log("Set playListUrl", request)
})

const observer = new MutationObserver((mutations: MutationRecord[]) => {
    if (!currentVideoPlaylistUrl) return

    const videoElements = document.querySelectorAll('video')
    if (videoElements.length === 0) { 
        currentVideoPlaylistUrl = ""
        console.log("Reset video url")
        return
    }

    for (const element of videoElements) {
        const domRect = element.getBoundingClientRect()
        if (domRect.x === 0 && domRect.y === 0) { 
            currentVideoPlaylistUrl = ""
            console.log("Reset video url")
            return
        }
    }
   
})

observer.observe(document.body,  { childList: true, subtree: true, characterData: true })


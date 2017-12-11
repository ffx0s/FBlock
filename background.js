(function () {
  Actions.load(data => {
    const filters = { urls: [] }
    const mapUrls = {}

    data.forEach(item => {
      if (item.targetUrl) {
        filters.urls.push(item.targetUrl)
        mapUrls[item.targetUrl] = item
      }
    })

    chrome.browserAction.onClicked.addListener(tab => {
      chrome.tabs.create({
        url: "./views/settings.html",
        active: true
      })
    })

    if (Object.keys(mapUrls).length === 0) return

    chrome.webRequest.onBeforeRequest.addListener(
      function (info) {
        return (mapUrls[info.url] && mapUrls[info.url].status) ? { redirectUrl: mapUrls[info.url].replaceUrl } : {}
      },
      // filters
      filters,
      // extraInfoSpec
      ["blocking"]
    )
  })
})();

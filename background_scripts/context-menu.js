browser.contextMenus.create({
  id: "log-selection",
  title: 'Download with DownloadStation',
  contexts: ["link"]
}, () => console.debug('context menu ready!'));

browser.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "log-selection":
      console.log('please download', info.linkUrl);
      break;
  }
});

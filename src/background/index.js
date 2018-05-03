browser.contextMenus.create({
  id: 'download-with-downloadstation',
  title: 'Download with DownloadStation',
  contexts: ['link'],
}, () => console.debug('context menu ready!'));

const onDownloadClick = (info, tab) => {
  chrome.runtime.sendMessage({ greeting: 'hello', info, tab }, (response) => {
    console.log(response.farewell);
  });
};

browser.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case 'download-with-downloadstation':
      onDownloadClick(info, tab);
      break;
    default:
      // do nothing
  }
});

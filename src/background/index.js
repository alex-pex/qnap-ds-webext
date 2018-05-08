import store from './store';

browser.contextMenus.create(
  {
    id: 'download-with-downloadstation',
    title: 'Download with DownloadStation',
    contexts: ['link'],
  },
  () => console.debug('context menu ready!')
);

const onDownloadClick = info => {
  store.dispatch({
    type: 'ADD_LINK',
    payload: info,
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

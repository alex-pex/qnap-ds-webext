import 'babel-polyfill';
import store from './store';
import { getTaskList } from './client';

setInterval(async () => {
  const response = await getTaskList();
  store.dispatch({ type: 'RECEIVE_TASKS', payload: response.data });
}, 2000);

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
    type: 'ADD_USER_LINK',
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

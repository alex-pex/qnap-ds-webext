import React from 'react';
import { Store } from 'react-chrome-redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import pkg from '../../package.json';
import App from './components/App';
import { getTaskList } from '../background/client';

async function initApp() {
  const proxyStore = new Store({
    portName: pkg.name,
  });

  await proxyStore.ready();
  const response = await getTaskList();

  response.data.data.forEach(job =>
    proxyStore.dispatch({ type: 'ADD_LINK', payload: { linkUrl: job.source_name } })
  );

  ReactDOM.render(
    <Provider store={proxyStore}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

export default initApp;

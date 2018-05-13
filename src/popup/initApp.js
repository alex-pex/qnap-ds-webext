import React from 'react';
import { Store } from 'react-chrome-redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import pkg from '../../package.json';
import App from './components/App';

async function initApp() {
  const proxyStore = new Store({
    portName: pkg.name,
  });

  await proxyStore.ready();

  ReactDOM.render(
    <Provider store={proxyStore}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

export default initApp;

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './areas/App';
import registerServiceWorker from './registerServiceWorker';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  );
};

registerServiceWorker();

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./areas/App', () => {
    render(App);
  });
}

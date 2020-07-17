import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

import App from '../src/containers/app';
import './index.module.css';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
);

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );

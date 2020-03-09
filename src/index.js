//
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleWare } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Local imports

import App from './App';
import rootReducer from './reducers';

// Assets

import './index.css';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleWare(thunk)));

render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
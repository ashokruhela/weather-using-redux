import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReducPromise from 'redux-promise';

import { Home } from './component';
import reducers from './reducer';

const createStoreWithMiddleware = applyMiddleware(ReducPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Home/>
    </Provider>
    , document.getElementById('app'));
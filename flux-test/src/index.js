import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Countdown from './ui';
import CountdownDispatcher from './dispatchers';
import CountdownStore from './store';
import countdownActions from './actions';

const appDispatcher = new CountdownDispatcher()
const actions = countdownActions(appDispatcher)
const store = new CountdownStore(10, appDispatcher)

const render = count => ReactDOM.render(
    <Countdown count={count} {...actions} />,
    document.getElementById('root')
)

store.on("TICK", ()=> render(store.count))
store.on("RESET", ()=> render(store.count))

render(store.count)
registerServiceWorker();

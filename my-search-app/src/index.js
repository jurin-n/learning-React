import React from 'react'
import { render } from 'react-dom'
//import App from './components/App'
import { AppContainer } from './components/containers'
import storeFactory from './store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const store = storeFactory()

window.React = React
window.store = store

render(
    <Provider  store={store}>
        <BrowserRouter>
            <AppContainer/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('react-container')
)

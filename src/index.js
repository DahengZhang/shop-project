import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import App from './App'

render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>,
    document.getElementById('root')
)

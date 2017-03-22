/**
 * Created by John on 2017/2/28.
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Counter from './containers/Counter'
render(
    <Provider store={store}>
        <Counter />
    </Provider>,
    document.getElementById('root')
)
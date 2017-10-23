/**
 * Created by John on 2017/2/28.
 */
import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
const routerHistory = createHistory()
import reducers from './reducers'
import initializers from './initializers'
import sagas from './sagas'
const sagaMiddleware = createSagaMiddleware()
const middleware = routerMiddleware(routerHistory)
let store = createStore(reducers,applyMiddleware(middleware,sagaMiddleware))
sagaMiddleware.run(sagas)
initializers(store)
export default store
export let history = routerHistory
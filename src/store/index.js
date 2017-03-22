/**
 * Created by John on 2017/2/28.
 */
import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import initializers from './initializers'
import sagas from './sagas'
const sagaMiddleware = createSagaMiddleware()
let store = createStore(reducers,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagas)
initializers(store)
export default store
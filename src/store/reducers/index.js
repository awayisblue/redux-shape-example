/**
 * Created by John on 2017/3/22.
 */
import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'
import reduxShape from 'redux-shape'
import count from './count'
const shape = {
    count:()=>count,
}
const reducers = reduxShape(combineReducers,{
	shape:shape,
	custom:{
		router:routerReducer
	}
})
export default reducers
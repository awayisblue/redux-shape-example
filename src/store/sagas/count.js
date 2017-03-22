/**
 * Created by John on 2017/3/22.
 */
import {delay} from 'redux-saga'
import {put,takeEvery} from 'redux-saga/effects'
function * increaseAsync(){
    yield delay(500)
    yield put({ type: 'count.increase' })
}
export default function*(){
    yield takeEvery('count.increaseAsync',increaseAsync)
}
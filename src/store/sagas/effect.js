/**
 * Created by John on 2017/3/22.
 */

import {put,takeEvery} from 'redux-saga/effects'
import {push} from 'react-router-redux'
function * jumpHome(){
    yield put(push('/'))

}
export default function*(){
    yield takeEvery('effect.jumpHome',jumpHome)
}
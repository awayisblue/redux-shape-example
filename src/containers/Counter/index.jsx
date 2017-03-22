import React from 'react'
import {connect} from 'react-redux'
import Counter from '../../components/Counter'

const mapStateToProps = (state,ownProps)=>{
    return {
        value:state.count
    }
}
const mapDispatchToProps  = (dispatch, ownProps)=>{
    return {
        onIncrement:()=>{
            dispatch({type:'count.increase'})
        },
        onDecrement:()=>{
            dispatch({type:'count.decrease'})
        },
        onIncrementAsync:()=>{
            dispatch({type:'count.increaseAsync'})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)
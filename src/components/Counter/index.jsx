import React, { Component } from 'react'
import {connect} from 'react-redux'
import style from './styles.less'
class Counter extends Component {
    constructor(props){
        super(props)
        this.incrementIfOdd = this.incrementIfOdd.bind(this)

    }
    incrementIfOdd(){
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    render() {
        const { value, onIncrement, onDecrement ,onIncrementAsync,jumpHome } = this.props
        return (
            <div className={style.base}>
                Clicked: {value} times
                {' '}
                <button onClick={onIncrement}>
                    +
                </button>
                {' '}
                <button onClick={onDecrement}>
                    -
                </button>
                {' '}
                <button onClick={this.incrementIfOdd}>
                    Increment if odd
                </button>
                {' '}
                <button onClick={onIncrementAsync}>
                    Increment async
                </button>
                <hr/>
                <button onClick={jumpHome}>
                    Jump Home via saga.
                </button>
            </div>
        )
    }
}

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
        },
        jumpHome:()=>{
            dispatch({type:'effect.jumpHome'})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)

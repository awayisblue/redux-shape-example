import React, { Component, PropTypes } from 'react'

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
        const { value, onIncrement, onDecrement ,onIncrementAsync } = this.props
        return (
            <p>
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
            </p>
        )
    }
}

Counter.protoTypes =  {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}
export default Counter
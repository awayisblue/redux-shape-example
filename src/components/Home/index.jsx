import React, { Component } from 'react'
import style from './styles.less'
import {withRouter} from 'react-router-dom'
class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            number:5
        }
    }

    componentDidMount(){
        this.handle = setInterval(()=>{

            if(this.state.number==1){
                clearInterval(this.handle)
                return this.props.history.push('/counter')
            }
            this.setState({
                number:this.state.number-1
            })
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.handle)
    }
    render() {
        return (
            <p className={style.base}>
                Now Home! Will jump to Counter in <strong>{this.state.number} </strong>seconds
            </p>
        )
    }
}

export default withRouter(Home)

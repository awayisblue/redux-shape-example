import React, { Component, PropTypes } from 'react'

import {ConnectedRouter } from 'react-router-redux'
import {history} from '../../store'
import {
    Link,
    Route,

} from 'react-router-dom'

import Counter from '../Counter'
import Home from '../Home'
class Router extends Component {
    constructor(props){
        super(props)

    }
    render() {

        return (
            <ConnectedRouter history={history}>
                <div>
                    <ul>
                        <li> <Link to="/">Home</Link></li>
                        <li> <Link to="/counter">Counter</Link></li>
                    </ul>
                    <Route  exact  path="/" component={Home}/>
                    <Route  exact  path="/counter" component={Counter}/>
                </div>

            </ConnectedRouter>
        )
    }
}

export default Router

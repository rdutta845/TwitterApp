import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import HeaderComponent from './headerComponent';
import LeftComponent from './leftContent'
export default class RightComponent extends Component {
    render(){
        return(
            // <Router history={hashHistory}>
            //     <Route path='/' component={HeaderComponent} />
            //     <Route path='/address' component={LeftComponent} />
            // </Router>
            <div>RightComponent</div>
        )
    }
}

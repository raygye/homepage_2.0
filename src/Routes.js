import React, {Component} from 'react';
import Home from './Home';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
export default class Routes extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </Router>
        )
    }
}
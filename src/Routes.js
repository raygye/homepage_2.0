import React, {Component} from 'react';
import Home from './Home';
import Skills from './Skills'
import Projects from './Projects';
import Experience from './Experience';
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
                    <Route exact path="/skills" component={Skills}/>
                    <Route exact path="/projects" component={Projects}/>
                    <Route exact path="/experience" component={Experience}/>
                </Switch>
            </Router>
        )
    }
}
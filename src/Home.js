import React, {Component} from 'react';
import Sidebar from './Sidebar';
export default class Home extends Component {
    render() {
        return (
            <div className="row">
                <Sidebar classname="col"></Sidebar>
                <h1>Thanks for visiting!</h1>
            </div>
        )
    }
}
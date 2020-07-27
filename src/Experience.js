import React, {Component} from 'react';
import Sidebar from './Sidebar';
export default class Experience extends Component {
    render() {
        return (
            <div className="row" style={{height: '100vh'}}>
                <Sidebar classname="col" ></Sidebar>
                <div className="col container mt-2">
                    <h2>experience</h2>

                </div>
            </div>
        )
    }
}
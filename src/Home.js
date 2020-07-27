import React, {Component} from 'react';
import Sidebar from './Sidebar';
export default class Home extends Component {
    render() {
        return (
            <div className="row" style={{height: '100vh'}}>
                <Sidebar classname="col" ></Sidebar>
                <div className="col container mt-2">
                    <h2>sorry, i'm bad with introductions</h2>
                    <p>Thanks for visiting! My name is Gary Ye and I'm currently enrolled in 2A Computer Engineering at the University of Waterloo.
                    </p>
                </div>
            </div>
        )
    }
}
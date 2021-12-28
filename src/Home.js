import React, {Component} from 'react';
import Sidebar from './Sidebar';
export default class Home extends Component {
    render() {
        return (
            <div className="row" style={{height: '100vh'}}>
                <Sidebar classname="col" ></Sidebar>
                <div className="col container mt-2">
                    <h2>looks like you found this page!</h2>
                    <p>Thanks for visiting! My name is Gary Ye and I'm currently enrolled in 3A Computer Engineering at the University of Waterloo.
                    </p>
                    <p style={{lineHeight: "50%"}}>
                        Since you made the trip here, I might as well tell you a bit about myself. Here you can find a brief summary of me: my skills, my projects, and my work experience.
                    </p>
                </div>
            </div>
        )
    }
}
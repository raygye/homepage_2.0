import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
export default class Sidebar extends Component {
    render() {
        return(
            <div className="container border-right" style={{width: '20%', height: '100%'}}>
                <nav className="navbar navbar-light">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" replace style={{color: "black"}}><div className="txt">home</div></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/skills" replace style={{color: "black"}}><div className="txt">skills</div></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects" replace style={{color: "black"}}><div className="txt">projects</div></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/experience" replace style={{color: "black"}}><div className="txt">experience</div></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
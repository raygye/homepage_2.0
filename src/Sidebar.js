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
                            <Link className="nav-link active" to="/Home" replace style={{color: "black"}}><div className="txt">home</div></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About" replace style={{color: "black"}}><div className="txt">about</div></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Projects" replace style={{color: "black"}}><div className="txt">projects</div></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Experience" replace style={{color: "black"}}><div className="txt">experience</div></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
export default class Sidebar extends Component {
    render() {
        return(
            <nav className="navbar navbar-light bg-light border">
                <ul className="nav flex-column ">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/Home" replace >home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About" replace >about</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Projects" replace >projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Experience" replace >experience</Link>
                    </li>
                </ul>
            </nav>

        )
    }
}
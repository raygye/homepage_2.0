import React, {Component} from 'react';
import Sidebar from './Sidebar';
export default class Skills extends Component {
    render() {
        return (
            <div className="row" style={{height: '100vh'}}>
                <Sidebar classname="col" ></Sidebar>
                <div className="col container mt-2">
                    <h2>skills</h2>
                    <p>With considerable experience in Full-Stack Development, most of my skill-set falls under that
                        category, but since then I've explored other fields such as Mobile and Firmware as well.
                    </p>
                    <div>
                        <div><strong>languages: </strong>JavaScript, C++, Python, Java, TypeScript, PHP, SQL, HTML, CSS</div>
                        <div><strong>technologies: </strong>Node.js, React, React Native,
                            Salesforce, jQuery, PostgreSQL, Express.js, MongoDB</div>
                        <div><strong>version control: </strong>Git, SFTP</div>
                    </div>
                </div>
            </div>
        )
    }
}
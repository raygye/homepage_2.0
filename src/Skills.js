import React, {Component} from 'react';
import Sidebar from './Sidebar';
export default class Skills extends Component {
    render() {
        return (
            <div className="row" style={{height: '100vh'}}>
                <Sidebar classname="col" ></Sidebar>
                <div className="col container mt-2">
                    <h2>skills</h2>
                    <p>As an aspiring Full Stack Developer, most of my skillset falls under that category, though
                        I'm open to new opportunities and have experimented with technologies such as NumPy and scikit-learn. Below are
                        my skills, listed starting from the most fluent.
                    </p>
                    <div>
                        <div><strong>languages: </strong>JavaScript, C++, PHP, Java, Python, SQL, HTML, CSS</div>
                        <div><strong>technologies: </strong>React.js, Node.js, jQuery, PostgresSQL, Express.js, MongoDB</div>
                        <div><strong>version control: </strong>Git, SFTP</div>
                    </div>
                </div>
            </div>
        )
    }
}
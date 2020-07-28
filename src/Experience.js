import React, {Component} from 'react';
import Sidebar from './Sidebar';
export default class Experience extends Component {
    render() {
        return (
            <div className="row" style={{height: '100vh'}}>
                <Sidebar classname="col" ></Sidebar>
                <div className="col container mt-2">
                    <h2>projects</h2>
                    <p>Here are some projects I'm especially proud of:</p>
                    <div className="container">
                        <div className="card-deck">
                            <div className="card">
                                <img className="card-img-top" src={require(`./media/ulaap.png`)} alt="Duel! Rock-Paper-Scissors"/>
                                <div className="card-body">
                                    <h5 className="card-title">ULAAP Inc.</h5>
                                    <p className="card-text">Worked with a small team of developers to develop a full-fledged management portal for a transportation and logistics company.
                                    </p>
                                    <p>
                                        Independently completed projects including Google Maps API integrations, digital signature capture, PDF generation automation, and autocomplete API
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <small>jQuery, PHP, PostgreSQL, Bootstrap</small>
                                </div>
                            </div>
                            <div className="card border-0">
                            </div>
                            <div className="card border-0">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
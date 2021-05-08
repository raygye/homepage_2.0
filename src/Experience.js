import React, {Component} from 'react';
import Sidebar from './Sidebar';
export default class Experience extends Component {
    render() {
        return (
            <div className="row" style={{height: '100vh'}}>
                <Sidebar classname="col" ></Sidebar>
                <div className="col container mt-2">
                    <h2>experience</h2>
                    <p>Here is a comprehensive summary of my professional experience:</p>
                    <div className="container">
                        <div className="card-deck">
                            <div className="card">
                                <img className="card-img-top" src={require(`./media/ulaap.png`)} alt="Duel! Rock-Paper-Scissors"/>
                                <div className="card-body">
                                    <h5 className="card-title">ULAAP Inc.</h5>
                                    <p className="card-text">Worked with a small team of developers to develop a full-fledged management portal for a transportation and logistics company.
                                    </p>
                                    <p>
                                        Independently completed projects including Google Maps API integrations, digital signature capture, PDF/email automation, and autocomplete API.
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <small>jQuery, PHP, PostgreSQL, Bootstrap</small>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src={require(`./media/newtopia.png`)} alt="Duel! Rock-Paper-Scissors"/>
                                <div className="card-body">
                                    <h5 className="card-title">Newtopia</h5>
                                    <p className="card-text">Developed both web and mobile platforms for a healthy living and disease prevention service with a user-base of over 10000.
                                    </p>
                                    <p>
                                        Improved the security of high traffic public APIs by providing JWT support and additional validation
                                    </p>
                                    <p>
                                        Performed a complete refactor to TypeScript, improving performance of the mobile app by 30%.
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <small>JavaScript, TypeScript, Java, React Native, SOQL</small>
                                </div>
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
import React, {Component} from 'react';
import Sidebar from './Sidebar';
export default class Projects extends Component {
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
                            <img className="card-img-top" src={require(`./media/duel.png`)} alt="Duel! Rock-Paper-Scissors"/>
                            <div className="card-body">
                                <h5 className="card-title">Duel! Rock-Paper-Scissors</h5>
                                <p className="card-text">When my friends and I were on Discord,
                                    we would sometimes settle petty arguments by playing rock-paper-scissors by sending a message at the same time.
                                    I decided to provide a more practical solution.</p>
                            </div>
                            <div className="card-footer">
                                <small>MERN (MongoDB, Express.js, React.js, Node.js)</small>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={require(`./media/ttc.jpg`)} alt="TTC Predictions"/>
                            <div className="card-body">
                                <h5 className="card-title">TTC Predictions</h5>
                                <p className="card-text">Using NextBus API and Google Maps Javascript API, the site retrieves and displays the arrival
                                    time predictions of buses and streetcars of the TTC (Toronto Transit Commission) in Toronto, Ontario.</p>
                            </div>
                            <div className="card-footer">
                                <small>jQuery/AJAX</small>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={require(`./media/hush.png`)} alt="TTC Predictions"/>
                            <div className="card-body">
                                <h5 className="card-title">Hush</h5>
                                <p className="card-text">Hush is a program that allows the user to encrypt their messages using OTP encryption.
                                    Simply encode your message, send the unreadable script to a peer, and have them decode it on their end. Such a technology was developed by Claude Shannon and was notably used in WWII.</p>
                            </div>
                            <div className="card-footer">
                                <small>C++/Java</small>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
import React from 'react';
import './Navbar.css';
import Logo from '../img/logo.png';
import Getstarted from './Getstarted';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* <!-- section 1 start --> */}
            <div className="row">
                <div className="bgimg">
                    <div className="cover">
                        <div className="logo">
                            <img src={Logo} alt="" />
                            <div className="navBar">
                                <select className="language">
                                    <option value="">&#xF3EE;
                                        English</option>
                                    <option value="">&#xF3EE;
                                        मराठी
                                    </option>
                                    <option value="">&#xF3EE;
                                        हिन्दी
                                    </option>
                                </select>
                                <div>
                                    <button className="btn" onClick={() => navigate("/login")}>Sign In</button>
                                </div>
                            </div>
                        </div>
                        <div className="list">
                            <h1>Unlimited movies, TV <br />shows and more.</h1>
                            <h2>Watch anywhere. Cancel anytime.</h2>
                            <h3 style={{margin:"0px 10px 0px 10px"}}>Ready to watch? Enter your email to create or restart your membership.</h3>
                            <Getstarted />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- section 1 end --> */}

        </>
    );
};

export default Navbar;
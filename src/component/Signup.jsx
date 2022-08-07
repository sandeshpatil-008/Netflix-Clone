import React from 'react';
import './Signup.css';
import Logo from '../img/logo.png';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="logo-1 logoBottom">
                <img className="logoImg" src={Logo} alt="" onClick={()=>navigate("/")}/>
                <h1 className='signupSignin' onClick={() => navigate("/login")}>Sign in</h1>
            </div>
            <div className="showcase-content1">
                <div className="formm1">
                    <form>
                        <h2 className="step">STEP 1 OF 3</h2>
                        <h2 className="join">Welcome back!</h2>
                        <h2 className="join">Joining Netflix is easy.</h2>

                        <h2 className="step">Enter your password and you'll be watching in no time</h2>
                        <h2 className="step step1">Email</h2>
                        <h2 className="step" style={{ fontWeight: "bold" }}>sandeshpatil0008@gmail.com</h2>

                        <div className="info1">
                            <input className="email" type="password" placeholder="Enter Password" />
                        </div>
                        <h2 className="step forgot"><a>Forgot Your Password</a></h2>

                        <div className="signbtn">
                            <button className="btn btnSign nextBtn" type="submit" onClick={() => navigate("/planform")}>Next</button>
                        </div>
                    </form>
                </div>
            </div>
            <footer className='signupFooter' style={{height:"270px"}}>
                <div className="ftr-content ftr-content1">
                    <div className="contact">
                        <a>Quesions? <a href="tel:000-800-040-1843">000-800-040-1843
                        </a></a>
                    </div>
                    <div className="ftr">
                        <div>
                            <a onClick={() => navigate("/faq")}>FAQ</a><br /><br />
                            <a href="#">Cookie Prefrences</a>
                        </div>
                        <div>
                            <a onClick={() => navigate("/help")}>Help Center</a><br /><br />
                            <a href="#">Corperate Information</a>
                        </div>
                        <div>
                            <a href="#">Terms of Use</a>
                        </div>
                        <div>
                            <a href="#">Privacy</a>
                        </div>
                    </div>
                    <select class="language signupLanguage">
                        <option value="">&#xF3EE; English</option>
                        <option value="">&#xF3EE; मराठी</option>
                        <option value="">&#xF3EE; हिन्दी</option>
                    </select>
                </div>
            </footer>
        </>
    );
};

export default Signup;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Planform.css';
import Logo from '../img/logo.png';
import * as Icon from 'react-bootstrap-icons';

const Planform = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="logo-1 logoBottom">
                <img className="logoImg" src={Logo} alt="" onClick={()=>navigate("/")}/>
                <h1 className='signupSignin' onClick={() => navigate("/")}>Sign out</h1>
            </div>
            <div className="topMainSec">
                <div className="topSec">
                    <div>
                        <h2 className="step step1 chang">STEP 2 OF 3</h2>
                        <h2 className="choose">Choose the plan that’s right for you</h2>
                        <div className='checkMain'>
                            <Icon.Check2 className='check2' />
                            <h2 className="step chang"> Watch all you want. Ad-free.</h2>
                        </div>
                        <div className='checkMain'>
                            <Icon.Check2 className='check2' />
                            <h2 className="step chang ">
                                Recommendations just for you.</h2>
                        </div>
                        <div className='checkMain'>
                            <Icon.Check2 className='check2' />
                            <h2 className="step chang">
                                Change or cancel your plan anytime.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainPlanbox">
                <div className='planBox'>
                    <div className='box1 planWright'>Mobile</div>
                    <div className='box1 planWright'>Basic</div>
                    <div className='box1 planWright'>Standerd</div>
                    <div className='box1'>Premium</div>
                </div>
                <div className='planBox1'>
                    <div className='box3 planWright'>Monthly price</div>
                    <div className='box2 planWright'>₹ 149</div>
                    <div className='box2 planWright'>₹ 199</div>
                    <div className='box2 planWright'>₹ 499</div>
                    <div className='box2'>₹ 649</div>
                </div>
                <div className='planBox1'>
                    <div className='box3 planWright'>Video quality</div>
                    <div className='box2 planWright'>Good</div>
                    <div className='box2 planWright'>Good</div>
                    <div className='box2 planWright'>Better</div>
                    <div className='box2 '>Best</div>
                </div>
                <div className='planBox1'>
                    <div className='box3 planWright'>Monthly price</div>
                    <div className='box2 planWright'>480p</div>
                    <div className='box2 planWright'>480p</div>
                    <div className='box2 planWright'>1080p</div>
                    <div className='box2 '>4K+HDR</div>
                </div>
                <div className='planBox1' style={{borderBottom:"none"}}>
                    <div className='box3 planWright'>Devices you can<br/> use to watch</div>
                    <div className='box2 planWright'>
                        <Icon.Phone className='planIcons'/><br />Phone<br /><br /><Icon.PhoneLandscape className='planIcons'/><br />Tablet
                    </div>
                    <div className='box2 planWright'>
                        <Icon.Phone className='planIcons'/><br />Phone<br /><br /><Icon.PhoneLandscape className='planIcons'/><br />Tablet<br /><br /><Icon.Laptop className='planIcons'/><br />Computer<br /><br /><Icon.Tv className='planIcons'/><br />Tv
                    </div>
                    <div className='box2 planWright'>
                        <Icon.Phone className='planIcons'/><br />Phone<br /><br /><Icon.PhoneLandscape className='planIcons'/><br />Tablet<br /><br /><Icon.Laptop className='planIcons'/><br />Computer<br /><br /><Icon.Tv className='planIcons'/><br />Tv
                    </div>
                    <div className='box2'>
                        <Icon.Phone className='planIcons'/><br />Phone<br /><br /><Icon.PhoneLandscape className='planIcons'/><br />Tablet<br /><br /><Icon.Laptop className='planIcons'/><br />Computer<br /><br /><Icon.Tv className='planIcons'/><br />Tv
                    </div>
                </div>
            </div>
            <div className="topMainSec">
                <div className="topSec">
                    <div>                      
                        <div className='termOfUse'>                      
                            <span> HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our <span> Terms of Use</span> for more details.</span><br/><br/>
                            <span>Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile</span>
                        </div>
                        <div className="signbtn nextNew">
                            <button className="btn btnSign nextBtn nextBtn1" type="submit" onClick={() => navigate("/dashbord")}>Next</button>
                        </div>
                    </div>
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

export default Planform;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Help.css'
import Icon from '../../img/icon.png'
import Logo from '../../img/logo.png'
import * as Icons from 'react-bootstrap-icons';
import Footer1 from '../Faq/Footer1';
import HelpCard from './HelpCard';


const Help = () => {

    const navigate = useNavigate();

    return (
        <>
            {/* header */}
            <div className="faqMain">
                <div className="f-left">
                    <img className="faqLogo" src={Logo} alt="" onClick={() => navigate("/")} />
                    <img className="faqLogo faqIcon" src={Icon} alt="" onClick={() => navigate("/")} />
                    {/* <div className='bar'></div> */}
                </div>

                <div className="f-right">
                    <input className='f-join' type="button" value="JOIN NETFLIX" placeholder='JOIN NETFLIX'onClick={() => navigate("/signup")} />
                    <button className="btn f-btn" onClick={() => navigate("/login")}>SIGN IN</button>
                </div>
            </div>
            <div className='hCenter'>
                <h1 className='f-help h-help' onClick={() => navigate("/help")}>Help Center</h1>
                <div className="hSerchSec">
                    <div className="hSerchBox">
                        <Icons.Search className="hSearch" />
                    </div>
                    <input type="text" placeholder="What do you need help with?" className='helpSerch' />
                </div>
            </div>

            {/* middle sec */}

            <div className='hMiddleSec'>
                <h1 className='faqHead hHead'>Sign in for personalized help ?</h1>
                <button className="btn f-btn h-btn" onClick={() => navigate("/login")}>SIGN IN</button>
                <input className='f-join h-join' type="button" value="JOIN NETFLIX" placeholder='JOIN NETFLIX' onClick={() => navigate("/signup")} />
                <h3 className='whatText'>Popular topics</h3>
                <div className='hTopMain'>
                    <div className='hTopics'>
                        <Icons.CardList className='fCard' />
                        <h4 className='releted hTop'>How to sign up for Netflix</h4>
                    </div>
                    <div className='hTopics'>
                        <Icons.CardList className='fCard' />
                        <h4 className='releted hTop'>Plans And Pricing</h4>
                    </div>
                    <div className='hTopics'>
                        <Icons.CardList className='fCard' />
                        <h4 className='releted hTop'>Can't sign in to Netflix</h4>
                    </div>
                </div>
            </div>
            <div className='hBorder'></div>

            {/* article sec */}

            <div className='articleMain'>
                {/* 1st way  */}
                <div className='hBox1'>
                    <h4 className='releted articleHead'>Getting Started</h4>
                    <div className='hCard'>
                        <h3 className='whatText articleText'>How to sign up for Netflix</h3>
                        <Icons.ChevronRight className='chevron'/> 
                    </div>
                    <div className='hCard'>
                        <h3 className='whatText articleText'>What is Netflix?</h3>
                        <Icons.ChevronRight className='chevron'/>
                    </div>
                    <div className='hCard'>
                        <h3 className='whatText articleText'>Plans and Pricing</h3>
                        <Icons.ChevronRight className='chevron'/>
                    </div>
                </div>
                {/* 2nd way  */}
                <HelpCard
                heading="Can't Watch"
                content1="How to change your Netflix password"
                content2="Netflix says to sign up when trying to sign in"
                content3="Netflix says 'This app is not compatible with your device."
                icon={<Icons.ChevronRight/>}
                />     
                <HelpCard
                heading="Manage My Account"
                content1="Can't sign in to Netflix"
                content2="How to restart your Netflix account"
                content3="Netflix account email was changed without permission"
                icon={<Icons.ChevronRight/>}
                />  
                <HelpCard
                heading="Watching Netflix"
                content1="What devices can I use to stream Netflix?"
                content2="How to watch Netflix on your TV"
                content3="How to download titles to watch offline"
                icon={<Icons.ChevronRight/>}
                />    
                {/* <HelpCard
                heading="Quick Links"
                content1="Reset password"
                content2="Update email"
                content3="Get help signing in"
                content4="Update payment method"
                content5="Request Tv show and movies"
                content6="Content Grievances in India"
                icon={<Icons.ChevronRight/>}
                />     */}
                <div className='hBox1'>
                    <h4 className='releted articleHead'>Quick Links</h4>
                    <div className='hCard'>
                        <h3 className='whatText articleText'>Reset password</h3>
                        <Icons.ChevronRight className='chevron hChevron'/> 
                    </div>
                    <div className='hCard'>
                        <h3 className='whatText articleText'>Update email</h3>
                        <Icons.ChevronRight className='chevron hChevron'/>
                    </div>
                    <div className='hCard'>
                        <h3 className='whatText articleText'>Get help signing in</h3>
                        <Icons.ChevronRight className='chevron hChevron'/>
                    </div>
                    <div className='hCard'>
                        <h3 className='whatText articleText'>Update payment method</h3>
                        <Icons.ChevronRight className='chevron hChevron'/>
                    </div>
                    <div className='hCard'>
                        <h3 className='whatText articleText'>Request Tv show and movies</h3>
                        <Icons.ChevronRight className='chevron hChevron'/>
                    </div>
                    <div className='hCard'>
                        <h3 className='whatText articleText'>Content Grievances in India</h3>
                        <Icons.ChevronRight className='chevron hChevron'/>
                    </div>
                </div>         
            </div>

            {/* for contact */}
            <div className="faqContact">
                <h1 className='faqHead '>Want to Contact us?
                </h1>
                <div className='faqCall'>
                    <a href="tel:+917083570970">
                        <input className='faqcBtn faqcBtn1' type="button" value="CALL US" placeholder='CALL US' />
                    </a>
                    <input className='faqcBtn' type="button" value="START LIVE CHAT" placeholder='START LIVE CHAT' />
                </div>
            </div>
            <Footer1 />
        </>
    );
};

export default Help;
import { useState } from 'react';
import './Faq.css';
import { useNavigate } from 'react-router-dom';
import * as Icons from 'react-bootstrap-icons';
import What from '../../img/what.png'
import Show from '../../img/shows.png'
import Plan from '../../img/plan.png'
import Support from '../../img/support.png'
import Get from '../../img/get.png'
import Footer1 from './Footer1';
import Header1 from './Header1';

const Faq = () => {
    const navigate = useNavigate();
    const [click, setclick] = useState(false);

    const submitData = (e) => {
        e.preventDefault();
        setclick(!click);


    }

    return (
        <>
            {/* header */}
          <Header1/>
            {/* faq middel sec */}
            <div className="faq1">
                <div className='faqShort'>
                    <Icons.ArrowLeftShort className='arroI' /><h5 className='Fhelp' onClick={() => navigate("/")}>Back To Help Home</h5>
                </div>
                <h1 className='whatHead'>What is Netflix</h1>
                <div className='imgg'>
                    <img src={What} alt="" className='whatImg' />
                    <div className="faqCard">
                        <h4 className='releted'>Releted Articles</h4>
                        <div className='cardL'>
                            <Icons.CardList className='fCard' />
                            <h4 className='releted nn'>Getting Started With Netflix</h4>
                        </div>
                        <div className='cardL'>
                            <Icons.CardList className='fCard' />
                            <h4 className='releted nn'>Billing And Payments</h4>
                        </div>
                        <div className='cardL'>
                            <Icons.CardList className='fCard' />
                            <h4 className='releted nn'>Netflix Gift Card</h4>
                        </div>
                        <div className='cardL'>
                            <Icons.CardList className='fCard' />
                            <h4 className='releted nn'>Can't Sign To Netflix</h4>
                        </div>
                        <div className='cardL'>
                            <Icons.CardList className='fCard' />
                            <h4 className='releted nn'>How To Create And Edit profile</h4>
                        </div>
                    </div>
                </div>
                <h3 className='whatText'>
                    Netflix is a subscription-based <span className='higlight'> streaming service </span>that allows our members to watch TV shows and movies without commercials on an internet-connected device.</h3>

                <h3 className='whatText'>You can also <span className='higlight'> download TV shows and movies </span> to your iOS, Android, or Windows 10 device and watch without an internet connection.</h3>

                <h3 className='whatText '>If you're already a member and would like to learn more about using Netflix, visit <span className='higlight'> Getting started with Netflix.</span></h3>
                <div className='underLine'></div>
            </div>

            <div className="faq1">
                <h1 className='tvHead'>TV Shows & Movies
                </h1>
                <div className='imgg'>
                    <img src={Show} alt="" className='whatImg' />
                </div>
                <h3 className='whatText'>
                    Netflix content varies by region and may change over time. You can watch from a wide variety of  <span className='higlight'> award-winning Netflix Originals, TV shows, movies, documentaries, and more.  </span></h3>

                <h3 className='whatText'>The more you watch, the better Netflix gets at <span className='higlight'>  recommending </span>TV shows and movies we think you’ll enjoy.  </h3>
                <div className='underLine'></div>
            </div>

            <div className="faq1">
                <h1 className='tvHead'>Supported Devices
                </h1>
                <div className='imgg'>
                    <img src={Support} alt="" className='whatImg' />
                </div>
                <h3 className='whatText'>You can watch Netflix through any <span className='higlight'> internet-connected device  </span> that offers the Netflix app, including smart TVs, game consoles, streaming media players, set-top boxes, smartphones, and tablets. You can also watch Netflix on your computer using an internet browser. You can review the <span className='higlight'> system requirements   </span>for web browser compatibility, and check our <span className='higlight'> internet speed recommendations  </span>to achieve the best performance.</h3>

                <h3 className='whatText'>Need help getting set up? Search our <span className='higlight'> Help Center  </span>for the manufacturer of the device you're using.  </h3>
                <h3 className='whatText note'>
                    <div className='sup'>
                        <span className='not'>NOTE</span>: The Netflix app may come pre-loaded on certain devices, or you may need to download the Netflix app onto your device. Netflix app functionality may differ between devices.</div>
                </h3>
                <div className='underLine'></div>
            </div>

            <div className="faq1">
                <h1 className='tvHead'>Plans and Pricing
                </h1>
                <div className='imgg'>
                    <img src={Plan} alt="" className='whatImg' />
                </div>
                <h3 className='whatText'>Each Netflix plan determines the number of devices you can watch Netflix on <strong> at the same time</strong> and if you prefer to view in Standard Definition (SD), High Definition (HD), or Ultra High Definition (UHD).</h3>

                <h3 className='whatText'> <span className='higlight'>  Compare our plans and pricing  </span>to decide which one is right for you. You can easily <span className='higlight'>  change your plan  </span>or<span className='higlight'>  cancel  </span>online at any time.</h3>
                <div className='underLine'></div>
            </div>

            <div className="faq1">
                <h1 className='tvHead'>Get Started!
                </h1>
                <div className='imgg'>
                    <img src={Get} alt="" className='whatImg' />
                </div>
                <h3 className='whatText getH'>
                    Follow these easy steps to start watching Netflix today:<br />1.Visit <span className='higlight' onClick={() => navigate("/")}> netflix.com/signup. </span>
                    <br />2.<span className='higlight'> Choose the plan  </span>that’s right for you.
                    <br />3.Create an account by entering your email address and creating a password.
                    <br />4.Enter a <span className='higlight'> payment method </span>As a Netflix member, you are charged once a month on the date you signed up.</h3>

                <h3 className='whatText'>That's it. Enjoy Netflix!  </h3>
                <div className='underLine'></div>

                {/* hide sec */}
                
                    <div className={click ? "dNone" : " gBottom faqAiticle"} > <strong> Was this article helpful?</strong>&nbsp;
                        <input type="submit" value='Yes' onClick={() => setclick(!click)} className={click ? "dNone" : "dBlock gYes"} />
                        <input type="submit" value='No'  className={click ? "dNone" : "dBlock gYes"} />
                    </div>

                    <form onSubmit={submitData} className={click ? "dBlock" : "dNone"}>
                        <h3 className='whatText gBottom'> Thanks for your feedback! Any suggestions for further improvement?</h3>

                        <textarea type="text" className='fFeed' placeholder="(Optional) We do not respond to individual feedback. Please do not leave personal information." /><br />

                        <input type="submit" className='f-join f-submit' value="Submit" />

                    </form>
                
            </div>

            {/* for contact */}
            <div className="faqContact">
                <h1 className='faqHead'>Want to Contact us?
                </h1>
                <div className='faqCall'>
                    <a href="tel:+917083570970">
                        <input className='faqcBtn faqcBtn1' type="button" value="CALL US" placeholder='CALL US' />
                    </a>
                    <input className='faqcBtn' type="button" value="START LIVE CHAT" placeholder='START LIVE CHAT' />
                </div>
            </div>
           <Footer1/>
        </>
    );
};

export default Faq;
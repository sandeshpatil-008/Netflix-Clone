import React from 'react';
import Getstarted from './Getstarted';
import './Questions.css';
// import { Plus } from 'react-bootstrap-icons';

const Questions = () => {
    return (
        <>
            <h1 className="asked">Frequently Asked Questions
            </h1>
            <div className="wrapper">
                <div className="collapsible">
                    <input type="checkbox" id="collapsible-head1" />
                    <label htmlFor="collapsible-head1">What is Netflix</label>
                    <div className="collapsible-text">
                        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br />
                            You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="collapsible">
                    <input type="checkbox" id="collapsible-head2" />
                    <label htmlFor="collapsible-head2">How munch does Netflix?</label>
                    <div className="collapsible-text">
                        <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="collapsible">
                    <input type="checkbox" id="collapsible-head3" />
                    <label htmlFor="collapsible-head3">Where can I watch?</label>
                    <div className="collapsible-text">
                        <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br />
                            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="collapsible">
                    <input type="checkbox" id="collapsible-head4" />
                    <label htmlFor="collapsible-head4">How do I cancel?</label>
                    <div className="collapsible-text">
                        <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="collapsible">
                    <input type="checkbox" id="collapsible-head5" />
                    <label htmlFor="collapsible-head5">What can I watch on Netflix?</label>
                    <div className="collapsible-text">
                        <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="collapsible">
                    <input type="checkbox" id="collapsible-head6" />
                    <label htmlFor="collapsible-head6">Is Netflix good for kids</label>
                    <div className="collapsible-text">
                        <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.<br />
                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                    </div>
                </div>
            </div>
            <div className='questions-bottom'>
                <h3 style={{ textAlign: "center",margin:"0px 10px 0px 10px"}}>Ready to watch? Enter your email to create or restart your membership.</h3>
                <Getstarted />
            </div>
        </>
    );
};

export default Questions;
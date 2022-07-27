import React from 'react';
import './Dashbord.css';
import Logo from '../img/logo.png';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Moviecard from './Moviecard';
import King from '../img/king.png'
import Evil from '../img/evil.png'
import Beast from '../img/beast.png'
import Night from '../img/night.png'
import Inter from '../img/inter.png'
import Summer from '../img/summer.png'
import Away from '../img/away.png'
import Desire from '../img/desire.png'
import Kobra from '../img/kobra.png'


const Dashbord = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="row">
                <div className="bgimg loginBg">
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
                                    <button className="btn" onClick={() => navigate("/")}>Log Out</button>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div className='serchSec'>
                    <input type="text" placeholder='Serch Movie Name'  className='serchBarr'/>
                    </div>
                </div>
            </div>

            <div className='filterMovie'>
                <h1 className='filterHead'>I'm interested in covering titles releasing in</h1>
                <div className='mainDrop'>
                <select className='selectV'>
                    <option>Jan</option>
                    <option>Feb</option>
                    <option>Mar</option>
                    <option>May</option>
                    <option>Jun</option>
                    <option>Jul</option>
                </select>
                </div>
                </div>

            <div className="l-movie">
                <Moviecard
                    image={King}
                    date={"20 jul 2022"}
                />

                <Moviecard
                    image={Evil}
                    date={"15 March 2022"}
                />

                <Moviecard
                    image={Beast}
                    date={"3 jan 2022"}
                />

                <Moviecard
                    image={Night}
                    date={"25 Apr 2022"}
                />

                <Moviecard
                    image={Inter}
                    date={"25 Apr 2022"}
                />

                <Moviecard
                    image={Summer}
                    date={"25 may 2022"}
                />

                <Moviecard
                    image={Kobra}
                    date={"25 feb 2022"}
                />

                <Moviecard
                    image={Away}
                    date={"25 may 2022"}
                />

                <Moviecard
                    image={Desire}
                    date={"25 Apr 2022"}
                />

                <Moviecard
                    image={Night}
                    date={"25 Apr 2022"}
                />
            </div>
            <Footer />
        </>
    );
};

export default Dashbord;
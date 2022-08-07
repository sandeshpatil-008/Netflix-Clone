import React from 'react';
import Icon from '../../img/icon.png'
import Logo from '../../img/logo.png'
import { useNavigate } from 'react-router-dom';

const Header1 = () => {

    const navigate = useNavigate();
    
    return (
        <>
            {/* header */}
            <div className="faqMain">
                <div className="f-left">
                    <img className="faqLogo" src={Logo} alt="" onClick={() => navigate("/")} />
                    <img className="faqLogo faqIcon" src={Icon} alt="" onClick={() => navigate("/")} />
                    <div className='bar'></div>
                    <h1 className='f-help' onClick={()=>navigate("/help")}>Help Center</h1>
                </div>
                <div className="f-right">
                    <input className='f-join' type="button" value="JOIN NETFLIX" placeholder='JOIN NETFLIX' onClick={() => navigate("/signup")}/>
                    <button className="btn f-btn" onClick={() => navigate("/login")}>SIGN IN</button>
                </div>
            </div>
        </>
    );
};

export default Header1;
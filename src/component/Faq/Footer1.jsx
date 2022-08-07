import React from 'react';

const Footer1 = () => {
    
    return (
        <>
            {/* footer1  */}
            <div className="faqFooter">
                <select className="language faqLang">
                    <option value="">&#xF3EE; English</option>
                    <option value="">&#xF3EE; मराठी</option>
                    <option value="">&#xF3EE; हिन्दी</option>
                </select>

                <ul className='faqFoot'>
                    <li className='faqF'>Terms of Use</li>
                    <li className='faqF'>privacy</li>
                    <li className='faqF'>Cookies Preferences</li>
                    <li>Corporate Informatio</li>
                </ul>
            </div> 
        </>
    );
};

export default Footer1;
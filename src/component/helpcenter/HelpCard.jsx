import React from 'react';

const HelpCard = (props) => {
    return (
        <>        
                <div className='hBox1'>
                    <h4 className='releted articleHead'>{props.heading}</h4>
                    <div className='hCard'>
                        <h3 className='whatText articleText'>{props.content1}</h3>
                        <div className='chevron'>{props.icon}</div> 
                    </div>
                    <div className='hCard'>
                        <h3 className='whatText articleText'>{props.content2}</h3>
                        <div className='chevron'>{props.icon}</div> 
                    </div>
                    <div className='hCard'>
                        <h3 className='whatText articleText'>{props.content3}</h3>
                       <div className='chevron'>{props.icon}</div> 
                    </div>                    
                </div>  
        </>
    );
};

export default HelpCard;
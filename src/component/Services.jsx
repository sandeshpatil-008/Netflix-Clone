import React from 'react';
import Card from './Card';
import './Services.css';
import Tv from '../img/tv.png'
import Mobile from '../img/mobile.png'
import Device from '../img/device.png'
import Children from '../img/children.png'

const Services = () => {
    return (
        <>
            <div className="gap"></div>
            <div className="services">
                <Card
                    heading={"Enjoy on your TV."}
                    detail={"Watch on smart TVs PlayStation Xbox Chromecast Apple TV Blu-ray players and more."}
                    image={Tv}
                />
                <div className="gap"></div>
                <div style={{flexDirection:"row-reverse",direction:"rtl"}}>
                <Card 
                    heading={"Download your shows to watch offline."}
                    detail={"Save your favourites easily and always have something to watch."}
                    image={Mobile}
                />
                </div>
                <div className="gap"></div>
                <Card
                    heading={"Enjoy on your TV."}
                    detail={"Watch on smart TVs PlayStation Xbox Chromecast Apple TV Blu-ray players and more."}
                    image={Device}
                />
                <div className="gap"></div>
                <div style={{flexDirection:"row-reverse",direction:"rtl"}}>
                <Card
                    heading={"Create profiles for children."}
                    detail={"Send children on adventures with their favourite characters in a space made just for them—free with your membership."}
                    image={Children}
                />
                </div>
                <div className="gap"></div>
                
            </div>
        </>
    );
};

export default Services;
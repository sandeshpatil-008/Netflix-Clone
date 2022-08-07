import React from 'react';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Questions from './component/Questions';
import Services from './component/Services';

const App = () => {
    window.scrollTo(0,0);
    return (
        <>
        <Navbar/>
        <Services/>
        <Questions/>
        <Footer/>
        </>
    );
};

export default App;
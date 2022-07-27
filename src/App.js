import React from 'react';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Questions from './component/Questions';
import Services from './component/Services';

const App = () => {
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
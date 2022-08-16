import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../Pages/Portfolio'
import About from '../Pages/About'
import { Route, Routes } from 'react-router-dom';

function Index() {
    return (
        <div className='min-h-screen flex flex-col justify-between bg-slate-900 text-white'>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Index
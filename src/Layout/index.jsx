import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../Pages/Portfolio'
import About from '../Pages/About'
import Contact from '../Pages/Contact';
import { Route, Routes } from 'react-router-dom';

function Index() {
    return (
        <div className="min-h-screen text-white flex flex-col">
            <Header />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/portfolio" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Index
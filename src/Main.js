import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import OurMenu from './OurMenu';

const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/our-menu" element={<OurMenu />}/>
                <Route path="/booking" element={<BookingPage />}/>
            </Routes>
        </main>
    );
};

export default Main;
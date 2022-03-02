import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';
import ContactPage from '../pages/ContactPage';

const Page = () => {
  return (
<div>   
        <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/contact' element={<ContactPage />} />
        </Routes>
    </div>
  );
}

export default Page;
import React from 'react';
import "../styles/header.css";

import img1 from '../images/img1.jpg';

const Header = () => {

    return (
        <>
        <img src={img1} alt="miasto" />
        <h1>
        Kancelaria Adwokacka Małgorzata Kowalska
        </h1>
        </>
          
    );
}

export default Header;
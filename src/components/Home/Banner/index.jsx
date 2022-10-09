import React from 'react';
import './styles.css';
import bannerImg from './shop.webp';
import Logo from '../../common/Logo';

const Banner = ({ handleScrollMenu }) => (
  <header>
    <div className='header-content'>
      <Logo />
      <div className='content-main'>
        <h1><i>E-Commerce </i></h1>
       
        <button onClick={handleScrollMenu}>
        Items :-<i className='fas fa-long-arrow-alt-right'></i>
        </button>
      </div>
    </div>
    <img className='header-img' src={bannerImg} alt='banner' />
  </header>
);

export default Banner;

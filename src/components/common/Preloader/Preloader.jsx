import React from 'react';
import preloader from '../../../assets/img/preloader.svg';
import './Preloader.scss';

const Preloader = () => (
  <div className='preloader'>
    <img src={preloader} alt='load' />
  </div>

);

export default Preloader;

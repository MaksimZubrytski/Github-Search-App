import React from 'react';
import './EmptyRepositories.scss';

const EmptyRepositories = () => (
  <div className='empty'>
    <span className='ico ico_empty' />
    <span className='empty__text'>Repository list is empty</span>
  </div>
);

export default EmptyRepositories;

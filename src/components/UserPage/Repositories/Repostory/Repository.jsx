import React from 'react';
import './Repository.scss';

const Repository = (props) => {
  const {
    name,
    description,
  } = { ...props };

  return (
    <div className='repository repositories__item'>
      <h3 className='repository__title'>{name}</h3>
      <p className='repository__text'>{description}</p>
    </div>
  );
};

export default Repository;

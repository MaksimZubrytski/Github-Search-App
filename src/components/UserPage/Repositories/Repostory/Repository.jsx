import React from 'react';
import './Repository.scss';

const Repository = (props) => {
  const {
    name,
    description,
    url,
  } = { ...props };

  return (
    <div className='repository repositories__item'>
      <a className='repository__title' href={url} target='_blank' rel='noreferrer'>{name}</a>
      <p className='repository__text'>{description}</p>
    </div>
  );
};

export default Repository;

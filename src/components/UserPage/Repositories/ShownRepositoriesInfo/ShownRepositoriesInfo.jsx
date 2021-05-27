import React from 'react';
import { connect } from 'react-redux';
import './ShownRepositoriesInfo.scss';

const ShownRepositoriesInfo = (props) => {
  const {
    repositoriesCount,
    pageSize,
    currentPage,
  } = { ...props };

  const from = currentPage * pageSize - 3;

  let to = currentPage * pageSize;

  const pagesCount = Math.ceil(repositoriesCount / pageSize);

  if (currentPage === pagesCount) {
    to = repositoriesCount;
  }

  return (
    <div className='repositories-info'>
      <span className='repositories-info__text'>{from}-{to} of {repositoriesCount} items</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  repositoriesCount: state.userPage.user.repositoriesCount,
  pageSize: state.repositoriesData.pageSize,
  currentPage: state.repositoriesData.currentPage,
});

export default connect(mapStateToProps, null)(ShownRepositoriesInfo);

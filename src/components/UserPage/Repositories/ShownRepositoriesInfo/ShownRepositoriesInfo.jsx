import React from 'react';
import { connect } from 'react-redux';

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
    <div>
      <span>{from}-{to} of {repositoriesCount} items</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  repositoriesCount: state.userPage.user.repositoriesCount,
  pageSize: state.repositoriesData.pageSize,
  currentPage: state.repositoriesData.currentPage,
});

export default connect(mapStateToProps, null)(ShownRepositoriesInfo);

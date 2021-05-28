import React from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import Repository from './Repostory/Repository';
import './Repositories.scss';
import { getRepositoriesThunkCreator } from '../../../redux/search-thunk';
import ShownRepositoriesInfo from './ShownRepositoriesInfo/ShownRepositoriesInfo';
import Preloader from '../../common/Preloader/Preloader';

const Repositories = (props) => {
  const {
    repositories,
    repositoriesCount,
    pageSize,
    login,
    getRepositories,
    isFetching,
  } = { ...props };

  if (repositories.length === 0) {
    return (
      <div className='repositories'>
        <span className='ico ico_empty' />
        <span>Repository list is empty</span>
      </div>
    );
  }

  const handlePageClick = (data) => {
    const { selected } = { ...data };
    const selectedPage = selected + 1;

    getRepositories(login, selectedPage, pageSize);
  };

  const repositoriesComponents = repositories.map((repository) => (
    <Repository
      name={repository.name}
      description={repository.description}
      key={repository.id}
    />
  ));

  const pagesCount = Math.ceil(repositoriesCount / pageSize);

  return (
    <div className='repositories'>
      <h2 className='repositories__title'>Repositories ({repositoriesCount})</h2>
      {isFetching ? <Preloader /> : repositoriesComponents}
      <div className='repositories__container'>
        <ShownRepositoriesInfo />
        <ReactPaginate
          marginPagesDisplayed={1}
          previousLabel=''
          nextLabel=''
          pageRangeDisplayed={2}
          pageCount={pagesCount}
          onPageChange={handlePageClick}
          activeClassName='paginate__item_active'
          containerClassName='paginate__container'
          pageClassName='paginate__item'
          pageLinkClassName='paginate__link'
          breakClassName='paginate__break'
          previousLinkClassName='paginate__previous-link'
          nextLinkClassName='paginate__next-link'
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  repositories: state.repositoriesData.repositories,
  repositoriesCount: state.userPage.user.repositoriesCount,
  login: state.userPage.user.login,
  pageSize: state.repositoriesData.pageSize,
  currentPage: state.repositoriesData.currentPage,
  isFetching: state.repositoriesData.isFetching,
});

export default connect(mapStateToProps, { getRepositories: getRepositoriesThunkCreator })(Repositories);

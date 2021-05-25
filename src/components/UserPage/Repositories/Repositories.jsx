import React from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import Repository from './Repostory/Repository';
import styles from './Repositories.module.css';
import { getRepositoriesThunkCreator } from '../../../redux/search-thunk';

const Repositories = (props) => {
  const {
    repositories,
    repositoriesCount,
    pageSize,
    login,
    currentPage,
    getRepositories,
  } = { ...props };
  const pagesCount = Math.ceil(repositoriesCount / pageSize);

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
  const from = currentPage * 4 - 3;
  let to = currentPage * 4;

  if (currentPage === pagesCount) {
    to = repositoriesCount;
  }

  if (repositories.length === 0) {
    return (
      <div className={styles.repositories}>
        <span className={styles.ico_empty} />
        <span>Repository list is empty</span>
      </div>
    );
  }

  return (
    <div className={styles.repositories}>
      <h2 className={styles.title}>Repositories ({repositoriesCount})</h2>
      {repositoriesComponents}
      <div>
        <span>{from}-{to} of {repositoriesCount} items</span>
      </div>
      <ReactPaginate
        marginPagesDisplayed={1}
        previousLabel=''
        nextLabel=''
        pageRangeDisplayed={2}
        pageCount={pagesCount}
        onPageChange={handlePageClick}
        activeClassName={styles.active}
        containerClassName={styles.container}
        pageClassName={styles.item}
        breakClassName={styles.break}
        previousLinkClassName={styles.previous}
        nextLinkClassName={styles.next}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  repositories: state.repositoriesData.repositories,
  repositoriesCount: state.userPage.user.repositoriesCount,
  login: state.userPage.user.login,
  pageSize: state.repositoriesData.pageSize,
  currentPage: state.repositoriesData.currentPage,
});

export default connect(mapStateToProps, { getRepositories: getRepositoriesThunkCreator })(Repositories);

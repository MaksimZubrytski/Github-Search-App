import React from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import Repository from './Repostory/Repository';
import styles from './Repositories.module.css';
import { getRepositories } from '../../../api/repositoriesApi/provider';
import { setRepositoriesAC } from '../../../redux/repositories-reducer';

const Repositories = (props) => {
  const { repositories, repositoriesCount, pageSize, login, setRepositories } = { ...props };
  const pagesCount = Math.ceil(repositoriesCount / pageSize);

  async function handlePageClick(data) {
    const { selected } = { ...data };

    const selectedPage = selected + 1;

    const repositoriesData = await getRepositories(login, selectedPage, pageSize);

    setRepositories(repositoriesData);
  }

  const repositoriesComponents = repositories.map((repository) => (
    <Repository
      name={repository.name}
      description={repository.description}
      key={repository.id}
    />
  ));

  return (
    <div className={styles.repositories}>
      <h2 className={styles.title}>Repositories ({repositoriesCount})</h2>
      {repositoriesComponents}
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
});

export default connect(mapStateToProps, { setRepositories: setRepositoriesAC })(Repositories);

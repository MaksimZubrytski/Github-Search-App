import React from 'react';
import { connect } from 'react-redux';
import Repository from './Repostory/Repository';
import styles from './Repositories.module.css';

const Repositories = (props) => {
  const { repositories } = { ...props };
  const repositoriesComponents = repositories.map((repository) => (
    <Repository
      name={repository.name}
      description={repository.description}
      key={repository.id}
    />
  ));

  return (
    <div className={styles.repositories}>
      <h2 className={styles.title}>Repositories (222)</h2>
      {repositoriesComponents}
    </div>
  );
};

const mapStateToProps = (state) => ({ repositories: state.repositoriesData.repositories });

export default connect(mapStateToProps, null)(Repositories);

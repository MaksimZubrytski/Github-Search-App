import React from 'react';
import { connect } from 'react-redux';
/*
const ShownRepositoriesInfo = (props) => {
  const {
    repositoriesCount,
    pageSize,
    currentPage,
  } = { ...props };

  console.log('Вызов компоненты');

  const [from, setFrom] = useState(currentPage * pageSize - 3);

  const [to, setTo] = useState(currentPage * pageSize);

  const pagesCount = Math.ceil(repositoriesCount / pageSize);

  useEffect(() => {
    setFrom(currentPage * pageSize - 3);
    setTo(currentPage * pageSize);

    if (currentPage === pagesCount) {
      setTo(repositoriesCount);
    }
  }, [currentPage, repositoriesCount, pagesCount, pageSize]);

  return (
    <div>
      <span>{from}-{to} of {repositoriesCount} items</span>
    </div>
  );
};
*/

const ShownRepositoriesInfo = (props) => {
  const {
    repositoriesCount,
    pageSize,
    currentPage,
  } = { ...props };

  console.log('Вызов компоненты');

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

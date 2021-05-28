const SET_REPOSITORIES = 'SET_REPOSITORIES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_FETCHING_REPOSITORIES = 'SET_IS_FETCHING_REPOSITORIES';

const initialState = {
  repositories: [],
  pageSize: 4,
  defaultPage: 1,
  currentPage: 1,
  isFetching: false,
};

const repositoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REPOSITORIES: {
      return { ...state, repositories: action.repositories };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_IS_FETCHING_REPOSITORIES: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};

export const setRepositoriesAC = (repositories) => ({ type: SET_REPOSITORIES, repositories });

export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const setIsFetchingRepositoriesAC = (isFetching) => ({ type: SET_IS_FETCHING_REPOSITORIES, isFetching });

export default repositoriesReducer;

const SET_REPOSITORIES = 'SET_REPOSITORIES';

const initialState = { repositories: [] };

const repositoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REPOSITORIES: {
      return { ...state, repositories: action.repositories };
    }
    default:
      return state;
  }
};

export const setRepositoriesAC = (repositories) => ({ type: SET_REPOSITORIES, repositories });

export default repositoriesReducer;

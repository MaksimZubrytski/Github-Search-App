const SET_USER = 'SET_USER';
const SET_SEARCH = 'SET_SEARCH';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

const initialState = {
  user: {
    id: null,
    imageUrl: null,
    name: null,
    login: null,
    followers: null,
    following: null,
    repositoriesCount: null,
    url: null,
  },
  isSearch: false,
  isFetching: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return { ...state, user: action.user };
    }
    case SET_SEARCH: {
      return { ...state, isSearch: action.isSearch };
    }
    case SET_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};

export const setUserAC = (user) => ({ type: SET_USER, user });

export const setIsSearchAC = (isSearch) => ({ type: SET_SEARCH, isSearch });

export const setIsFetchingAC = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });

export default userReducer;

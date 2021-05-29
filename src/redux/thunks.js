import { getRepositories } from "../api/repositoriesApi/provider";
import { getUser } from "../api/userApi/provider";
import { setCurrentPageAC, setIsFetchingRepositoriesAC, setRepositoriesAC } from "./repositories-reducer";
import { setIsFetchingAC, setIsSearchQueryAC, setUserAC } from "./user-reducer";

export function getUserThunkCreator(searchValue, defaultPage, pageSize) {
  return async function getUserThunk(dispatch) {
    try {
      dispatch(setIsSearchQueryAC(true));
      dispatch(setIsFetchingAC(true));
      const userData = await getUser(searchValue);

      dispatch(setUserAC(userData));

      const repositoriesData = await getRepositories(searchValue, defaultPage, pageSize);

      dispatch(setIsFetchingAC(false));
      dispatch(setCurrentPageAC(defaultPage));
      dispatch(setRepositoriesAC(repositoriesData));
    } catch (e) {
      dispatch(setRepositoriesAC([]));
      dispatch(setIsFetchingAC(false));
    }
  };
}

export function getRepositoriesThunkCreator(login, selectedPage, pageSize) {
  return async function getRepositoriesThunk(dispatch) {
    dispatch(setIsFetchingRepositoriesAC(true));
    const repositoriesData = await getRepositories(login, selectedPage, pageSize);

    dispatch(setIsFetchingRepositoriesAC(false));
    dispatch(setCurrentPageAC(selectedPage));
    dispatch(setRepositoriesAC(repositoriesData));
  };
}

import { getRepositories } from "../api/repositoriesApi/provider";
import { getUser } from "../api/userApi/provider";
import { setCurrentPageAC, setRepositoriesAC } from "./repositories-reducer";
import { setIsFetchingAC, setIsSearchAC, setUserAC } from "./user-reducer";

export const getUserThunkCreator = (searchValue, defaultPage, pageSize) => async function (dispatch) {
  try {
    dispatch(setIsSearchAC(true));
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

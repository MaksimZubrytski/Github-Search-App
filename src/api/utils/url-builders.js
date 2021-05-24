import { USER_URL } from "../constants/userApi";

export const userApiBuildUrl = (login) => (
  `${USER_URL}/${login}`
);

export const repositoriesApiBuildUrl = (login) => (
  `${USER_URL}/${login}/repos?page=1&per_page=4`
);

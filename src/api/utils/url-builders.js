import { USER_URL } from "../constants/userApi";

export const userApiBuildUrl = (login) => (
  `${USER_URL}/${login}`
);

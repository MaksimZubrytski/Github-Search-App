import { repositoriesApiBuildUrl } from "../utils/url-builders";
import { converterRepositories } from "./converter";

export async function getRepositories(userLogin, currentPage, pageSize) {
  const requestUrl = repositoriesApiBuildUrl(userLogin, currentPage, pageSize);

  const response = await fetch(requestUrl);
  const data = await response.json();

  return converterRepositories(data);
}

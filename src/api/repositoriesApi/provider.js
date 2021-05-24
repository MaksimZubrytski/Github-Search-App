import { repositoriesApiBuildUrl } from "../utils/url-builders";
import { converterRepositories } from "./converter";

export async function getRepositories(userLogin) {
  const requestUrl = repositoriesApiBuildUrl(userLogin);

  const response = await fetch(requestUrl);
  const data = await response.json();

  return converterRepositories(data);
}

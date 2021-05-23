import { userApiBuildUrl } from "../utils/url-builders";
import { converterUser } from "./converter";

export async function getUser(userLogin) {
  const requestUrl = userApiBuildUrl(userLogin);

  const response = await fetch(requestUrl);
  const data = await response.json();

  return converterUser(data);
}

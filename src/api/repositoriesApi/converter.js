import { Repository } from "../../common/entities/Repository";

export const converterRepositories = (data) => (
  data.map((repository) => (
    new Repository({
      id: repository.id,
      name: repository.name,
      description: repository.description,
      url: repository.html_url,
    })
  ))
);

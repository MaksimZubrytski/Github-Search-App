import { User } from "../../common/entities/User";

export const converterUser = (data) => (
  new User({
    id: data.id,
    imageUrl: data.avatar_url,
    name: data.name,
    login: data.login,
    followers: data.followers,
    following: data.following,
  })
);

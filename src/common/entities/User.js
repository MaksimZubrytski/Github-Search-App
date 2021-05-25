export class User {
  constructor({ id, imageUrl, name, login, followers, following, repositoriesCount }) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.name = name;
    this.login = login;
    this.followers = followers;
    this.following = following;
    this.repositoriesCount = repositoriesCount;
  }

  getFollowers() {
    return Math.round((this.followers * (9 / 5)) + 32);
  }

  getFollowing() {
    return Math.round((this.following * (9 / 5)) + 32);
  }
}

function decimalAdjust(type, value, exp) {
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }

  let result = value;
  let exponent = exp;

  result = +result;
  exponent = +exponent;

  result = result.toString().split('e');
  result = Math[type](+(`${result[0]}e${result[1] ? (+result[1] - exponent) : -exponent}`));

  result = result.toString().split('e');

  return +(`${result[0]}e${result[1] ? (+result[1] + exponent) : exponent}`);
}

export class User {
  constructor({ id, imageUrl, name, login, followers, following, repositoriesCount, url }) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.name = name;
    this.login = login;
    this.followers = followers;
    this.following = following;
    this.repositoriesCount = repositoriesCount;
    this.url = url;
  }

  getFollowers() {
    if (this.followers >= 1000) {
      return `${decimalAdjust('round', this.followers / 1000, -1)}${'k'}`;
    }

    return this.followers;
  }

  getFollowing() {
    if (this.following >= 1000) {
      return `${decimalAdjust('round', this.following / 1000, -1)}${'k'}`;
    }

    return this.following;
  }
}

export class User {
    constructor({ id, avatar_url, name, login, followers, following }) {
        this.id = id;
        this.avatar_url = avatar_url;
        this.name = name;
        this.login = login;
        this.followers = followers;
        this.following = following;
    }

    getFollowers() {
        return Math.round((this.followers * (9 / 5)) + 32);
    }

    getFollowing() {
        return Math.round((this.following * (9 / 5)) + 32);;
    }
}
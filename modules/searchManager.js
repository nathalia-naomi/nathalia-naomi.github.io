export class SearchManager {

    constructor() {
        this.posts = JSON.parse(localStorage.getItem('posts')) || [];
    }

    searchPosts(query) {
        return this.posts.filter(post => post.title.includes(query) || post.date === query);
    }
}
export class PostManager {
    constructor() {
        this.posts = JSON.parse(localStorage.getItem('posts')) || [];
    }

    addPost(title, date, content) {
        const post = { title, date, content };
        this.posts.push(post);
        this.save();
    }

    getPosts() {
        return this.posts;
    }

    searchPosts(query) {
        return this.posts.filter(post => post.title.includes(query) || post.date === query);
    }

    removePost(index) {
        const indexFromQuery = this.posts.indexOf(post )
        this.posts.
        this.posts.splice(index, 1);
        this.save();
    }

    save() {
        localStorage.setItem('posts', JSON.stringify(this.posts));
    }
}

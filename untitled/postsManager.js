export class PostsManager {
    constructor() {
        this.posts = JSON.parse(localStorage.getItem('posts')) || [];
    }

    addPost(post) {
        this.posts.push(post);
        this.save();
    }

    searchPosts(query) {
        return this.posts.filter(post => post.title.includes(query) || post.date === query);
    }

    removePost(index) {
        this.posts.splice(index, 1);
        this.save();
    }

    save() {
        localStorage.setItem('posts', JSON.stringify(this.posts));
    }
}

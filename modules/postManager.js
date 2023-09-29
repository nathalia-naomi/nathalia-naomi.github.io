export class PostManager {
    constructor() {
        this.posts = JSON.parse(localStorage.getItem('posts')) || [];
    }

    addPost(post) {
        this.posts.push(post);
        this.save();
    }

    removePost(index) {
        this.posts.splice(index, 1);
        this.save();
    }

    save() {
        localStorage.setItem('posts', JSON.stringify(this.posts));
    }
}

export class PostManager {
    constructor() {
        this.posts = JSON.parse(localStorage.getItem('posts')) || [];
    }

    addPost(post) {
        this.posts.push(post);
        this.save();
    }

    removePost(postToDelete) {
        this.posts = this.posts.filter(post => post.title !== postToDelete.title && post.date !== postToDelete.date);
        this.save();
    }

    save() {
        localStorage.setItem('posts', JSON.stringify(this.posts));
    }

    searchPosts(input, date) {
        let searchFunc;
        if (input && date) {
            searchFunc = (post) => post.title.includes(input) && post.date === date;
        } else if (input) {
            searchFunc = (post) => post.title.includes(input);
        } else if (date) {
            searchFunc = (post) =>  post.date === date;
        }
        return this.posts.filter(searchFunc);
    }
}

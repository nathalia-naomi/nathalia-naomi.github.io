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

import { PostsManager } from './postsManager.js';
import { DialogManager } from './dialogManager.js';
import { MenuManager } from './menuManager.js';

const postForm = document.getElementById('post-form');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const postsList = document.getElementById('posts');

const postsManager = new PostsManager();
const dialogManager = new DialogManager('dialog-box');
const menuManager = new MenuManager();

postForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;

    if (title && description && date) {
        const post = { title, description, date };
        postsManager.addPost(post);
        dialogManager.showMessage('Post added successfully!');
    } else {
        dialogManager.showMessage('All fields are required!', true);
    }
});

searchButton.addEventListener('click', function() {
    const query = searchInput.value;
    const results = postsManager.searchPosts(query);
    postsList.innerHTML = '';
    results.forEach((post, index) => {
        const li = document.createElement('li');
        li.textContent = `${post.date} - ${post.title}: ${post.description}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            postsManager.removePost(index);
            li.remove();
            dialogManager.showMessage('Post removed successfully!');
        });
        li.appendChild(deleteButton);
        postsList.appendChild(li);
    });
});

function displayAllPosts() {
    postsList.innerHTML = '';
    postsManager.posts.forEach((post, index) => {
        const li = document.createElement('li');
        li.textContent = `${post.date} - ${post.title}: ${post.description}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            postsManager.removePost(index);
            li.remove();
            dialogManager.showMessage('Post removed successfully!');
        });
        li.appendChild(deleteButton);
        postsList.appendChild(li);
    });
}

// Call the function to display all posts when the page loads
displayAllPosts();

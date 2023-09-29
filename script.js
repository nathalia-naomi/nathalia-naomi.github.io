import {addToggleModal} from "./modules/modals.js";
import {PostManager} from "./modules/postManager.js";
import {SearchManager} from "./modules/searchManager.js";
import {closePostModal} from "./modules/modals.js";

const postManager = new PostManager();
const searchManager = new SearchManager();

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const postForm = document.getElementById('post-form');
const postList = document.getElementById('posts');

searchButton.addEventListener('click', function () {
    const query = searchInput.value;
    const results = searchManager.searchPosts(query);
    postList.innerHTML = '';
    results.forEach((post, index) => {
        const li = document.createElement('li');
        li.textContent = `${post.date} - ${post.title}: ${post.content}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            postManager.removePost(index);
            li.remove();
            alert('Post removed successfully!');
        });
        li.appendChild(deleteButton);
        postList.appendChild(li);
    });
});

postForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const date = document.getElementById('date').value;

    if (title && content && date) {
        const post = {title, content, date};
        postManager.addPost(post);
        alert('Post added successfully!');
        closePostModal();
    } else {
        alert('All fields are required!');
    }

    displayAllPosts();
});

const displayAllPosts = () => {
    postList.innerHTML = '';
    postManager.posts.forEach((post, index) => {
        const li = document.createElement('li');
        li.textContent = `${post.date} - ${post.title}: ${post.content}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            postManager.removePost(index);
            li.remove();
            alert('Post removed successfully!');
        });
        li.appendChild(deleteButton);
        postList.appendChild(li);
    });
}

window.onload = () => {
    addToggleModal();
    displayAllPosts();
}
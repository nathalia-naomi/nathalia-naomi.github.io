import {addToggleModal} from "./modules/modals.js";
import {PostManager} from "./modules/postManager.js";
import {closePostModal} from "./modules/modals.js";

const postManager = new PostManager();

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const searchDate = document.getElementById('search-date');
const postForm = document.getElementById('post-form');
const postList = document.getElementById('posts');
const searchResults = document.getElementById('results');

searchButton.addEventListener('click', function (event) {
    event.preventDefault();
    const queryInput = searchInput.value;
    const queryDate = searchDate.value;
    const results = postManager.searchPosts(queryInput, queryDate);
    searchResults.innerText = '';

    results.forEach(post => {
        const li = document.createElement('li');
        li.textContent = `${new Date(post.date).toUTCString()} - ${post.title}: ${post.content}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            postManager.removePost({...post});
            li.remove();
            displayAllPosts();
            alert('Post removed successfully!');
        });
        li.appendChild(deleteButton);
        searchResults.appendChild(li);
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
    postList.innerText = '';
    postManager.posts.forEach(post => {
        const postElement = createPostElement(post);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            postManager.removePost(post);
            postElement.remove();
            alert('Post removed successfully!');
        });
        postElement.appendChild(deleteButton);
        const separator = document.createElement('hr');
        postElement.appendChild(separator);
        postList.appendChild(postElement);
    });
}

const createPostElement = (post) => {
    const li = document.createElement('li');
    const title = document.createElement('h3');
    title.textContent = post.title;
    const date = document.createElement('span');
    date.textContent = new Date(post.date).toUTCString();
    const content = document.createElement('p');
    content.textContent = post.content;

    li.appendChild(title);
    li.appendChild(date);
    li.appendChild(content);

    return li;
};

window.onload = () => {
    addToggleModal();
    displayAllPosts();
}
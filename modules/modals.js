const searchModal = document.getElementById("search");
const modal = document.getElementById("menu");
const newPostModal = document.getElementById("new-post");

export function addToggleModal() {
    document.getElementById("menuBtn").onclick = () => {openMenu()};
    document.getElementById("closeMenu").onclick = () => {closeMenu()};

    document.getElementById("openNewPost").onclick = () => {openNewPostModal()}
    document.getElementById("cancel-post").onclick = () => {closePostModal()}

    document.getElementById("openSearch").onclick = () => {openSearch()}
    document.getElementById("cancel-search").onclick = () => {cancelSearch()}
}

function openMenu() {
    modal.style.display = "block";
}

function closeMenu() {
    modal.style.display = "none";
}

function openNewPostModal() {
    newPostModal.showModal();
    document.getElementById("post-form").reset();
}

export function closePostModal() {
    newPostModal.close();
}

function openSearch() {
    searchModal.showModal();
    document.getElementById("search-form").reset();
    document.getElementById("results").innerText = '';
}

function cancelSearch() {
    searchModal.close();
}
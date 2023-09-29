export function addToggleModal() {
    document.getElementById("toggleMenu").onclick = () => {openModal("menuModal")};
    document.getElementById("closeMenu").onclick = () => {closeModal("menuModal")};
    document.getElementById("toggleSearch").onclick = () => {openModal("searchModal")};
    document.getElementById("closeSearch").onclick = () => {closeModal("searchModal")};
    document.getElementById("toggleCreate").onclick = () => {openModal("createModal")};
    document.getElementById("closeCreate").onclick = () => {closeModal("createModal")};
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}


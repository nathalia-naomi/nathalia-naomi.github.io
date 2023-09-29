export class UIManager {
    constructor(postManager) {
        this.postManager = postManager;
        this.postContainer = document.querySelector('main');
    }

    displayPosts() {
        const posts = this.postManager.getPosts();
        this.postContainer.innerHTML = posts.map((post, index) => `
            <div class="post">
                <h2 class="post-title">${post.title}</h2>
                <span class="post-date">${post.date}</span>
                <p class="post-content">${post.content}</p>
                <button class="delete-btn" data-index="${index}">Deletar</button>
            </div>
        `).join('');
    }


    // ... Outros métodos para adicionar, pesquisar e remover postagens na UI ...
}

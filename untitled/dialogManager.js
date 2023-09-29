export class DialogManager {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
    }

    showMessage(message, isError = false) {
        this.element.textContent = message;
        this.element.style.color = isError ? 'red' : 'green';
        setTimeout(() => this.element.textContent = '', 3000);
    }
}

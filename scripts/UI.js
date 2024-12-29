export class UI {
    constructor(library) {
        this.library = library;
        this.bookGrid = document.getElementById('bookGrid');
    }

    renderBooks() {
        const books = this.library.getBooks();
        this.bookGrid.innerHTML = books.map((book, index) => {
            return `
            <div class="book-card">
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Pages:</strong> ${book.pages}</p>
                <p><strong>Read:</strong> ${book.isRead ? 'Yes' : 'No'}</p>
                <button class="toggle-read" data-index="${index}">${book.isRead ? 'Mark as Unread' : 'Mark as Read'}</button>
                <button class="remove-book" data-index="${index}">Remove</button>
            </div>
            `
        }).join('');

        this.bookGrid.querySelectorAll('.toggle-read').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.dataset.index;
                this.library.toggleBookRead(index);
                this.renderBooks();
            });
        });

        this.bookGrid.querySelectorAll('.remove-book').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.dataset.index;
                this.library.removeBook(index);
                this.renderBooks();
            })
        })
    }
}
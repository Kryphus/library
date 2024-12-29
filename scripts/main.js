import { Book } from "./Book.js";
import { Library } from "./Library.js";
import { UI } from "./UI.js";

const library = new Library();
const ui = new UI(library);


const dialog = document.getElementById('bookDialog');
const addBookButton = document.getElementById('addBookButton');
const closeButton = document.getElementById('closeDialogButton');
const bookForm = document.getElementById('bookForm');

addBookButton.addEventListener('click', () => {
    dialog.showModal();
});

closeButton.addEventListener('click', () => {
    dialog.close();
    bookForm.reset();
});

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = parseInt(document.getElementById('pages').value, 10);
    const isRead = document.getElementById('isRead').checked;

    const newBook = new Book(title, author, pages, isRead);
    library.addBook(newBook);

    bookForm.reset();
    dialog.close();
    ui.renderBooks();

})


library.addBook(new Book('The Hobbit', 'J.R.R. Tolkien', 310, true));
library.addBook(new Book('1984', 'George Orwell', 328, false));
ui.renderBooks();



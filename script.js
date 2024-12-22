const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function displayAllBooks() {
    for (let obj of myLibrary) {
        console.table(obj)
    }
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`
}   


const dialog = document.getElementById('bookDialog');
const showButton = document.getElementById('addBookButton')
const closeButton = document.getElementById('closeDialogButton')
const bookForm = document.getElementById('bookForm')
const displayBooks = document.getElementById('displayButton')

showButton.addEventListener('click', () => {
    dialog.showModal();
});

closeButton.addEventListener('click', () => {
    dialog.close();
    bookForm.reset();
});

displayBooks.addEventListener('click', () => {
    displayAllBooks();
})

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('isRead').value;

    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    dialog.close();
})








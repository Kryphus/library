const myLibrary = [];

const dialog = document.getElementById('bookDialog');
const showButton = document.getElementById('addBookButton');
const closeButton = document.getElementById('closeDialogButton');
const bookForm = document.getElementById('bookForm');
const bookGrid = document.getElementById('bookGrid');

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    bookGrid.innerHTML = '';
    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Read:</strong> ${book.isRead ? 'Yes' : 'No'}</p>
        <button class="toggle-read" data-index="${index}">${book.isRead ? 'Mark as Unread' : 'Mark as Read'}</button>
        <button class="remove-book" data-index="${index}">Remove</button>
        `;
        bookGrid.appendChild(bookCard);
    });

    document.querySelectorAll('.toggle-read').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            myLibrary[index].isRead = !myLibrary[index].isRead;
            displayBooks();
        });
    });

    document.querySelectorAll('.remove-book').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            myLibrary.splice(index, 1);
            displayBooks();
        });
    });
}

showButton.addEventListener('click', () => {
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
    addBookToLibrary(newBook);

    bookForm.reset();
    dialog.close();
    displayBooks();
});

myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien', 310, true));
myLibrary.push(new Book('1984', 'George Orwell', 328, false));
displayBooks();

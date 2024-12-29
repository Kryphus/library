export class Library {

    #books = [];

    addBook(book){
        this.#books.push(book);
    }

    removeBook(index) {
        this.#books.splice(index, 1);
    }

    toggleBookRead(index) {
        this.#books[index].toggleReadStatus()
    }

    getBooks() {
        return [...this.#books];
    }

}
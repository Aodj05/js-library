const bookCards = document.querySelector('.cards');
const bookForm = document.querySelector('.form');
const cards = document.querySelector('.book-cards');
const reader = document.querySelector('.read');

//form display
function showForm() {
    document.querySelector('.book-cards').style.display = 'block';
}

//form close
function hideForm() {
    document.querySelector('.book-cards').style.display = 'none';
}

// Library array
let myLibrary = [];


// Object Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Form to get user input and Submit user input form to the library
function addBookForm() {
    bookForm.addEventListener('submit', function(e){
        e.preventDefault();
        let book = new Book(title.value, author.value, pages.value, read.value);
        myLibrary.push(book);
        addBookToLibrary();
        hideForm();
    });
}
addBookForm();

// Add objects into the Library array
function addBookToLibrary() {
    bookCards.innerHTML = ''
    for (var i = 0; i < myLibrary.length; i++) {
        displayBook(myLibrary[i]);
    }
}

function displayBook(book) {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    const bookTitle = document.createElement('h3');
    bookTitle.textContent = book.title;
    bookCard.appendChild(bookTitle);
    const bookAuthor = document.createElement('h4');
    bookAuthor.textContent = `by ${book.author}`;
    bookCard.appendChild(bookAuthor);
    const bookPages = document.createElement('h5');
    bookPages.textContent = `${book.pages} pages`;
    bookCard.appendChild(bookPages);
    bookCards.appendChild(bookCard);
}

// Deletes the book card from the library
function deleteBook(title) {
    let i = myLibrary.findIndex(b => b.title === title);
    myLibrary.splice(i, 1);
}


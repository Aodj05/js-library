// Library array
let myLibrary = [];

// Object Constructor
function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = false;
}

// Add objects into the Library array
function addBookToLibrary() {
    bookCard.innerHTML = ''
    for (var i = 0; i < bookCard.length; i++) {
        displayBook(myLibrary[i]);
    }
}

// Form to get user input
function bookForm() {
    document.getElementById('bookCard').style.display = 'block';
}

// Submit user input form to the library
document.getElementById('submit-form').addEventListener('click', function(e){
    e.preventDefault()
});

// Deletes the book card from the library
function deleteBook(title) {
    let i = books.findIndex(b => b.title === title);
    books.splice(i, 1);
}

// Toggle the status of the book
function getRead() {
    if(document.getElementById("read").value === "red") {
        read.value = "red";
    } else {
        read.value = "green";
    }
}
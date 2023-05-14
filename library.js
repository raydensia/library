let myLibrary = [];

function Book(title, author, type, pages, tags, read, rating) {
  this.title = title;
  this.author = author;
  this.type = type;
  this.pages = pages;
  this.tags = tags;
  this.read = read;
  this.rating = rating;
}

function addBookToLibrary() {
  newBookModal.style.display = 'flex';
}

function displayBooks() {
  myLibrary.forEach(book => {
    let newBook = document.createElement('div');
    newBook.className = `book`;

    let newBookCover = document.createElement('img');
    newBookCover.src = './images/the-way-of-kings.jpg';
    newBookCover.className = 'book-cover';

    let newBookInfo = document.createElement('div');
    newBookInfo.className = 'book-info';

    let newBookAuthor = document.createElement('div');
    newBookAuthor.className = 'book-author';
    newBookAuthor.appendChild(document.createTextNode(`${book.author}`));

    let newBookTitle = document.createElement('div');
    newBookTitle.className = 'book-title';
    newBookTitle.appendChild(document.createTextNode(`${book.title}`));

    let newBookType = document.createElement('div');
    newBookType.className = 'book-type';
    newBookType.appendChild(document.createTextNode(`${book.type}`));

    let newBookPages = document.createElement('div');
    newBookPages.className = 'book-pages';
    newBookPages.appendChild(document.createTextNode(`${book.pages} pages`));

    let newBookRead = document.createElement('div');
    newBookRead.className = 'book-read';
    newBookRead.appendChild(document.createTextNode(`${book.read}`));

    let newBookRating = document.createElement('div');
    newBookRating.className = 'book-rating';
    newBookRating.appendChild(document.createTextNode(`${book.rating}`));

    newBook.appendChild(newBookCover);
    // eslint-disable-next-line max-len
    newBookInfo.append(newBookAuthor, newBookTitle, newBookType, newBookPages, newBookRead, newBookRating);
    newBook.appendChild(newBookInfo);
    bookShelf.appendChild(newBook.cloneNode(true));
  });
}

const newBookButton = document.getElementById('new');
const newBookModal = document.getElementById('new-book-modal');
const submitNewBookButton = document.getElementById('submit-new-book-button');
const bookShelf = document.getElementById('bookshelf');

newBookButton.addEventListener('click', addBookToLibrary);
submitNewBookButton.addEventListener('click', displayBooks);

const book1 = new Book('The Way of Kings', 'Brandon Sanderson', 'fiction', 1007, null, true, 4);
const book2 = new Book('Words of Radiance', 'Brandon Sanderson', 'fiction', 1201, null, true, 5);
const book3 = new Book('Oathbringer', 'Brandon Sanderson', 'fiction', 1387, null, true, 5);
const book4 = new Book('Rhythm of War', 'Brandon Sanderson', 'fiction', 1444, null, true, 3);
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);

displayBooks();


const newBookButton = document.getElementById('new');
const newBookModal = document.getElementById('new-book-modal');
const submitNewBookButton = document.getElementById('submit-new-book-button');
const bookShelf = document.getElementById('bookshelf');
const form = document.getElementById('new-book-form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const typeRadioButtons = document.querySelectorAll('input[name="type"]');
const statusRadioButtons = document.querySelectorAll('input[name="status"]');

const manageBookButton = document.getElementById('manage-book-button');
const manageBookModal = document.getElementById('manage-book-modal');
const submitManageBookButton = document.getElementById('submit-manage-book-button');

let myLibrary = [];

function Book(title, author, type, pages, tags, status, rating) {
  this.title = title;
  this.author = author;
  this.type = type;
  this.pages = pages;
  this.tags = tags;
  this.status = status;
  this.rating = rating;
}

function clearBookShelf() {
  bookShelf.innerHTML = '';
}

function displayBooks() {
  clearBookShelf();
  myLibrary.forEach(book => {
    let newBook = document.createElement('div');
    // add counter here to indicate book number?
    newBook.className = `book`;

    let newBookCover = document.createElement('img');
    // newBookCover.src = './images/the-way-of-kings.jpg';
    newBookCover.src = './images/vintage-book-cover.jpeg';
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

    let newBookStatus = document.createElement('div');
    newBookStatus.className = 'book-status';
    newBookStatus.appendChild(document.createTextNode(`${book.status}`));

    let newBookRating = document.createElement('div');
    newBookRating.className = 'book-rating';
    newBookRating.appendChild(document.createTextNode('5/5'));
    // if (book.rating !== null) {
    //   newBookRating.appendChild(document.createTextNode(`${book.rating}`));
    // }

    let manageBookButtonContainer = document.createElement('div');
    let manageBookButton = document.createElement('button');
    manageBookButtonContainer.className = 'manage-book-button-container';
    manageBookButton.textContent = 'Manage Book';
    manageBookButton.className = 'manage-book-button';
    manageBookButtonContainer.appendChild(manageBookButton);
  //   <div class="manage-book-button-container">
  //   <button class="manage-book-button">Manage Book</button>
  // </div>


    newBook.appendChild(newBookCover);
    // eslint-disable-next-line max-len
    newBookInfo.append(newBookAuthor, newBookTitle, newBookType, newBookPages, newBookStatus, newBookRating, manageBookButtonContainer);
    newBook.appendChild(newBookInfo);
    bookShelf.appendChild(newBook.cloneNode(true));
  });
}

function displayNewBookModal() {
  newBookModal.style.display = 'flex';
  newBookModal.classList.remove('new-book-modal-closed');
}

function closeModal(e) {
  console.log(e.target);
  if (document.getElementById('new-book-modal').contains(e.target)
  && !document.getElementById('new-book-modal-content').contains(e.target)) {
    newBookModal.classList.add('new-book-modal-closed');
    setTimeout(() => {
      newBookModal.style.display = 'none';
    }, 300);
    form.reset();
  }
}

function addBookToLibrary() {
  // let rating = document.getElementById;
  if (title.value === '') {
    // title.style.border = 'solid 1px red';
    return;
  }
  if (author.value === '') {
    // author.style.border = 'solid 1px red';
    return;
  }
  if (pages.value === '') {
    // pages.style.border = 'solid 1px red';
    return;
  }
  let selectedType;
  typeRadioButtons.forEach((radioButton) => {
    if (radioButton.checked) {
      selectedType = radioButton.value;
    }
  });

  let selectedStatus;
  statusRadioButtons.forEach((radioButton) => {
    if (radioButton.checked) {
      selectedStatus = radioButton.value;
    }
  });
  // newBookModal.style.display = 'none';
  newBookModal.classList.add('new-book-modal-closed');
  // eslint-disable-next-line max-len
  let book = new Book(title.value, author.value, selectedType, pages.value, null, selectedStatus, null);
  myLibrary.push(book);
  displayBooks();
}

function formSubmit(event) {
  event.preventDefault();
  form.reset();
  setTimeout(() => {
    newBookModal.style.display = 'none';
  }, 300);
}

function manageBook(event) {

}

newBookButton.addEventListener('click', displayNewBookModal);
// newBookModal.addEventListener('click', closeModal);
// newBookModalContent.addEventListener('click', (e) => e.stopPropagation);
window.addEventListener('click', closeModal);
submitNewBookButton.addEventListener('click', addBookToLibrary);
form.addEventListener('submit', formSubmit);
manageBookButton.addEventListener('click', manageBook)

// displayBooks();

// const book1 = new Book('The Way of Kings', 'Brandon Sanderson', 'fiction', 1007, null, true, 4);
// const book2 = new Book('Words of Radiance', 'Brandon Sanderson', 'fiction', 1201, null, true, 5);
// const book3 = new Book('Oathbringer', 'Brandon Sanderson', 'fiction', 1387, null, true, 5);
// const book4 = new Book('Rhythm of War', 'Brandon Sanderson', 'fiction', 1444, null, true, 3);
// myLibrary.push(book1);
// myLibrary.push(book2);
// myLibrary.push(book3);
// myLibrary.push(book4);
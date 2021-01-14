let bookshelf = [
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        pages: 295,
        read: true
    }
];
function Book(title, author, pages, read) {
    this.title = `Title: ${title}`;
    this.author = `Author: ${author}`;
    this.pages = `Pages: ${pages}`;
    this.read = read;
};

function addBook(title, author, pages, read) {
    const bookToAdd = new Book(title, author, pages, read);
    bookshelf.push(bookToAdd);

};



//Creates books in the browser.
function render() {

    const books = document.querySelectorAll('.book');
    
    for (let i = 0; i < bookshelf.length; i++){
        createBook(bookshelf[i]);
    }

}



//Creates the book DOM elements.
function createBook(book) {

    const bookshelfDiv = document.querySelector('#bookshelf-container');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const readButton = document.createElement('button');

    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', bookshelf.indexOf(book));

    titleDiv.classList.add('title');
    titleDiv.innerText = book.title;
    bookDiv.appendChild(titleDiv);

    authorDiv.classList.add('author');
    authorDiv.innerText = book.author;
    bookDiv.append(authorDiv);

    pagesDiv.classList.add('pages');
    pagesDiv.innerText = book.pages;
    bookDiv.appendChild(pagesDiv);

    readButton.classList.add('read');
    if (book.read === true) {
        readButton.innerText = 'Read';
    } else {
        readButton.innerText = 'Not Read';
    }
    bookDiv.appendChild(readButton);


    bookshelfDiv.appendChild(bookDiv);



}


addBook('aaa', 'bbb', 25, false);
console.log(bookshelf);
render();
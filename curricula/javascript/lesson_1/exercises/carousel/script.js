/*
This exercise is meant for getting more familiar with functions, objects and arrays.
Please read through all the instructions before you start writing your code.

You are a fan quilting and are keeping track of which quilting books you have 
read. 

You already have a list of books available from books.js file object, 
all you need to do is add them to your library. 
This books object is pulled in from google books api, as you can see it 
has a lot of information but this is standard when dealing with external APIs.

Open index.html and have a look what you have available. 
By clicking left and right buttons you should be able to see the information about 
each read book.

The infrastrucure of showing these books is already set up. 

All you need to do is:

1. Create and array named readBooks, should start off empty
and eventually hold book objects. Each object should look something like this
it is important to name the keys as they are in the example below.
{
    title: string,
    image: string,
    authors: array,
    averageRating: number, 
    epub: boolean,
    shortDescription: string - Only the first sentence of a description.
}

2. Create a function named read, this function should accept one parameter, 
the body of the function should create a book object 
and push it into the readBooks array. 

Clicking each book in the Books list calls your read() function and passes a book
into it (already set up for you), this book item has a lot of information and we need to narrow it
down to only have the information we need. 



Hint: most of the information is under volumeInfo key
Hint: some keys are not always defined, how do you make sure you will not end up with something undefined in your book object

Bonus: You should only be able to read a book once

How to start: define read function which accepts an argument, log that argument to the
browser console to see what you have available.
*/

/*Please write your code here*/

readBooks = []
const read = (book) => {
    if (readBooks.find((readBook) => readBook.title === book.volumeInfo.title )) return
    const bookDetails = {
        title: book.volumeInfo.title,
        image: book.volumeInfo.imageLinks.thumbnail,
        authors: book.volumeInfo.authors,
        averageRating: book.volumeInfo.averageRating ? book.volumeInfo.averageRating : 'Rating not available',
        epub: book.accessInfo.epub ? book.accessInfo.epub.isAvailable : false,
        shortDescription: `${book.volumeInfo.description.split('.')[0]}.`
    }
        readBooks.push(bookDetails)
}







/*******************************************************/
/* This is the code which puts the content on the page, please have look
if you are curious but there is no need to change anything below*/

//Create a carousel item
const carousel = document.querySelector('#carousel')
const createCarouselItem = (book) => {
    const carouselItem = document.createElement('div')
    const itemDetails = `<img src=${book.image}>
    <h4>${book.title}</h4>
    <p>${book.shortDescription}</p>
    <p>Authors ${book.authors.join(', ')}</p>
    <p>${book.averageRating}</p>
    <p>E-publication is ${book.epub ? 'is available' : 'is not available'}</p>`
    carouselItem.innerHTML = itemDetails
    return carouselItem
}

//Add a list of books to read on the page
const list = document.querySelector('ul')
books.items.forEach((book) => {
    const li = document.createElement('li')
    li.append(book.volumeInfo.title)
    li.addEventListener('click', () => {
        read(book)
        displayBooksRead.innerHTML = readBooks.length
        carousel.innerHTML = ``
        carousel.append(createCarouselItem(readBooks[readBooks.length - 1]))
    })
    list.append(li)
})

//Allow user to see their read books
currentBook = 0
const next = document.querySelector('#next')
next.addEventListener('click', () => {
    if (readBooks.length === 0) return
    currentBook = currentBook === readBooks.length ? 1 : currentBook + 1
    carousel.innerHTML = ``
    carousel.append(createCarouselItem(readBooks[currentBook - 1]))
})

const prev = document.querySelector('#prev')
prev.addEventListener('click', () => {
    if (readBooks.length === 0) return
    currentBook = currentBook === 0 ? readBooks.length : currentBook
    currentBook = currentBook === 1 ? readBooks.length : currentBook - 1
    carousel.innerHTML = ``
    carousel.append(createCarouselItem(readBooks[currentBook - 1]))
})

const displayBooksRead = document.querySelector('span')
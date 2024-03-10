import { utilService } from "./util.service.js"
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'

export const bookService = {
    query,
    remove
}

_createBooks()


function query() {
    return storageService.query(BOOK_KEY)
        .then(books => {
            // if (gFilterBy.txt) {
            //     const regex = new RegExp(gFilterBy.txt, 'i')
            //     cars = cars.filter(car => regex.test(car.vendor))
            // }
            // if (gFilterBy.minSpeed) {
            //     cars = cars.filter(car => car.maxSpeed >= gFilterBy.minSpeed)
            // }
            return books
        })
}

function remove(bookId) {
    return storageService.remove(BOOK_KEY, bookId)
}


function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = []
        books.push(_createBook('The adventures of puki',88,'NIS'))
        books.push(_createBook('Muki and friends',120,'USD'))
        books.push(_createBook('Dingo the modern hero',45,'EUR'))
        utilService.saveToStorage(BOOK_KEY, books)
    }
    
}

function _createBook(title,price,currency) {
    return {
        id: utilService.makeId(),
        title: title,
        description: `placerat nisi sodales suscipit tellus`,
        thumbnail: `http://coding-academy.org/books-photos/
    20.jpg`,
        listPrice: {
            amount: price,
            currencyCode: currency,
            isOnSale: false
        }
    }
}

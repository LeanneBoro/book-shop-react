
const { useState, useEffect } = React
const { Link } = ReactRouterDOM

import { bookService } from "../services/book-service.js"
import { BookList } from "../cmps/Booklist.jsx"
import { BookDetails } from "../cmps/Bookdetails.jsx"
import { BookFilter } from "../cmps/BookFilter.jsx"
import { eventBusService } from "../services/event-bus.service.js"

export function BookIndex() {
    const [books, setBooks] = useState(null)
    const [isEdit, setIsEdit] = useState(false)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const [selectedBook, setSelectedBook] = useState(null)

    useEffect(() => {
        loadBooks()
    }, [filterBy])


    function onRemoveBook(bookId) {
        bookService.remove(bookId)
            .then(() => {
                setBooks((prevBooks) => prevBooks.filter(book => book.id !== bookId))
                eventBusService.emit('show-user-msg', {type: 'success', txt: 'car removed' })
            })
            .catch((err) => {
                console.log('Had issues removing book', err)
                eventBusService.emit('show-user-msg', {type: 'error', txt: 'you suck' })
            })
    }

    function onSelectBook(book) {
        setSelectedBook(book)
        eventBusService.emit('show-user-msg', {type: 'success', txt: 'lol' })
    }


    function loadBooks() {
        bookService.query(filterBy)
            .then((books) => {
                setBooks(books)
            })
    }
    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
      }
    
    if (!books) return <div>....loading</div>
    return (
        <main>
          {!selectedBook && (
            <React.Fragment>
              <BookFilter onSetFilter={onSetFilter} filterBy={filterBy} />
              {books.length && (
                <BookList
                  books={books}
                  onSelectBook={onSelectBook}
                  onRemoveBook={onRemoveBook}
                />
              )}
              {!books.length && <div> No Books found...</div>}
            </React.Fragment>
          )}
    
          {selectedBook && (
            <section>
              {!isEdit && (
                <BookDetails
                  book={selectedBook}
                  onGoBack={() => setSelectedBook(null)}
                  onGoEdit={() => setIsEdit(true)}
                />
              )}
    
              {isEdit && (
                <BookEdit
                  book={selectedBook}
                  onUpdate={onUpdateBook}
                  onCancelEdit={() => setIsEdit(false)}
                />
              )}
            </section>
          )}
        </main>
      )
}
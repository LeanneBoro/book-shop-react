const { useState, useEffect } = React
import { bookService } from "../services/book-service.js"
import { BookList } from "../cmps/Booklist.jsx"
import { Bookdetails } from "../cmps/Bookdetails.jsx"
import { BookFilter } from "../cmps/BookFilter.jsx"

export function BookIndex() {
    const [books, setBooks] = useState(null)
    const [selectedBook, setSelectedBook] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        loadBooks()
    }, [filterBy])


    function onRemoveBook(bookId) {
        bookService.remove(bookId)
            .then(() => {
                setBooks((prevBooks) => prevBooks.filter(book => book.id !== bookId))
            })
            .catch((err) => {
                console.log('Had issues removing book', err)
            })
    }

    function onSelectBook(book) {
        setSelectedBook(book)
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
    return <section className="book-index">
        {!selectedBook && <BookList books={books} onRemoveBook={onRemoveBook} onSelectBook={onSelectBook} />}

        <BookFilter onSetFilter={onSetFilter} filterBy={filterBy} />
        {
            selectedBook && <Bookdetails
                book={selectedBook}
                onGoBack={() => onSelectBook(null)}
            />
        }
    </section>
}
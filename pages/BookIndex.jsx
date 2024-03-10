const { useState, useEffect } = React
import { bookService } from "../services/book-service.js"
import { BookList } from "../cmps/Booklist.jsx"
import { Bookdetails } from "../cmps/Bookdetails.jsx"



export function BookIndex() {
    const [books, setBooks] = useState(null)
    const [selectedBook, setSelectedBook] = useState(null)

    useEffect(() => {
        loadBooks()
    }, [])

    function showDetail(book) {

    }

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
        bookService.query()
            .then((books) => {
                setBooks(books)
            })


    }
    if (!books) return <div>....loading</div>
    return <section className="book-index">
        {!selectedBook && <BookList books={books} onRemoveBook={onRemoveBook} onSelectBook={onSelectBook} showDetail={showDetail} />}

        {
            selectedBook && <Bookdetails
                book={selectedBook}
                onGoBack={() => onSelectBook(null)}
            />
        }
    </section>
}
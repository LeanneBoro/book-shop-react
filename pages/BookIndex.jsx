const { useState, useEffect } = React
import { bookService } from "../services/book-service.js"
import { BookList } from "../cmps/Booklist.jsx"




export function BookIndex() {
    const [books, setBooks] = useState(null)
    const [selectedBook, setSelectedBook] = useState(null)

    useEffect(() => {
        loadBooks()
    }, [])
    
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
        console.log(book)
    }

    function loadBooks() {
        bookService.query()
            .then((books) => {
                setBooks(books)
            })


    }
    if (!books) return <div>....loading</div>
    return <BookList books={books} onRemoveBook={onRemoveBook} onSelectBook={onSelectBook} />

}
import { bookService } from "../services/book-service.js"



export function BookIndex() {
    const [books, setBooks] = useState(null)
    return <section className="book-index">
        <h1>Book</h1>
    </section>
}
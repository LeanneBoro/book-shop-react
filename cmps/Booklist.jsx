import { BookPreview } from "./bookpreview.jsx"
import {Bookdetails} from "./BookDetails.jsx"
const { Link } = ReactRouterDOM

export function BookList({ books, onSelectBook, onRemoveBook }) {

    if (!books.length) return <div>No books to show</div>
    return (

        <ul className="book-list">
            {books.map(book => (
                <li key={book.id} className="flex column align-center">
                    <BookPreview book={book} />

                    <div className="book-actions">
                        <Link to={`/book/edit/${book.id}`}>
                            <button>Update</button>
                        </Link>

                        <Link to={`/book/${book.id}`}>
                            <button>Details</button>
                        </Link>

                        <button onClick={() => onRemoveBook(book.id)}>Remove</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}
import { BookPreview } from "./bookpreview.jsx"

export function BookList({ books, onSelectBook, onRemoveBook}) {

if (!books.length) return <div>No books to show</div>
return <ul className="car-list">
    {
        books.map(book => <li key={book.id}>
            <BookPreview book={book} />
            <div className="car-actions">
                <button className="remove-btn" onClick={() => onRemoveBook(book.id)}>X</button>
                <button onClick={() => { onSelectBook(book) }}>Select book</button>
            </div>
        </li>)
    }
</ul>
} 

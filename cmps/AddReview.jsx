const { useState, useEffect } = React
const { useNavigate, useParams } = ReactRouter
import { bookService } from "../services/book-service.js"

export function Review({ bookId, addReview}) {

    const [reviewToEdit, setReviewToEdit] = useState(bookService.getEmptyReview())

    function onAddReview(ev) {
        ev.preventDefault()
        addReview(reviewDetails)
      }


    function handleChange({ target }) {
        const field = target.name
        let value = target.value

            switch (target.type) {
                case 'number':
                case 'range':
                    value = +value || ''
                    break
    
                case 'checkbox':
                    value = target.checked
                    break
    
                default:
                    break
            }
    
            setReviewToEdit(prevReviewToEdit => ({ ...prevReviewToEdit, [field]: value }))
    }


    const {fullName,rating,date} = reviewToEdit

    return (
        <section className="review">
            <form onSubmit={onAddReview}>
                <label htmlFor="full-name">name:</label>
                <input
                    type="text"
                    id="full-name"
                    placeholder="Enter Full name"

                    name="full-name"
                    onChange={handleChange}
                    value={fullName}
                />

                <label htmlFor="rating">rating:</label>
                <input
                    type="number"
                    id="rating"
                    placeholder="Enter rating"

                    name="rating"
                    onChange={handleChange}
                    value={rating}
                />

                <label htmlFor="date">Read at</label>
                <input type="date"
                    id="date"
                    name="Read"
                    value={date}
                    min="2000-05-04"
                    max="2024-01-01" />
                <button>Save</button>
            </form>
        </section>
    )
}
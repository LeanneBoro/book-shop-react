const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouter
const { Link } = ReactRouterDOM

import { bookService } from '../services/book.service.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

import { AddReview } from '../cmps/AddReview.jsx'
import { ReviewsList } from '../cmps/ReviewsList.jsx'

export function BookDetails() {
  const [isLoading, setIsLoading] = useState(true)
  const [book, setBook] = useState(null)
  const [isOnReview, setIsOnReview] = useState(false)

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadBook()
  }, [params.bookId])

  function loadBook() {
    setIsLoading(true)
    bookService
      .get(params.bookId)
      .then(setBook)
      .catch(err => {
        console.log('Had issues with loading book:', err)
        navigate('/book')
      })
      .finally(() => setIsLoading(false))
  }

  function addReview(review) {
    bookService
      .addReview(book.id, review)
      .then(savedBook => {
        setBook(savedBook)
        showSuccessMsg(`Review added successfully to ${savedBook.title}`)
      })
      .catch(err => {
        console.log('Had issues with adding review:', err)
        showErrorMsg('Could not add review')
      })
      .finally(() => setIsOnReview(false))
  }

  function onRemoveReview(reviewId) {
    bookService
      .removeReview(book.id, reviewId)
      .then(savedBook => {
        setBook(savedBook)
        showSuccessMsg(`Review removed successfully from ${savedBook.title}`)
      })
      .catch(err => {
        console.log('Had issues with removing review:', err)
        showErrorMsg('Could not remove review')
      })
      .finally(() => setIsOnReview(false))
  }

  function getReadingDesc() {
    const { pageCount } = book
    if (pageCount > 500) return '(Serious Reading)'
    else if (pageCount > 200) return '(Descent Reading)'
    else if (pageCount < 100) return '(Light Reading)'

    return ''
  }

  function getPublishDesc() {
    const { publishedDate } = book
    const yearsPassed = new Date().getFullYear() - publishedDate

    if (yearsPassed > 10) return '(Vintage)'
    else if (yearsPassed < 1) return '(New)'

    return ''
  }

  function getPriceClass() {
    const { amount } = book.listPrice
    if (amount > 150) return 'red'
    else if (amount < 20) return 'green'

    return ''
  }

  if (isLoading) return <div>Loading...</div>

  const { amount, currencyCode, isOnSale } = book.listPrice

  return (
    <section className="book-details flex justify-between">
      {isOnReview && (
        <AddReview
          bookId={params.bookId}
          addReview={addReview}
        />
      )}

      <div>
        <h2 className="book-title">{book.title}</h2>
        <h3 className="sub-title">{book.subtitle}</h3>
        <p className="book-authors">
          {book.authors},{' '}
          <span className="book-date">
            {book.publishedDate} {getPublishDesc()}
          </span>
        </p>

        <p className="book-desc">{book.description}</p>

        <div className="book-details-container flex justify-between">
          <div className="extra-details flex column">
            <div className="about-book">
              <span className="book-pages">
                {book.pageCount} pages {getReadingDesc()} ,
              </span>
              <span className="book-categories">
                {book.categories.join(' | ')},
              </span>
              <span className="book-language">{book.language}</span>
            </div>

            <p className={`book-price ${getPriceClass()}`}>
              Price:{' '}
              <span>
                {amount + ' '}
                {currencyCode}
              </span>
            </p>
            {isOnSale && <p className="sale">On sale!</p>}
          </div>

          {book.reviews && book.reviews.length && (
            <ReviewsList book={book} onRemoveReview={onRemoveReview} />
          )}
        </div>

        <Link to="/book">
          <button>Go back</button>
        </Link>

        <button
          onClick={() => setIsOnReview(prevIsOnReview => !prevIsOnReview)}
        >
          Add Review
        </button>
      </div>

      <img src={book.thumbnail} alt="Book's Cover" />
    </section>
  )
}

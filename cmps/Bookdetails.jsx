
	export function BookDetails({ book, onGoBack, onGoEdit }) {
    

		function getPublisheDate() {
			const currYear = new Date().getFullYear()
			let publishedYear = book.publishedDate
			let diff = currYear - publishedYear
			if (diff > 10) publishedYear += ' - Vintage';
			else if (diff < 1) publishedYear += ' - NEW!'
			return publishedYear
		}
	
		function getPageCount() {
			// Switch case is fine
			let pageCount = book.pageCount
			if (book.pageCount > 500) pageCount += ' - Long reading'
			else if (book.pageCount > 200) pageCount += ' - Decent reading'
			else if (book.pageCount < 100) pageCount += ' - Light rading'
			return pageCount
		}
	
		function getPriceClass() {
			if (book.listPrice.amount > 150) return 'red'
			else if (book.listPrice.amount < 20) return 'green'
			else return ''
		}
	
		return (
			<section className="book-details-container">
				<div className="book-details-title">{book.title}</div>
				<div className="book-details-subtitle">{book.subtitle}</div>
				<div className="book-thumbnail-container">
					{book.listPrice.isOnSale&& <div className="book-details-on-sale">On-sale!</div>}
					<img src={book.thumbnail} />
				</div>
	
				<div className="book-details-info">
	
					<div className="book-details-info-row">
						<span className="book-details-info-title">Year publish:</span>
						<span className="book-details-info-text">{getPublisheDate()}</span>
					</div>
	
					<div className="book-details-info-row">
						<span className="book-details-info-title">Author</span>
						<span className="book-details-info-text"></span>
					</div>
	
					<div className="book-details-info-row">
						<span className="book-details-info-title">Language:</span>
						<span className="book-details-info-text"></span>
					</div>
	
					<div className="book-details-info-row">
						<span className="book-details-info-title">Categories:</span>
						<span className="book-details-info-text"></span>
					</div>
	
					<div className="book-details-info-row">
						<span className="book-details-info-title">Pages:</span>
						<span className="book-details-info-text">{getPageCount()}</span>
					</div>
	
					<div className="book-details-info-row">
						<span className="book-details-info-title">Price:</span>
						<span className={"book-details-info-text " + getPriceClass()}>
							only {book.listPrice.amount}
							{/* {(!book.listPrice.isOnSale) ? ' (on sale)' : ''} */}
						</span>
					</div>
	
					<div className="book-details-buy-container">
						{(book.listPrice.isOnSale) &&
							<button className="buy-book-btn" onClick={() => alert(`HA! ma ze po hanut?`)}>
								Buy it now!
							</button>
						}
						<div className="actions-btns">
							<button className="go-back-btn" onClick={onGoBack}>⬅ Go back</button>
							<button className="go-edit-btn" onClick={onGoEdit}>Go Edit ➡</button>
						</div>
					</div>
	
					<div className="book-details-info-row">
						<span className="book-details-info-title">Description:</span>
					</div>
				</div>
			</section>
		)
	}

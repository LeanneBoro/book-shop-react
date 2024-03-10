
export function BookPreview({ book }) {
	return <article className="book-preview">
		<h2>{book.title}</h2>
		<h5>price : {book.listPrice.amount} {book.listPrice.currencyCode}</h5>
	</article>
}
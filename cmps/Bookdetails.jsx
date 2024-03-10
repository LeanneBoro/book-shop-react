

export function CarDetails({ book, onGoBack }) {

	// Render time methods
	// function getSpeedClass() {
	// 	if (car.maxSpeed > 100) return 'fast'
	// 	else if (car.maxSpeed < 80) return 'slow'
	// 	else return ''
	// }
	
	return <section className="book-details">
		<button onClick={onGoBack}>Go back</button>
		<h1>Title : {book.title}</h1>
		{/* <h5 className={getSpeedClass()}>price: {book.listPrice.amount} {book.listPrice.currencyCode}</h5> */}
		<p>description: {book.description}</p>
	</section>
}
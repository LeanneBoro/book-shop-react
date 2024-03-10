export function AppHeader({setPage}) {

	function onSetPage(ev, page) {
		ev.preventDefault()
		setPage(page)
	}

	return <header className="app-header">
		<h1>Miss Book!</h1>
		<nav className="app-nav">
			<a href="" onClick={(ev) => onSetPage(ev, 'home')} >HomePage</a> 
			<a href="" onClick={(ev) => onSetPage(ev, 'about')} >AboutUs</a> 
			<a href="" onClick={(ev) => onSetPage(ev, 'book')}>BooksIndex</a>
		</nav>
	</header> 
}
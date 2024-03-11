const { useState, useEffect } = React

export function BookFilter({ onSetFilter, filterBy }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

  useEffect(() => {
    onSetFilter(filterByToEdit)
  }, [filterByToEdit])

  
  function handleChange(ev) {
    ev.preventDefault()
    const field = ev.target.name
	
    const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value
	console.log(value)
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
  }

  function onFilter(ev) {
    ev.preventDefault()
    onSetFilter(filterByToEdit)
  }

  const { title, price } = filterByToEdit

  return (
    <section className='filter-container'>
      <div className='filter-inside-container'>
        <h2 className='filter-header'>Filter books:</h2>
        <form className='books-filter' onSubmit={onFilter}>
          <div className='filter-section'>
            <label htmlFor='byTitle'>Title:</label>
            <input
              type='text'
              id='byTitle'
              name='title'
              value={title}
              onChange={handleChange}
              className='input'
              placeholder='Search by title...'
            />
          </div>

          <div className='filter-section'>
            <label htmlFor='byAuthor'>Price:</label>
            <input
              type='number'
              id='price'
              name='price'
              value={price}
              onChange={handleChange}
              className='input'
              placeholder='Search by price'
            />
          </div>
          <button className='filter-btn'>Filter</button>
        </form>
      </div>
    </section>
  )
}

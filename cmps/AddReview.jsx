const { useState, useEffect } = React
const { useNavigate, useParams } = ReactRouter

export function Review() {
    const { carId } = useParams()

    function handleChange({ target }) {
        const field = target.name
        let value = target.value
        console.log(field)
        console.log(value)
    }

    function onSaveReview(ev) {
		ev.preventDefault()

	}


    return (
        <section className="review">
            <form onSubmit={onSaveReview}>
                <label htmlFor="full-name">name:</label>
                <input
                    type="text"
                    id="full-name"
                    placeholder="Enter Full name"

                    name="full-name"
                    onChange={handleChange}
                />

                <label htmlFor="rating">rating:</label>
                <input
                    type="number"
                    id="rating"
                    placeholder="Enter rating"

                    name="rating"
                    onChange={handleChange}
                />

                <label htmlFor="date">Read at</label>
                <input type="date"
                    id="date"
                    name="Read"
                    value="2018-07-22"
                    min="2010-01-01"
                    max="2024-01-01" />
                <button>Save</button>
            </form>
        </section>
    )
}
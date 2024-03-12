const { useState, useEffect } = React

export function BookAdd() {
   const [findBookBy, setFindBookBy] = useState('')



   function handleChange({ target }) {
      let value = target.value
      console.log(value)
      setFindBookBy(value)
   }
   return (
      <section className="Add">
         <label htmlFor="add">Add book:</label>
         <input
            type="text"
            id="add"
            placeholder="Add book"
            name="add"
            onChange={handleChange}
            value={findBookBy}
         />
      </section>

   )
}
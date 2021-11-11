import './styles.css'

export const TextInput = ({ searchValue, handleChange }) => {
  return(
      <div>
        <p className='titleSearch'>
          Buscar
        </p>
        <input 
            onChange={handleChange}
            value = {searchValue}
            type="search"
            className='searchField'
            placeholder='Type your search'
         />
      </div>
   )
}





import React from 'react'

const SearchInput = ({setPokeSearch, setOptionType}) => {
  const handleSubmit = e => {
    e.preventDefault()
    setPokeSearch(e.target.searchText.value.trim().toLowerCase())
    e.target.searchText.value = ""
    setOptionType('All')
  }
  return (
    <form className='pokedex__form' onSubmit={handleSubmit}>
      <input className='pokedex__input' placeholder=' type your pokemon' type="text" id='searchText'/>
      <button className='pokedex__btn'>Search</button>

    </form>
  )
}

export default SearchInput
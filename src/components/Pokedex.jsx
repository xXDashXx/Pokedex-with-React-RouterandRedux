import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PaginationPoke from './PaginationPoke'
import PokemonCard from './Pokedex/PokemonCard'
import SearchInput from './Pokedex/SearchInput'
import SelectType from './Pokedex/SelectType'
import HeaderPoke from './shared/HeaderPoke'
import './styles/pokedex.css'

const Pokedex = () => {
  
  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [optionType, setOptionType] = useState('All')
  
  // const [currentPage, setcurrentPage] = useState(1)
  // const [cardPerPage, setCardPerPage] = useState(0)
  useEffect(() => {
    if(optionType !== 'All'){
      // Aquí se hace la lógica de cuando el usuario quieres filtrar por tipo
      const URL = `https://pokeapi.co/api/v2/type/${optionType}/`
      axios.get(URL)
        .then(res => {
          const arr = res.data.pokemon.map(e => e.pokemon)
          setPokemons({results: arr})
        })
        .catch(err => console.log(err))
    } else if(pokeSearch){
      // Aquí se hace la lógica cuando el usuario busca por el input
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`

      const obj = {
        results: [{url}]
      }
      setPokemons(obj)
    } else {
      // Aquí se hace la lógica cuando el usuario quiere todos los pokemons
      const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=90&offset=0'
      axios.get(URL)
        .then(res => setPokemons(res.data))
        .catch(err => console.log(err))
    }
  }, [pokeSearch, optionType,/* cardPerPage*/])

   //limit=60&offset=60/
   
  
  //  console.log(postPerPage)


  const nameTrainer = useSelector(state => state.nameTrainer)

  //const lastIndex = currentPage * cardPerPage
  //const firstIndex = lastIndex - cardPerPage
  //const currentCard = pokemons.slice(firstIndex, lastIndex)
  
  // const handleClick = (e) =>{
  //   e.
  // }
  
  return (
    <div className='pokedex-container'>
      <HeaderPoke />
      <h1 className='pokedex__title '>Welcome {nameTrainer}, Cach'em all</h1>
      <SearchInput setPokeSearch={setPokeSearch} setOptionType={setOptionType}/>
      <SelectType
        optionType={optionType}
        setOptionType={setOptionType}
        setPokeSearch={setPokeSearch}
      />
      <div className='cards-container'>
        {
          pokemons && pokemons.results.map(pokemon => (
            <PokemonCard
              key={pokemon.url}
              url={pokemon.url}
            />
          ))
        }
      </div>
     {/*<div>
       { <PaginationPoke
          pokemons={pokemons}
          cardPerPage={cardPerPage}
          setCardPerPage={setCardPerPage}
          currentPage={currentPage}
          setcurrentPage={setcurrentPage}
          // totalCards={pokemons.length}
          // handleClick={handleClick}
        /> }
       </div>*/}  
    </div>
  )
}

export default Pokedex
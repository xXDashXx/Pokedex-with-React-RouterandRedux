import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './styles/pokemonDetails.css'


const PokemonDetails = () => {

  const { name } = useParams()
  const [pokemonDetail, setPokemonDetail] = useState()
  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`
    axios.get(URL)
      .then(res => setPokemonDetail(res.data))
      .catch(err => console.log(err))
  }, [])

  console.log(pokemonDetail)

  return (
    <div className='pokemonDetail-container'>
      <div className='pokemonDetail__info-box'>
        <div className='pokemonDetail__info'>
          <div className='pokeDetImg'>
          <img className='img' src={pokemonDetail && pokemonDetail.sprites.other["official-artwork"]["front_default"]} alt="" />
          </div>
          <div className='pokeDetInfo'>
          <span className='card__name'> {pokemonDetail?.name} </span>
          <p>#<span> {pokemonDetail?.id} </span></p>
          <span>Abilities:</span>
          <ul className='abilities__list'>
            {
              pokemonDetail && pokemonDetail.abilities.map(slot => (
                <li className='card__item-type' key={slot.ability.url}> {slot.ability.name} </li>
              ))
            }
          </ul>
          </div>
        </div>
      </div>
      <div className='moves__list-container'>
          <div className='movesTitle'>
          <span>Movements:</span>
          </div>
          <div className='moves__list'>
          {
            pokemonDetail && pokemonDetail.moves.map(slot1 => (
              <li key={slot1.move.url}> {slot1.move.name} </li>
            ))

          }
          </div>
        </div>
    </div>
  )
}

export default PokemonDetails
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import StatPokemon from './StatPokemon'
import { useNavigate } from 'react-router-dom'
import '../styles/pokemonCard.css'


const PokemonCard = ({ url }) => {

    const [pokemon, setPokemon] = useState()

    const navigate = useNavigate()
    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [])

    //console.log(pokemon)

    const handleClick=()=> navigate(`/pokedex/${pokemon.name}`)

    return (
        <div onClick={handleClick} className='card'>
            <header className={`card__header bg-${pokemon?.types[0].type.name}`}>
                <img className='card__avatar' src={pokemon?.sprites.other["official-artwork"]["front_default"]} alt="" />
            </header>
            <div className='cont_info'>
            <section className='card__body'>
                <span className='card__name'> {pokemon?.name} </span>
                <ul className='card__list-type'>
                    {
                        pokemon && pokemon.types.map(slot => (
                            <li className='card__item-type' key={slot.type.url}> {slot.type.name} </li>
                        ))

                    }
                </ul>
            </section>
            <hr className='card__hr' />
            <footer className='card__footer'>
                <ul className='card__list-stats'>
                    {
                        pokemon && pokemon.stats.map(stat=>(
                            <StatPokemon
                              key={stat.stat.url}
                              infoStat={stat}
                            />
                        ))
                    }
                </ul>
            </footer>
            </div>
        </div>
    )
}

export default PokemonCard
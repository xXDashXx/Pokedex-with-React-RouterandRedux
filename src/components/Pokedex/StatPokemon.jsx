import React from 'react'

const StatPokemon = ({infoStat}) => {
  return (
    <li>
        <span> {infoStat.stat.name}: </span>
        <p> {infoStat["base_stat"]} </p>
    </li>
  )
}

export default StatPokemon
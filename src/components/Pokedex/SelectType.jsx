import React, { useEffect, useState } from 'react'
import axios from 'axios'

const SelectType = ({optionType, setOptionType, setPokeSearch}) => {

  const [listTypes, setListTypes] = useState()

  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/type'
    axios.get(URL)
      .then(res => setListTypes(res.data.results))
      .catch(err => console.log(err))
  }, [])

  const handleChange = e => {
    setOptionType(e.target.value)
    setPokeSearch('')
  }

    
  return (
    <div className='selectTipe-container'>
    <select value={optionType} onChange={handleChange}>
        <option value="All">All pokemos</option>
        {
            listTypes?.map(type => (
                <option key={type.name} value={type.name}> {type.name} </option>
            ))
        }
    </select>
    </div>
  )
}

export default SelectType
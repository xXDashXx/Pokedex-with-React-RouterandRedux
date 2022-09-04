import React from 'react'
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slices/nameTrainer.slice';
import '../components/styles/home.css'
import home from '../assets/home.png'
import FooterPoke from './shared/FooterPoke';

const Home = () => {
    
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit= (e) => {
      e.preventDefault()
      const imputValue = e.target.name.value.trim()
      
      if (imputValue.length != 0) {
          dispatch(setNameTrainer(imputValue))
          navigate('/pokedex')
      }
      e.target.name.value = ""
    }
  return (
    <div className='home'>
      <img className='home__img' src={home} alt="Pokedex Logo" />
        <h1 className='home__title'>Hi! Trainer <p className='home__description'>To start give me your trainer's name</p></h1>
        <form className='home__form' onSubmit={handleSubmit}>
        <input placeholder='Here! Enter your name' className='home__input' id='name' type="text" />
        <button className='home__btn'>Catch then all</button>
        </form>
        <FooterPoke/>
    </div>
  )
}

export default Home
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PaginationPoke = ({ pokemons, cardPerPage, setCardPerPage, currentPage, setCurrentPage/*totalCards, handleClick*/ }) => {

    const pageNumbers = []
    const maxCardsPerPage= 10
    const totalPages = Math.ceil(pokemons && pokemons.results.length / 18)
    const cardsPage = Math.ceil(totalPages / maxCardsPerPage)

    for (let index = (currentPage - 1) * maxCardsPerPage; index < currentPage * maxCardsPerPage; index++) {
        pageNumbers.push(index + 1)
    }
    const previewsBlock = () => {
        setCurrentPage(e => e - 1)
        setCardPerPage((currentPage - 2) * maxCardsPerPage)
    }  

    const nextBlock = () => {
        setCurrentPage(e => e + 1)
        setCardPerPage((currentPage) * maxCardsPerPage)
    }


    return (
        <div>
            <h1> {cardPerPage + 1} </h1>
            <ul>
              {currentPage !== 1 && <button onClick={previewsBlock}>...</button>}
                 {pageNumbers.map(number => (
                    <li key={number}>
                       <a className= {cardPerPage + 1 === number && 'active-page'} onClick={ () => setCardPerPage(number - 1)} >{number}</a>
                    </li>
                 ))
                 }
              {currentPage !== cardsPage && <button on onClick={nextBlock}>...</button>}
            </ul>
        </div>
    )
}

export default PaginationPoke
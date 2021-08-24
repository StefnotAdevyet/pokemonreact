import './App.css';
import React , { useState, useEffect } from 'react';
import PokeList from './PokeList';
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPage, setNextPage] = useState()
  const [previousPage, setPreviousPage] = useState()


  useEffect(() => {
    axios.get(currentPage).then(res => {
      setNextPage(res.data.next)
      setPreviousPage(res.data.prec)
      setPokemon(res.data.results.map(p => p.name))
    })
  }, [currentPage])

  return (
  <PokeList pokemon={pokemon} />
  );
}

export default App;

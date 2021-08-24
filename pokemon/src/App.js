import './App.css';
import React , { useState, useEffect } from 'react';
import PokeList from './PokeList';
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPage, setNextPage] = useState()
  const [previousPage, setPreviousPage] = useState()
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPage, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPage(res.data.next)
      setPreviousPage(res.data.prec)
      setPokemon(res.data.results.map(p => p.name))
    })
    return () => cancel()
  }, [currentPage])

  if (loading) { return (<div>Loading...</div>) }

  return (
  <PokeList pokemon={pokemon} />
  );
}

export default App;

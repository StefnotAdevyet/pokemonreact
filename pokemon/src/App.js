import './App.css';
import React , { useState } from 'react';
import PokeList from './PokeList';
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState([])

  axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {
    setPokemon(res.data.results.map(p => p.name))
  })

  return (
  <PokeList pokemon={pokemon} />
  );
}

export default App;

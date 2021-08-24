import './App.css';
import React , { useState } from 'react';
import PokeList from './PokeList';

function App() {
  const [pokemon, setPokemon] = useState(['bulbasaur', 'charmander', 'squirtle'])

  return (
  <PokeList pokemon={pokemon} />
  );
}

export default App;

import React from 'react';

export default function PokeList (props) {
  return (
    <div>
    {
    props.pokemon.map(p => <div>{p}</div>)
    }
    </div>
  )
}
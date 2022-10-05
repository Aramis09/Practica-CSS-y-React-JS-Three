import React from 'react';
import s from '../styles/SearchBar.module.css'
export default function SearchBar(props) {
  // acá va tu código
  return (<div className= {`${s.Search}`}>
    <input type = "text"  className={`${s.inputSearch}`} />
    <button className={`${s.botonSearch}`} onClick={ () => props.onSearch ("ciudad")}> Agregar</button>
  </div>)
};
import React from 'react';
import s from '../styles/Card.module.css'
export default function Card(props) {
  // acá va tu código
  return (<div className={`${s.contenedor}`}>
            <button className={`${s.boton}`}>X</button>
            <h3 className={`${s.nombre}`}>{props.name}</h3>
            <h3 className={`${s.max}`}>Max</h3>
            <p className={`${s.maxValue}`}>{props.max}</p>
            <h3 className={`${s.min}`}>Min</h3>
            <p className={`${s.minValue}`}>{props.min}</p>
            <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} className={`${s.imagen}`} alt="" />
          </div>)
};
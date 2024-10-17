import React from 'react'
import './Termek.css'

export default function Termek(props) {
    function katt() {
        props.katt(props.index)        
    }
  return (
    <div className="card">
        <h4>{props.adat.nev}</h4>
        <img src={props.adat.src} alt={props.adat.alt} />
        <p>{props.adat.leiras}</p>
        <p>Ár: {props.adat.ar} Ft</p>
        <button onClick={()=>katt()}>Kosárba</button>
    </div>
  )
}

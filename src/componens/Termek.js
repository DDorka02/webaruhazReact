import React from 'react'
import './Termek.css'

export default function Termek(props) {
    let db=0;
    function katt(db) {
      db++;
        props.katt(props.index, db)        
    }
  return (
    <div className="card">
        <h4>{props.adat.nev}</h4>
        <img src={props.adat.src} alt={props.adat.alt} />
        <p>{props.adat.leiras}</p>
        <p>Ár: {props.adat.ar} Ft</p>
        <span>
        <button onClick={()=>katt(db)}>Kosárba</button>
        </span>
    </div>
  )
}

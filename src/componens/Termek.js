import React from 'react'
import './Termek.css'

export default function Termek(props) {
    function katt() {
        props.katt(props.index)        
    }
  return (
    <div className="card">
        <h4>{props.adat.nev}</h4>
        <img src={props.adat.kep} alt="termek" />
        <p>{props.adat.leiras}</p>
        <p>Ár: {props.adat.ar} Ft</p>
        <button  type="button" className="btn btn-primary" onClick={()=>katt()}>Kosárba</button>
    </div>
  )
}

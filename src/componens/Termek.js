import React from 'react'
import './Termek.css'

export default function Termek(props) {
    function katt() {
        props.katt(props.index)        
    }
  return (
    <div className="card">
        <h4>Neve: <br />{props.adat.nev}</h4>
        <img src={props.adat.src} alt={props.adat.alt} />
        <p>Leírása: <br/>{props.adat.leiras}</p>
        <button onClick={()=>katt()}>Kiválaszt</button>
    </div>
  )
}

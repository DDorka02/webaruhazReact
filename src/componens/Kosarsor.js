import React from 'react'


export default function Kosarsor(props) {
  return (
    <div>
      <tr>
            <td>{props.adat.nev}</td>
            <td><img src={props.adat.kep} alt="termek" ></img></td>
            <td>{props.adat.ar}</td>
            <td><button type="button" className="btn btn-danger" >Törlés</button></td>
        </tr>

    </div>
  )
}

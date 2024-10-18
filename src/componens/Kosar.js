import React from 'react'
import Kosarsor from './Kosarsor'

export default function Kosar(props) {
  return (
    <>
      <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Neve</th>
                <th>Kép</th>
                <th>Ár</th>
                <th>Törlés</th>
            </tr>
        </thead>
        <tbody>
            {props.lista.map((elem, index)=>{
                return <Kosarsor adat={elem} key={index}/>
            })}
        </tbody>
        </table>

    </>
  )
}

import React from 'react'
import Termek from './Termek'

export default function Termekek(props) {
    function katt(adat) {
        props.katt(adat)
    }
  return (
    <>
      {
        props.lista.map((elem, index) =>{
            return (<Termek adat={elem} key={index} index={index}  katt={katt}/>)
        })
        
      }
      
    </>
  )
}

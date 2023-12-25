
// function Counter () {

//     return(
//         <h1>Contador</h1>
//     )
// }



// const Counter = () => {
//     return(
//         <h1>Contador Flecha</h1>
//     )
// }

// export default Counter

import { useState, useEffect } from "react"

import { Boton } from "./Boton"

import Button from 'react-bootstrap/Button';


// export const Counter = () => {

//     return(
//         <>
//         <Boton numero={1} onClick={()=>alert("apretaste")} />
//         <Boton numero={2}/>
//         <h1>Contador</h1>
//         </>
//     )
// }

export const Counter = () => {

    const [contador,setContador] = useState(0) //devuelve dos variables

useEffect(()=>{
    alert("cambio el contador")
},[contador])

    return(
        <>
        <p>Contador: {contador}</p>
        <button onClick={()=>setContador(contador-1)} >-</button>
        <button onClick={()=>setContador(contador+1)} >+</button>
        <Button onClick={()=>setContador(contador-1)} variant="success">-</Button>{' '}
        <Button onClick={()=>setContador(contador+1)} variant="danger">+</Button>{' '}


        </>
    )
}



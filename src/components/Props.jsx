import React from 'react'

export default function saludar(tem){
    return(
        <>
            <h2>hola {tem.nombre} tu edad es {tem.edad} años</h2>
        </>
    )
}

export function Xt(){
    return(
        <h1>estoy en otra funcion que pertenece a un componente</h1>
    )
}
import React from 'react'

const Objetos = (props)=>{
    return(
        <p>
            hola {props.userInfo.nombre}
            tu edad es {props.userInfo.edad} años
            tu color favorito es {props.userInfo.color}
        </p>
    )
}

export default Objetos;
import React, { useState } from 'react';

const Estado = ()=>{
    const [est,setEst] = useState(false) //CREAMOS EL HOOK
    

    const encenderApagar = ()=>{
        setEst(!est) 
    }

    return(
        <> 
            <button onClick={encenderApagar}>EncenderApagar</button>
            <p>el auto esta {est ? 'encendido' : 'apagado'}</p>
        </>
    )
}

export default Estado;


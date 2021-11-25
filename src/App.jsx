import React from 'react'
import Props, {Xt} from './components/Props'
import Obj   from './components/Obj_props'
import Func  from './components/Fun_props'
import Est_count from './components/Est_count'
import Est_auto  from './components/Est_auto'

function App(){

    //por funcion
    const saludar= (nombre)=>{
        alert('hola '+ nombre)
    }

    //por objetos
    const user ={
        nombre: 'Isabella Gomez',
        edad: 6,
        color: 'Azul'
    }


    //por variables
    const nombre = 'jose'
    const edad   = 23
    
    return(
        <>
            <h1>Hola Estoy Desde el Componente padre</h1>
            <a href="https://www.youtube.com/watch?v=-dI4oTssDhE">youtube</a>
            <Props nombre= {nombre} edad= {edad}/>
            <Obj userInfo= {user}/>
            <Xt />
            <Func saludar ={saludar} m= {user}/>
            <Est_count /> <br /> <br />
            <Est_auto />
        </>
        
    )
}

export default App;
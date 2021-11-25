import React from 'react'

 const Fun_props = (x)=>{
     //destructuring
     const {saludar, m} = x 
     const {nombre, edad, color} = m

     return(
         <button onClick={()=> saludar(nombre)}>saludar</button>
     )
 }

 export default Fun_props;
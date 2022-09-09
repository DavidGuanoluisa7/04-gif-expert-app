//Un componente que me sirva para agrupar todos los elementos de la misma categoria
//Un componente que se encargue de mostrar solo una categoria
//rafc, crea directamente la estructura del funcional component

//useEffect: es un Hook de React que sirve para disparar efectos secundarios
//Efecto secundario: algún proceso que se quiera ejecutar cuando algo suceda, Ejemplo1: Cuando el counter cambie->
// deconst [counter, setCounter] = useState(10), yo quiero disparar un efecto->
//Ejemplo2: Cuando el componente se renderiza por primera vez yo quiero disparar un efecto secundario, Se->
//puede hacer en cualquier punto que se desee
//import { useEffect, useState } from "react";  //Ya no se necesita xq estan en el custom Hook
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { getGifs } from "../helpers/getGifs";  //Ya no se necesita getGifs xq se tiene el custom Hook
//Primero React, luego las importaciones de terceros, depués nuestro código, y por último funciones que no son->
//propiamente componentes ó Hooks


///import React from 'react'
//La línea de código no es necesaria con la versión actual de React


//NUNCA COLOCAR LA EJECUCIÓN DE UNA FUNCIÓN DIRECTAMENTE EN UN FUNCTIONAL COMPONENT, PARA QUE ->
//NO SE ESTE EJECUTANDO, Y SÓLO SE EJECUTE UNA ÚNICA VEZ
export const GifGrid = ({category}) => {
//React cada vez que detecta un cambio en el componente lo vuelve a ejecutar para redibujarlo->
//Y ahi cierta funciones especiales que pueden sobrevivir y mantener el estado->
//O cierta funciones que le pueden decir a React, ejecútate sólo una vez, y a pesar de que el componente se->
//redibuje no quiero que vuelvas a ejecutar nada de eso (esto permite useEffect)



////TODO ESTE CÓDIGO LO PUEDO RESUMIR EN UN CUSTOM HOOK


// //[images, setImages]:Aquí en images ahí una catidad de imagenes almacenadas, al inicio es un arreglo vacío
// const[images, setImages]=useState([]);

//     const getImages=async() => {
//       const newImages=await getGifs(category);
//       setImages(newImages);
//     }

    
//     //Esta compuesto por una función ó callback y una lista de dependencias
//     //Lista de dependencias: son las condiciones por las cuales ustedes quieren volver a ejecutar este callback
//     useEffect(() => {
//       getImages();
       
//     },[])
//     //[]: Significa que mis dependencias están vacías, y si yo dejo mis dependencia vacía significa que este->
//     //Hook solamente se va ejecutar la primera vez que se crea y se construye mi componente


////Y QUEDARÍA ASÍ

const {images, isLoading}=useFetchGifs(category);
//con {}, es para desestructurar un objeto que se puede regresar lo que sea de un custom Hook


  
    return (
    <>
        <h3>{category}</h3>


        {/* ////1 FORMA, PARA AGREGAR isLoading
        {
          //isLoading ?,Quiere decir si isLoading esta en tru enviemos h2
          //:(dos puntos), Significan caso contrario puedo poner un null
          isLoading
          ? (<h2>loading...</h2>)
          :null
        }

        ////2 FORMA, PARA AGREGAR isLoading */}
        {
          //Esta es una forma de hacer un if corto con una sola condición
          //Si isLoading esta en true va a ejecutar la segunda parte de la instrucción que es (<h2>loading...</h2>)
          //Esto es un And lógico
          isLoading && (<h2>loading...</h2>)
        }
        

        {/* //No poner class sino className xq la palabra reservada class sirve en js para crear una clase->
        //o instancias de esa misma clase */}
        <div className="card-grid">
          {
            //Desestructuramos esto {id, title} y obtenemos de id, title de image que la misma puede tener ->
            //cualquier otro nombre
            images.map((image)=>(
              <GifItem 
                key ={image.id}
                
                //Utilizamos el operador spread para espacir todas las propiedades de image en GifItem, para ->
                //que el mismo GifItem reciba todas la propiedades de la imagen
                {...image}
                
              />

              //Siempre debe tener el key si es una lista de elementos
              //{({id, title}).id}>{({id, title}).title}: los dos acceden a la dirección dentro de los elementos obtenidos por->
              //const getGifs=async(category), Ejemplo: image.title, como una dirección normal se obtiene->
              //el título de la imagen
              ///<li key={id}>{title}</li>// Lo borramos para poner <GifItem/>
              //Los 2 paréntesis que cubren li permiten el retorno implícito de este objeto

            ))
          }
        </div>
     
    </>
  )
}

import { useState } from 'react';
import { AddCategory } from './components/AddCategory';


//No ocupamos la importación de React, despúes de la versión 17 ya no es necesario Importarlo
///import React from 'react'

//ESTRUCTURA DE ARCHIVOS EN REACT:->
// common/ Todo lo relacionado a los gifs
// feed/ Una carpeta relacionada a las pantallas de autenticación
// profile/ Una carpeta relacionada al perfil del usuario 
//y Otra para el manejo de productos

//Todas las aplicaciones de React son un conjunto de componentes
export const GifExpertApp = () => {

    //useState([]): si tiene corchetes siempre será un arreglo
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
    //Dentro de una condición como if, etc nunca se puede colocar un Hook
    //Se puede tener tantos useState como se desee
    //setCategories es una función

   const onAddCategory = () =>{
        
        //El push se utiliza para insertar en arreglos, pero depende de entender los usos específicos->
        //que tiene en React: ya que push es utilizado para mutar un objeto, y react hasta donde es->
        //posible no muta objetos u estados.
        //Lo que se debe hacer es crear un nuevo estado, un nuevo arreglo
        ///categories.push('Valorant');

        ////1 FORMA, para formas 4 slashs
        //setCategories se utiliza para cambinar las categorias
        //...categories: es el operador spread de las categories(Parece que solo es los tres puntos)
        //setCategories([...categories, 'Valorant']);//Agregarlo Después

        setCategories(['Valorant', ...categories]);//Agregarlo Antes

        ////2 FORMA
        //setCategories=(cat=>[...cat, 'Valorant']);
   }

  return (
    <>
        {/* título */}

        <h1>GitExpertApp</h1>

        {/* Input */}

        <AddCategory setCategories={setCategories}/>
        {/* //setCategories es una propiedad de mi componente AddCategory el cual va a recibir la función->
        //{setCategories}  */}


        {/* Listado Gif */}



        {/* //Luego renderizamos el listado basado en la categories */}
        <ol>
            {/* //map: permite barrer cada uno de los elementos del arreglo de useState y regresar algo nuevo */}
            {

            //Siempre es necesario poner la property key, que debe ser única
            categories.map(category=>{
                return <li key ={category}>{category}</li>
            })
            }
            {/* <li></li> */}
        </ol>

            {/* Gif Item */}
    </>
  )
}

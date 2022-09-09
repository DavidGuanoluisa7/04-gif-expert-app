import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
//Si se apunta a la carpeta se detecta diectamente el index por eso solo se pone: './components'


//No ocupamos la importación de React, despúes de la versión 17 ya no es necesario Importarlo
///import React from 'react'

//ESTRUCTURA DE ARCHIVOS EN REACT:->
// common/ Todo lo relacionado a los gifs
// feed/ Una carpeta relacionada a las pantallas de autenticación
// profile/ Una carpeta relacionada al perfil del usuario 
//y Otra para el manejo de productos

//Todas las aplicaciones de React son un conjunto de componentes
export const GifExpertApp2 = () => {

    //useState([]): si tiene corchetes siempre será un arreglo
    const [categories, setCategories] = useState(['One Punch']);
    //Dentro de una condición como if, etc nunca se puede colocar un Hook
    //Se puede tener tantos useState como se desee
    //setCategories es una función

   const onAddCategory = (newCategory) =>{
        if(categories.includes(newCategory)) return;
        //return se puede poner así si if solo tiene una única línea, sino va hacia abajo entre llaves
        
        //El push se utiliza para insertar en arreglos, pero depende de entender los usos específicos->
        //que tiene en React: ya que push es utilizado para mutar un objeto, y react hasta donde es->
        //posible no muta objetos u estados.
        //Lo que se debe hacer es crear un nuevo estado, un nuevo arreglo
        ///categories.push(newCategory);

        ////1 FORMA, para formas 4 slashs
        //setCategories se utiliza para cambinar las categorias
        //...categories: es el operador spread de las categories(Parece que solo es los tres puntos)
        //setCategories([...categories, 'Valorant']);//Agregarlo Después

        setCategories([newCategory, ...categories]);//Agregarlo Antes

        ////2 FORMA
        //setCategories=(cat=>[...cat, 'Valorant']);
   }

  return (
    <>
        {/* título */}

        <h1>GifExpertApp</h1>

        {/* Input */}

        {/* //setCategories es una propiedad de mi componente AddCategory el cual va a recibir la función->
        //{setCategories}  */}
        <AddCategory 

        //setCategories={setCategories}
        onNewCategory={(value)=>onAddCategory(value)}
        //onNewCategory, la palabra on al inicio significa que esta emitiendo algo, es un patrón común en->
        //desarroillo web
        //Todos los Eventos en React llevan la palabra on como prefijo
        //onNewCategory={(event)=>onAddCategory(event)} se optimiza para quedar así:onNewCategory={onAddCategory}

        />


        {/* Listado Gif */}



        {/* //Luego renderizamos el listado basado en la categories */}
    
            {/* //map: permite barrer cada uno de los elementos del arreglo de useState y regresar algo nuevo */}
        {

            //Siempre es necesario poner la property key, que debe ser única
            //return <li key ={category}>{category}</li>, La i es la propiedad índice y no se puede utilizar-> 
            //poque react utiliza este valor {category} de la llave para saber cuando elemento se eliminó y-> 
            //almacena ese valor y se podría tener información incorrecta al almacenar 2 valores en la misma ->
            //posición o casilla en css
            categories.map((category)=>(
                <GifGrid 
                    key={category} 
                    category={category}
                />
            //cada vez que nosotros tenemnos un nueva categoría esa categoría vuelve a crear este componente->
            //GifGrid, pero no los anteriores no los vuelve a crear
            ))
        }
            {/* <li></li> */}

            {/* Gif Item */}
    </>
  )
}

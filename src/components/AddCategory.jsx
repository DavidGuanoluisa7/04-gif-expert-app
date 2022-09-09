import { useState } from 'react';


//Cada componente puede tener su propio estado
export const AddCategory = ({onNewCategory}) => {
//En el argumento se agregan las props, o también se pueden desestructurar así {setCategories}, para se agregadas en esta->
//misma función

    const [inputValue, setInputValue] = useState('');

    ////1 FORMA
    // const onInputChange=(event)=>{
    //     //event.target.value: Para añadir el valor a una entrada de texto
    //     setInputValue(event.target.value);
    // }

    ////2 FORMA
    //Se desestructura la constante y se extrae el target poniendo {target}
    //Aquí en el target siempre esta recibiendo el event aunque ya no exista textualmente pero se->
    //esta obteniendo por los funciones, propiedades que se ejecutan: onChange={(event)=>onInputChange(event)}
    const onInputChange=({target})=>{

        setInputValue(target.value);
    }

    const onSubmit =(event)=> {

        event.preventDefault();
        if(inputValue.trim().length<=1) return;
        //trim: parece que es para eliminar espacios

        ///setCategories(categories=>[inputValue, ...categories]);
        setInputValue('');
        //setInputValue va a ser igual a un string vacío

        onNewCategory(inputValue.trim());
    }


  return (

    //onSumit(event): es la función que envía el evento, y onSubmit= es una propiedad, son diferentes
    <form onSubmit={onSubmit}>
    {/* //Esta propiedad onSubmit={(event)=> onSubmit(event)} recibe un argumento (event)=> y el mismo es usado->
    inmediatamente para llamar una función (event), y se puede resumir así onSubmit={onSubmit} */}

    <input 
        type="text"
        placeholder="Buscar gifs"
        
        //Como trabajamos con Hooks el valor del atributo va entre {}
        value={inputValue}

        //Siempre se debe utilizar el método onChange para añadir el setInputValue del useState
        //Estoy mandando una función cuyo primer argumento es el argumento que estoy mandandole a la->
        //función que quiero ejecutar, entonces puedo obviar ponerlo así y únicamente mandar la->
        //referencia a la función
        ///onChange={(event)=>onInputChange(event)}
        onChange={onInputChange}
    />
    </form>
  )
}

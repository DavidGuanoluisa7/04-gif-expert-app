//Mi archivo Hook solo va a regresar js por eso es de extensión .js, no va a regresar jsx


import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//En un functional component se reciben las props en la parte del argumento
//Mientras aquí en hooks se recibe un objeto ó argumentos posicionales
export const useFetchGifs = (category) => {

    //Se copia es mismo código de GifGrid que fue comentado, en este Hook lo copiamos
    const[images, setImages]=useState([]);

    //Creamos otro useState para el isLoading, mensaje para saber que estoy cargando las imágenes, ahora mismo->
    //sólo se puede visualizar en console
    const [isLoading, setisLoading] = useState(true);
    //isLoading: esta eventualemente en true y luego pasa a false cuando ya tenemos imágenes

    const getImages=async() => {
      const newImages=await getGifs(category);
      //getGifs(category), siempre la función va acompañada del argumento como se ve el argumento es category
      
      setImages(newImages);
      setisLoading(false);
    }

    //useEffect únicamente llama getImages
    useEffect(() => {
        getImages();
         
      },[])

 
    //Si return es con llaves retorna un objeto, Si return es con corchetes retorna un arreglo
    return{

        //images: images, Cuando se tiene una propiedad que apunta al mismo nombre de una variable con ese nombre->
        //se puede poner sólo así: images, y también en: isLoading,
        images,
        isLoading,
    }

}

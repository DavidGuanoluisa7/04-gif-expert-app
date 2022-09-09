//Archivo js, xq es puro código de javascript

//Si se esta utilizando el await la función debe ser asíncrona, debe tener async() ubicado allí mismo
export const getGifs=async(category)=>{
    
    //Siempre poner esta comilla especial (` `) en este url de API Key, xq sino =${category} no funciona,->
    //y los gifs solo se buscan en función de la palabra category. No en función de 'One Punch' o la budqueda ->
    //realizada sino se pone esta comilla
    const url =`https://api.giphy.com/v1/gifs/search?api_key=uu4LCeiruWgypJjDshxGH46ZnLHrRkud&q=${category}&limit=10`;
    //template string es esto ${category}, en este caso agregamos a un url también puede ser cualquier texto->
    //una función desestructurada
    //&limit=20: es el número que gifs que requiero

    //Vamos a realizar la petición http
    const resp = await fetch(url);

    //Desestructuramos la "data" total que obtuvimos en Postman, la data viene del await resp.json() 
    const {data}= await resp.json();
    //data es un arreglo

    const gifs=data.map(img=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
        //Este url no es el mismo que el general es de un sólo gif

    }));
 
    return gifs;
}
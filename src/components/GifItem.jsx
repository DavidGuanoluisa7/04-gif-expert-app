//undefined en console en chrome, significa que el elemento no se esta recibiendo

//El url es la imagen directamente
export const GifItem = ({title, url, id}) => {

  return (
    <div className="card">
        <img src={url} alt={title} />
        {/* //alt: es el texto alternativo si la imagen no se logra mostrar */}

        <p>{title}</p>

    </div>
  )
}

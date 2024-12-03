
const Elemento = ({ title, id, url }) => {
  return (
    <a href={`#${id}`} key={id} className="mb-4 flex flex-col  ">

      <figure className="flex flex-col items-center justify-center w-full h-full relative group">
        <img src={url} alt={title} className="bg-fondo-sticker min-w-full h-auto bg-cover" />
        <figcaption className="hidden absolute text-center text-sm text-white font-medium bottom-0 left-0 right-0 w-full bg-slate-500/50 group-hover:block">{title}</figcaption>
      </figure>

    </a>
  )
}

export default Elemento;


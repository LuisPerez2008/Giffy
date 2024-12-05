import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";

export const Elemento = ({ title, id, url, isFavorito }) => {

  const { favoritos, setFavoritos } = useContext(FavoritosContext);

  const agregarFavoritos = (objeto) => {
    if (!favoritos.some(fav => fav.id === objeto.id)) {
      // Añade el objeto al estado de favoritos
      const nuevosFavoritos = [objeto, ...favoritos];
      setFavoritos(nuevosFavoritos);
      localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
    } else {
      const respuesta = window.confirm("¿quitar de favoritos?");
      if (respuesta) {
        const nuevosFavoritos = favoritos.filter(fav => fav.id !== objeto.id);
        setFavoritos(nuevosFavoritos);
        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
      }


    }
  };

  return (
    <a href={`#${id}`} key={id} className="mb-4 flex flex-col break-inside-avoid  ">

      <figure className="flex flex-col items-center justify-center w-full h-full relative group">

        <button onClick={() => agregarFavoritos({ id, title, url })} >
          <svg
            className={`w-8 h-8 absolute  group-hover:block  top-2 right-2 ${isFavorito ? 'fill-red-600 block' : 'hidden fill-white hover:fill-red-500'}`}
            viewBox="0 0 1024 1024" width="1em" height="1em" fill="curretColor" aria-hidden="false" focusable="false" data-spm-anchor-id="a2g0o.detail.0.i6.7b5dCYfiCYfiuy"><path d="M165.589333 578.005333c-83.584-83.584-83.584-219.093333 0-302.677333 83.584-83.584 219.093333-83.584 302.677334 0l43.797333 43.797333 43.797333-43.797333c83.562667-83.584 219.093333-83.584 302.656 0 83.584 83.562667 83.584 219.093333 0 302.656l-323.84 323.84a32 32 0 0 1-45.226666 0l-323.84-323.84z"></path>

          </svg>
        </button>


        <img src={url} alt={title} className="bg-fondo-sticker min-w-full min-h-full bg-cover" />
        <figcaption className="hidden absolute text-center text-sm text-white font-medium bottom-0 left-0 right-0 w-full bg-slate-500/50 group-hover:block">
          {(title) ? title : "sin titulo"}
        </figcaption>
      </figure>

    </a>
  )
}




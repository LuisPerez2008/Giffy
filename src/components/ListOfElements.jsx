import { useState, useEffect, useContext } from "react";
import { KeywordContext } from "../context/keywordContext";
import { Paginacion } from './Paginacion';
import { FavoritosContext } from "../context/FavoritosContext";
import { Elemento } from './Elemento'

export const ListOfElements = ({ pageTitle, service, element, setElement }) => {
  const { keyword } = useContext(KeywordContext);
  const [isLoading, setIsLoading] = useState(true);
  const [paginacion, setPaginacion] = useState({});
  const [currentPage, setCurrentPage] = useState(1);


  const { favoritos } = useContext(FavoritosContext);
  const itemsPerPage = 50;

  useEffect(() => {

    const offset = (currentPage - 1) * itemsPerPage;
    service(keyword, offset)
      .then(({ data, pagination }) => {
        setPaginacion(pagination);
        setElement(data);  // Guarda los datos obtenidos en el estado
        setIsLoading(false);


      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
        setIsLoading(false);  // También marca la carga como finalizada en caso de error
      });
  }, [keyword, currentPage]);  // Dependencia añadida para cambiar cuando cambie la página

  if (isLoading) {
    return <div className='flex justify-center items-center w-full h-full'>
      <img src="https://media4.giphy.com/media/WQ3REUQR418t6sdCX8/giphy.webp?cid=790b7611od3pcj4rxnuwg6y37llv195t4wrfq8rpw9jgbgvl&ep=v1_gifs_search&rid=giphy.webp&ct=g" alt="Cargando..." />
    </div>;
  }

  if (!Array.isArray(element) || element.length === 0) {
    return (
      <div className='flex justify-center items-center w-full h-full'>
        <h1>No se encontraron {pageTitle}</h1>
      </div>
    );
  }

  return (
    <section className='my-8'>
      <h1 className='text-center text-3xl font-bold'>{pageTitle}</h1>
      <Paginacion
        paginacion={paginacion}
        pageTitle={pageTitle}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
      />
      <div className='columns-2 tablet:columns-3 md:columns-4 gap-4 lg:columns-5 '>

        {element.map(ele => {
          const isFavorito = favoritos.some(fav => fav.id === ele.id);
          return (
            <Elemento
              key={ele.id}
              title={ele.title}
              url={ele.url}
              id={ele.id}
              isFavorito={isFavorito}
            />
          )

        }

        )}
      </div>

      <Paginacion
        paginacion={paginacion}
        pageTitle={pageTitle}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
      />
    </section>
  );
}
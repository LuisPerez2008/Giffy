import Elemento from './Elemento'
import { useState, useEffect, useContext } from "react";
import { KeywordContext } from "../context/keywordContext";
import { Paginacion } from './Paginacion';

export const ListOfElements = ({ pageTitle, service, element, setElement }) => {


  const { keyword } = useContext(KeywordContext);
  const [isloading, setIsLoading] = useState(true);

  const [paginacion, setPaginacion] = useState({});



  useEffect(() => {
    service(keyword, pag)
      .then(({ data, pagination }) => {
        setPaginacion(pagination);
        setElement(data);  // Guarda los datos obtenidos en el estado

        setIsLoading(false);


      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
        setIsLoading(false);  // También marca la carga como finalizada en caso de error
      });

  }, [keyword]);


  if (isloading) return <div className='flex justify-center items-center w-full h-full'><img src="https://media4.giphy.com/media/WQ3REUQR418t6sdCX8/giphy.webp?cid=790b7611od3pcj4rxnuwg6y37llv195t4wrfq8rpw9jgbgvl&ep=v1_gifs_search&rid=giphy.webp&ct=g" alt="" /></div>

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
      <Paginacion paginacion={paginacion} pageTitle={pageTitle} />
      <div className='columns-2 tablet:columns-3 md:columns-6 '>
        {
          element.map(ele =>
            <Elemento
              key={ele.id}
              title={ele.title}
              url={ele.url}
              id={ele.id}
            />
          )
        }
      </div>

    </section>

  )
}
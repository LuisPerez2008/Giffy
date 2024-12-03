import Elemento from './Elemento'
import { useState, useEffect, useContext } from "react";
import { KeywordContext } from "../context/keywordContext";

export const ListOfElements = ({ pageTitle, service, element, setElement, cacheName }) => {


  const { keyword } = useContext(KeywordContext);
  const [isloading, setIsLoading] = useState(true);


  useEffect(() => {

    const cachedData = localStorage.getItem(`${cacheName}-${keyword}`);

    if (cachedData) {
      // Si hay datos en caché, los establece en el estado
      setElement(JSON.parse(cachedData));
      setIsLoading(false);  // Marca la carga como finalizada
    } else {
      // Si no hay datos en caché, se simula una llamada al servicio para obtener los datos
      service(keyword)
        .then((data) => {
          setElement(data);  // Guarda los datos obtenidos en el estado
          localStorage.setItem(`${cacheName}-${keyword}`, JSON.stringify(data));  // Guarda los datos en localStorage
          setIsLoading(false);
          console.log(element)
          // Marca la carga como finalizada
        })
        .catch((error) => {
          console.error('Error al obtener los datos:', error);
          setIsLoading(false);  // También marca la carga como finalizada en caso de error
        });
    }
  }, [keyword]);


  if (isloading) return <div className='flex justify-center items-center w-full h-full'><img src="https://media4.giphy.com/media/WQ3REUQR418t6sdCX8/giphy.webp?cid=790b7611od3pcj4rxnuwg6y37llv195t4wrfq8rpw9jgbgvl&ep=v1_gifs_search&rid=giphy.webp&ct=g" alt="" /></div>
  if (!element.length) return <div className='flex justify-center items-center w-full h-full'><h1>No se encontraron gifs</h1></div>

  return (
    <section className='my-8'>
      <h1 className='text-center text-3xl font-bold'>{pageTitle}</h1>
      <div className='columns-5 '>
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
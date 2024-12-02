import Gif from './Gif'
import { useState, useEffect, useContext } from "react";
import { KeywordContext } from "../context/keywordContext";
import getStikers from '../service/getStickers';

export const ListOfStickers = ({ pageTitle }) => {

  const [stickers, setStickers] = useState([]);
  const { keyword } = useContext(KeywordContext);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const cachedStickers = localStorage.getItem(`stickers-${keyword}`);
    if (cachedStickers) {
      setStickers(JSON.parse(cachedStickers)); // Reutilizas `setGifs` ya que es el estado donde guardas los datos

    } else {
      getStikers(keyword).then(response => {
        setStickers(response); // Guardas los stickers en el estado
        localStorage.setItem(`stickers-${keyword}`, JSON.stringify(response)); // Cacheas la respuesta en localStorage
        setIsloading(false)
      });

    }

  }, [keyword]);

  if (isloading) return <div className='flex justify-center items-center w-full h-full'><img src="https://media4.giphy.com/media/WQ3REUQR418t6sdCX8/giphy.webp?cid=790b7611od3pcj4rxnuwg6y37llv195t4wrfq8rpw9jgbgvl&ep=v1_gifs_search&rid=giphy.webp&ct=g" alt="" /></div>

  if (!stickers.length) return <div className='flex justify-center items-center w-full h-full'><h1>No se encontraron stickers</h1></div>


  return (
    <section>
      <h1 className='text-center text-3xl font-bold'>{pageTitle}</h1>
      <div className='grid grid-cols-6 justify-center gap-4'>
        {stickers.map(gif =>
          <Gif
            key={gif.id}
            title={gif.title}
            url={gif.url}
            id={gif.id}
          />
        )}
      </div>
    </section>

  )
}
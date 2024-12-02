import Gif from './Gif'
import getGifs from "../service/getGifs"
import { useState, useEffect, useContext } from "react";
import { KeywordContext } from "../context/keywordContext";

export const ListOfGifs = ({ pageTitle }) => {

  const [gifs, setGifs] = useState([]);
  const { keyword } = useContext(KeywordContext);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const cachedGifs = localStorage.getItem(`gifs-${keyword}`);
    if (cachedGifs) {
      setGifs(JSON.parse(cachedGifs));
      setIsloading(false);
    } else {
      getGifs(keyword).then(response => {
        setGifs(response);
        localStorage.setItem(`gifs-${keyword}`, JSON.stringify(response));
        setIsloading(false);
      });
    }
  }, [keyword]);


  if (isloading) return <div className='flex justify-center items-center w-full h-full'><img src="https://media4.giphy.com/media/WQ3REUQR418t6sdCX8/giphy.webp?cid=790b7611od3pcj4rxnuwg6y37llv195t4wrfq8rpw9jgbgvl&ep=v1_gifs_search&rid=giphy.webp&ct=g" alt="" /></div>
  if (!gifs.length) return <div className='flex justify-center items-center w-full h-full'><h1>No se encontraron gifs</h1></div>

  return (
    <section>
      <h1 className='text-center text-3xl font-bold'>{pageTitle}</h1>
      <div className='grid grid-cols-6 justify-center gap-4'>
        {gifs.map(gif =>
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
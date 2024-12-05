import { useContext, useEffect } from "react";
import { FavoritosContext } from "../context/FavoritosContext";
import { Elemento } from "./Elemento"

export const ListOfFavoritos = () => {

    const { favoritos, setFavoritos } = useContext(FavoritosContext);

    const limpiarFavoritos = () => {
        localStorage.removeItem('favoritos');
        setFavoritos([]);
    }

    useEffect(() => {
        const local = JSON.parse(localStorage.getItem('favoritos'));

        // Si existen favoritos en localStorage, actualiza el estado
        if (local && Array.isArray(local)) {
            setFavoritos(local);
        } else {
            setFavoritos([]); // Si no hay datos en localStorage, establece un array vacío
        }
    }, []);

    if (!favoritos || favoritos.length === 0) {
        return <div className='flex justify-center items-center w-full h-full'>
            <h1>No hay favoritos</h1>
        </div>;
    }

    return (
        <section className='my-8'>
            <h1 className='text-center text-3xl font-bold'>Favoritos</h1>
            <div className="flex justify-end items-center my-4">

                <button className='bg-red-500  hover:bg-red-600 text-white font-bold py-2 px-2 rounded ' onClick={limpiarFavoritos}>Limpiar favoritos</button>
            </div>


            <div className='columns-2 tablet:columns-3 md:columns-4 gap-4 lg:columns-5 '>
                {favoritos.map(ele => {
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


        </section>
    )
}
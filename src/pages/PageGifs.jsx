
import { ListOfElements } from "../components/ListOfElements";
import getGifs from "../service/getGifs";
import { useState } from "react";

export const PageGifs = () => {

    const [gifs, setGifs] = useState([]);

    return (
        <ListOfElements pageTitle="Gifs" element={gifs} setElement={setGifs} cacheName="gifs" service={getGifs} />
    )
}
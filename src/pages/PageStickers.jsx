import { ListOfElements } from "../components/ListOfElements"
import getStikers from "../service/getStickers";
import { useState } from "react";

export const PageStickers = () => {
    const [stickers, setStickers] = useState([]);


    return (
        <ListOfElements pageTitle={"Stickers"} element={stickers} setElement={setStickers} cacheName="stickers" service={getStikers} />
    )
}
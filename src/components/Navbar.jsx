import { Link } from "react-router";
import { Search } from "./Search";
import { useContext, useState } from "react";
import { KeywordContext } from "../context/keywordContext";

export const Navbar = () => {

    const { setKeyword } = useContext(KeywordContext);
    const [imputValue, setImputValue] = useState("");

    const handleChange = (e) => {
        setImputValue(e.target.value);
    }

    const buscar = () => {
        setKeyword(imputValue);
    }

    return (
        <nav className="bg-gray-300 text-black flex justify-between items-center p-4 ">
            <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Giphy-logo.svg" alt="" width="80" /></Link>
            <ul className="flex space-x-4 text-black">
                <li><Link to="/favoritos">Favoritos</Link></li>
                <li><Link to="/gifs">Gifs</Link></li>
                <li><Link to="/stickers">Stickers</Link></li>
            </ul>
            <Search onchange={handleChange} onclick={buscar} />

        </nav>
    )
}
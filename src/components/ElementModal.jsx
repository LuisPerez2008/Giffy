import { useNavigate } from "react-router";
import { FaPaperclip } from "react-icons/fa";
import { useState } from "react";
export const ElementModal = ({ id, title, url }) => {

    const navigate = useNavigate();
    const [copiado, setCopiado] = useState(false);

    // Función que maneja el clic fuera del div
    const handleBackgroundClick = (e) => {
        // Verificamos si el clic fue en el fondo (y no en el div de la imagen)
        if (e.target === e.currentTarget) {
            navigate(-1);
        }
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(url);
        setCopiado(true);
        setTimeout(() => {
            setCopiado(false);
        }, 2000)
    }

    return (
        <section
            className="w-full h-screen flex justify-center items-center bg-gray-900 bg-opacity-50 fixed top-0 left-0 z-50"
            onClick={handleBackgroundClick}
        >
            <div className="w-[30%] relative flex">
                <img
                    src={url}
                    alt={title}
                    className="w-full max-h-[90%] cover"
                />

                {/* Botón de copiar */}
                <button
                    className="absolute group bottom-4 right-4 flex justify-center items-center bg-blue-300 hover:bg-blue-500 text-white font-bold p-1 rounded space-x-2"
                    onClick={handleCopy}
                >
                    <span className="hidden group-hover:block">Copiar URL</span>
                    <FaPaperclip className="w-8 h-8 fill-white pr-1" />
                </button>

                {/* Mensaje de confirmación */}
                {copiado && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-2 rounded-md">
                        ¡URL copiada!
                    </div>
                )}
            </div>
        </section>
    )
}
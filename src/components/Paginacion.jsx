import { CgArrowRightO, CgArrowLeftO } from 'react-icons/cg';

export const Paginacion = ({ paginacion, pageTitle, currentPage, setCurrentPage, itemsPerPage }) => {
    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(currentPage * itemsPerPage, paginacion.total_count);

    // Función para manejar el cambio de página
    const goToPage = (page) => {
        if (page > 0 && page <= Math.ceil(paginacion.total_count / itemsPerPage)) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="flex justify-center items-center gap-2 my-4">
            <CgArrowLeftO
                className='cursor-pointer w-8 h-8 hover:text-blue-500'
                onClick={() => goToPage(currentPage - 1)}
            />
            <span>
                {pageTitle} {startIndex} - {endIndex} de {paginacion.total_count}
            </span>
            <CgArrowRightO
                className='cursor-pointer w-8 h-8 hover:text-blue-500'
                onClick={() => goToPage(currentPage + 1)}
            />
        </div>
    );
}
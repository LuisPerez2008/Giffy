import { CgArrowRightO, CgArrowLeftO } from 'react-icons/cg';

export const Paginacion = ({ paginacion, pageTitle }) => {
    console.log(paginacion);

    return (
        <div className="flex justify-center items-center gap-2 my-4">
            <CgArrowLeftO className='cursor-pointer w-8 h-8 hover:text-blue-500' />
            <span> {pageTitle} {paginacion.count} de {paginacion.total_count}</span>
            <CgArrowRightO className='cursor-pointer w-8 h-8 hover:text-blue-500' />
        </div>
    )
}
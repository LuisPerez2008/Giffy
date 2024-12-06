import { useLocation } from "react-router"
import { ElementModal } from "../components/ElementModal"

export const PageElement = () => {
    const datos = useLocation()
    const { id, title, url } = datos.state;

    return (
        <ElementModal id={id} title={title} url={url} />
    )
}
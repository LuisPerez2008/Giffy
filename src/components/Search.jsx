
export const Search = ({ onchange, onclick }) => {
    return (
        <div className="flex items-center space-x-4">
            <input
                type="text"
                placeholder="Search..."
                className=" rounded-md p-2 focus:outline-none "
                onChange={onchange}
            />
            <button className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-700" onClick={onclick} >Search</button>
        </div>
    )
}
import "tailwindcss/tailwind.css"
const NavBar = () => {
    return (
        <div>
            <ul className="list-none flex flex-direction-left justify-center bg-black text-white">
                <li className="px-5">Home</li>
                <li className="px-5">Schedule</li>
                <li className="px-5">Item List</li>
                <li className="px-5">Character List</li>
            </ul>
        </div>
    )
}



export default NavBar
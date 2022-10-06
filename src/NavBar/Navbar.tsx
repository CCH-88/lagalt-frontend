import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="border-gray-200 px-2 sm:px-4 py-3 bg-gray-100 w-100 h-16">
            <div className="inline-block w-1/3">
                <NavLink to='/' className="inline-block text-blue-500 text-2xl my-auto font-bold">Lagalt</NavLink>
            </div>
            <input type="text" className="inline-block py-0.5 bg-slate-300 rounded-full text-left px-8 w-1/3 text-2xl" placeholder="🔎Search" />
            <div className="flex-auto float-right w-1/3">
                <button className="px-2 py-1 rounded-full text-center border-gray-800 border mx-3 float-right">Sign up</button>
                <button className="px-2 py-1 rounded-full text-center border-gray-800 border mx-3 float-right">Login</button>
                <NavLink to='/profile' className="px-2 py-1 rounded-full text-center border-gray-800 border mx-3 float-right">Profile</NavLink>
            </div>
        </nav >
    )
}

export default Navbar
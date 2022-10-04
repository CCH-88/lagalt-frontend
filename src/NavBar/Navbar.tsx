import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="border-gray-200 px-2 sm:px-4 py-3 bg-gray-100 w-100 h-16">
            <NavLink to='/' className="float-left text-blue-500 text-2xl my-auto font-bold">Lagalt</NavLink>
            <div className="inline-block float-right w-1/3">
                <button className="w-100 px-4 py-1 rounded-full text-center border-gray-800 border float-right mx-5">Sign up</button>
                <button className="w-100 px-4 py-1 rounded-full text-center border-gray-800 border float-right mx-5">Login</button>
                <NavLink to='/profile' className="w-100 px-4 py-1 rounded-full text-center border-gray-800 border float-right mx-5">Profile</NavLink>
            </div>
            <input type="text" className="inline-block py-0.5 bg-slate-300 rounded-full text-left px-8 w-1/3 float-right text-2xl" placeholder="🔎Search" />
        </nav >
    )
}

export default Navbar
import { NavLink } from "react-router-dom"
import GoogleLoginButton from "../auth/GoogleLoginButton"

const Navbar = () => {
    return (
        <nav className="border-gray-200 px-2 sm:px-4 py-3 bg-gray-100 w-100 h-16">
            <div className="inline-block w-1/3">
                <NavLink to='/' className="inline-block text-blue-500 text-2xl my-auto font-bold">Lagalt</NavLink>
            </div>
            <input type="text" className="inline-block py-0.5 bg-slate-300 rounded-full text-left px-8 w-1/3 text-2xl" placeholder="🔎Search" />
            <div className="flex-auto float-right w-1/3">
                <GoogleLoginButton />
            </div>
        </nav >
    )
}

export default Navbar
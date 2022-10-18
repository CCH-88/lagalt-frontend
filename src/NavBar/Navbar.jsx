import { NavLink } from "react-router-dom"
import styles from "../mystyle.module.css";
import GoogleLoginButton from "../auth/GoogleLoginButton"
import profileLogo from "../assets/profile.svg";

const Navbar = () => {
    return (
        <nav className="border-gray-200 px-2 sm:px-4 py-3 bg-gray-100 w-100 h-16">
            <div className="inline-block w-1/3">
                <NavLink to='/' className="inline-block text-blue-500 text-2xl my-auto font-bold">Lagalt</NavLink>
            </div>
            <input type="text" className="inline-block py-0.5 bg-slate-300 rounded-full text-left px-8 w-1/3 text-2xl" placeholder="🔎Search" />
            <div className="inline-flex float-right w-1/3 mx-0">
                <NavLink to='/createproject' className={styles.profileButton}>Create new project</NavLink>
                <NavLink to="/profile/1" className={styles.profileButton}>
                    <div className={styles.profileButtonLogo}>
                        <img src={profileLogo} />
                    </div>
                    <span className={styles.profileButtonText}>Profile</span>
                </NavLink>
                <GoogleLoginButton />
            </div>

        </nav >
    )
}

export default Navbar
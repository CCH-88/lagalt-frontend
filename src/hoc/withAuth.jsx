import { Navigate } from "react-router-dom";
import { STORAGE_KEY_TOKEN } from "../const/storageKeys";
import { useUser } from "../context/UserContext";

const withAuth = Component => props => {
    const {user} = useUser()
    if(localStorage.getItem(STORAGE_KEY_TOKEN)){ //maybe different authentication method
        return <Component {...props} />
    } else{
        return <Navigate to="/" />
    }
}
export default withAuth
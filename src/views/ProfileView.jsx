import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"



const ProfileView = () => {

    const {user} = useUser()

    return (
        <>
            <p>Profile view</p>
            {user !== null && <p>Hello {user.googleId}</p>}
        </>
    )
}

export default withAuth(ProfileView)
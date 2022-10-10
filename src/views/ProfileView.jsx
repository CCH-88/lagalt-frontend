import { useState } from "react"
import ProfileCard from "../components/Profile/ProfileCard"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import { useForm } from 'react-hook-form'
import { checkForUser } from '../api/user'

const ProfileView = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, setUser } = useUser()
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)

    const onSubmit = async ({ id }) => {
        setLoading(true);
        const [checkError, userResponse] = await checkForUser(id)
        if (checkError !== null) {
            setApiError(checkError)
        }
        if (userResponse !== null) {
            setUser(userResponse)
        }
        setLoading(false);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="id"> </label>
                    <input type="text"
                        placeholder='What is your name?'
                        {...register("id")} />
                    <button type="submit" disabled={loading}>Submit</button>
                </fieldset>
                {loading && <p>Logging in...</p>}
                {apiError && <p>{apiError}</p>}
            </form>

            
            {user !== null &&
                <ProfileCard user={user} />}
        </>
    )
}

export default withAuth(ProfileView)
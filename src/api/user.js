//GET request to fetch a freelancer with specific id
export const checkForUser = async (id) => {
    try {
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + `/api/v1/freelancers/profile/${id}`)
        if(!response.ok) {
            throw new Error('Could not complete request.')
        }
        const data = await response.json()
        return [null, data]
    } catch (error) {
        return [error.message, []]
    }
}

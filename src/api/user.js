import {createHeaders} from './index'
const apiUrl = "https://lagalt.onrender.com/api/v1";

export const checkForUser = async (id) => {
    try {
        const response = await fetch(`${apiUrl}/freelancers/profile/${id}`)
        if(!response.ok) {
            throw new Error('Could not complete request.')
        }
        const data = await response.json()
        return [null, data]
    } catch (error) {
        return [error.message, []]
    }
}

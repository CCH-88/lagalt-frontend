import {createHeaders} from './index'
const apiUrl = "https://633fd672d1fcddf69caaa419.mockapi.io/api/v1"

export const checkForUser = async (id) => {
    try {
        console.log(id);
        const response = await fetch(`${apiUrl}/user/${id}`)
        if(!response.ok) {
            throw new Error('Could not complete request.')
        }
        const data = await response.json()
        return [null, data]
    } catch (error) {
        return [error.message, []]
    }
}
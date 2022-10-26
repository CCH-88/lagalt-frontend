//Post request to create a new project 
export const projectAdd = async (name, ownerId, description, field, progress, token) => {
    try {
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/api/v1/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                name,
                ownerId,
                description,
                field,
                progress
            })
        })
        if (!response.ok) {
            throw new Error('Could not update the translation')
        }
        const result = await response.json()
        console.log(result);
        return [null, result]
    }
    catch (error) {
        console.log(error);
        return [error.message, null]
    }
}
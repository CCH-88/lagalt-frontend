//Post request to create a new project 
export const projectAdd = async (name, description, field, progress, keycloak) => {
    try {
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/api/v1/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + keycloak.token
            },
            body: JSON.stringify({
                name,
                ownerId: keycloak.subject,
                description,
                field,
                progress
            })
        })
        if (!response.ok) {
            throw new Error('Could not post the project')
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

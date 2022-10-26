//POST request to add a message to the chat of a project.
export const chatAdd = async (chatId, message, freelancerId, token) => {
    try {
        console.log("trying to add chat");
        const freelancer = { id: freelancerId }
        const chat = { id: chatId }
        const text = message
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/api/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                freelancer,
                chat,
                text
            })
        })
        if (!response.ok) {
            throw new Error('Could not post the message')
        }
        const result = await response.json()
        return [null, result]
    }
    catch (error) {
        return [error.message, null]
    }
}
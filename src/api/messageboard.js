const apiUrl = import.meta.env.VITE_RENDER_API


export const chatAdd = async (chatId, message, freelancerId) => {
    try {
        const response = await fetch(`${apiUrl}/messages`, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                freelancerId,
                chatId,
                message
            })
        })

    if(!response.ok){
        throw new Error('Could not update the translation')
    }
    const result = await response.json()
    return [null, result]
    }
    catch (error){
        return [error.message, null]
    }
}

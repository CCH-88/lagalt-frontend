const apiUrl = "https://lagalt.onrender.com/api/v1";

export const chatAdd = async (chatId, message, freelancerId, token) => {

    try {
        console.log("trying to add chat");
        const freelancer = {id: freelancerId}
        const chat = {id: chatId}
        const text = message
        console.log(token);
        const response = await fetch(`${apiUrl}/messages`, {
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + token
              },              
            body: JSON.stringify({
                freelancer,
                chat,
                text
            })
        })

    if(!response.ok){
        throw new Error('Could not update the translation')
    }
    const result = await response.json()
    console.log(result);
    return [null, result]
    }
    catch (error){
        console.log(error);
        return [error.message, null]
    }
}
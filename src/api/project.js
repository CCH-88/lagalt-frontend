//GET request to fetch a project with specific id
export async function checkProject(projectId) {
  try {    
    const response = await fetch(import.meta.env.VITE_BACKEND_URL + `/api/v1/projects/${projectId}`);
    if (!response.ok) {
      throw new Error("Could not complete request.");
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
}

//GET request to fetch all projects in database
export async function checkAllProjects() {
  try {    
    const response = await fetch(import.meta.env.VITE_BACKEND_URL + `/api/v1/projects/`);
    if (!response.ok) {
      throw new Error("Could not complete request.");
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
}

//POST request to create a new project
export async function createProject(name) {
  try {
    const response = await fetch(apiUrl, {
        method: 'POST',
        //headers: createHeaders(), "Use this, createHeaders-funtion, when an API-key is needed.... 
        //...see video 004 from React course around 15min in." 
        //Stringify because HTTP does not understand javascript. It only understands strings...        
        body: JSON.stringify({
            name,
            owner,
            description,
            images,
            members: []
        })
    });
    if (!response.ok) {
      throw new Error(
        "Could not create project with project name: " + name
      );
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
}

export async function insertProject(name) {

  const [checkError, project] = await checkProject(name);
  
  if(checkError !== null){
    //If something goes wrong, a null is returned...
    return [checkError, null]
  }
  
  if (project.length > 0) {
    //Found the project. Returns the last item in the array...
    return [null, project.pop()];
  }

  return await createProject(name);

}

export async function joinProject(projectId, freelancerId, token){
  try {
    const response = await fetch(import.meta.env.VITE_BACKEND_URL + `/api/v1/projects/join/${projectId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          freelancerId
        })
    })
    if (!response.ok) {
        throw new Error('Could not join the project')
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

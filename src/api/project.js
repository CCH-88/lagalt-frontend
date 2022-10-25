const apiUrl = "http://localhost:8080/api/v1";

export async function checkProject(id, token) {
  const myHeaders = new Headers()
  console.log(token);
  myHeaders.append('token', token);
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Origin','http://localhost:8080');


  try {    
    const response = await fetch(`${apiUrl}/projects/${id}`, {
      credentials: 'include',
      headers: myHeaders,
      mode: 'no-cors'
    });
    if (!response.ok) {
      throw new Error("Could not complete request.");
    }
    const data = await response.json();
    console.log(data);
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
}

export async function createProject(name) {
  try {
    console.log(name);
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

export async function insertProject() {
  const name = "Baum";

  const [checkError, project] = await checkProject(name);
  
  if(checkError !== null){
    //If something goes wrong, a null is returned...
    return [checkError, null]
  }
  
  if (project.length > 0) {
    //Found the user. Returns the last item in the array...
    return [null, project.pop()];
  }

  return await createProject(name);

}

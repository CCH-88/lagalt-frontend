import { createHeaders } from "./index";
const apiUrl = "https://lagalt.onrender.com/api/v1";

export async function checkProject(projectId) {
  try {    
    console.log("starting fetch");
    const response = await fetch(`${apiUrl}/projects/${projectId}`);
    if (!response.ok) {
      throw new Error("Could not complete request.");
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
}

export async function checkAllProjects() {
  try {    
    console.log("starting fetch");
    const response = await fetch(`${apiUrl}/projects/`);
    if (!response.ok) {
      throw new Error("Could not complete request.");
    }
    const data = await response.json();
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

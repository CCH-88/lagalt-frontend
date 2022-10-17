import { createContext, useContext, useState } from "react";

//Context -> exposing the value
const ProfileContext = createContext();

//This is where it happens...
export function useProject() {
    return useProject(ProfileContext); // returns the object { project, setProject }
}

//Provider -> managing state (A regular component)
const ProjectProvider = (props) => {

    const [ project, setProject ] = useState(null)

    const state = {
        project,
        setProject
    }

    return (
        <ProfileContext.Provider value={ state }>
        
            {props.children}

        </ProfileContext.Provider>
    )
}

export default ProjectProvider


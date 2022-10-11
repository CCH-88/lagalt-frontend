import ProjectList from "../components/MainView/ProjectList"
import TopProjects from "../components/MainView/TopProjects"


const MainView = () => {
    
    return (
        <>
            <h1 className="font-bold text-3xl mb-1 p-4">Projects</h1> 
            <TopProjects />
            <br></br>
            <h2 className="font-bold text-3xl mb-1 p-4">List of Projects</h2>
            <br></br>
            <ProjectList />
            
                      
        </>
    )
}

export default MainView
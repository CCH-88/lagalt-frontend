import ProjectList from "../components/MainView/ProjectList"
import SortFilteringMenu from "../components/MainView/SortFilteringMenu"
import TopProjects from "../components/MainView/TopProjects"


const MainView = () => {
    
    return (
        <>
            <h1 className="font-bold text-3xl mb-1 p-4">Trending projects</h1> 
            <TopProjects />
            <br></br>            
            <h2 className="font-bold text-3xl mb-1 p-4">List of Projects</h2>
            <SortFilteringMenu />            
            <br></br>
            <ProjectList />                      
        </>
    )
}

export default MainView
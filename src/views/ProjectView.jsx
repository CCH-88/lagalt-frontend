import ProjectCard from "../components/Project/ProjectCard"
import withAuth from "../hoc/withAuth"
import MembersList from "../components/Project/MembersList"
import { useEffect, useState } from "react"
import { checkProject } from "../api/project"
import styles from "../mystyle.module.css"
import { useParams } from "react-router-dom"
import Spinner from "../components/utils/Spinner"
import { useKeycloak } from "@react-keycloak/web"

const ProjectView = () => {

    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)
    const [project, setProject] = useState(null)
    let { projectId } = useParams();
    const { keycloak } = useKeycloak()


    const getProject = async (id) => {
        setLoading(true);
        const [checkError, projectResponse] = await checkProject(id, keycloak.token)
        if (checkError !== null) {
            setApiError(checkError)
            console.log(checkError);
        }
        if (projectResponse !== null) {
            setProject(projectResponse)
            console.log(projectResponse);
        }
        setLoading(false);
    }

    useEffect(() => {
        if(keycloak.authenticated){
            getProject(projectId)
        }
    }, [keycloak.authenticated])

    return (
        <>
            {(project !== null) &&
                <>
                    <h2 className={styles.projectView}>{project.name} - {project.owner} - Date posted</h2>
                    <ProjectCard project={project} />
                    <MembersList members={project.members} />
                </>}
            <div className="w-full h-full inline-block">
                {loading && <Spinner />}
                {apiError && <p>{apiError}</p>}
            </div>
        </>

    )
}

export default ProjectView
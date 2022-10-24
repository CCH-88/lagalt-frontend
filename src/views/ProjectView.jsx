import ProjectCard from "../components/Project/ProjectCard"
import withAuth from "../hoc/withAuth"
import MembersList from "../components/Project/MembersList"
import { useEffect, useState } from "react"
import { checkProject } from "../api/project"
import styles from "../mystyle.module.css"
import { useParams } from "react-router-dom"
import Spinner from "../components/utils/Spinner"

function ProjectView() {

    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)
    const [project, setProject] = useState(null)
    let { projectId } = useParams();

    const getProject = async (id) => {
        setLoading(true)
        const [checkError, projectResponse] = await checkForProject(id)
        if (checkError !== null) {
            setApiError(checkError)
        }
        if (projectResponse !== null) {
            setProject(projectResponse)
        }
        setLoading(false)
    }

    useEffect(() => {
        getProject(projectId)
    }, [])

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

export default withAuth(ProjectView)
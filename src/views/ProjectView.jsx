import ProjectCard from "../components/Project/ProjectCard"
import withAuth from "../hoc/withAuth"
import MembersList from "../components/Project/MembersList"
import { useEffect, useState } from "react"
import { checkForProject } from "../api/project"
import styles from "../mystyle.module.css"

const ProjectView = () => {

    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)
    const [project, setProject] = useState(null)
    const getProject = async (id) => {
        setLoading(true);
        const [checkError, projectResponse] = await checkForProject(id)
        if (checkError !== null) {
            setApiError(checkError)
        }
        if (projectResponse !== null) {
            setProject(projectResponse)
        }
        setLoading(false);
    }

    useEffect(() => {
        if (project === null) {
            getProject(1)
        }
    }, [])

    return (
        <>
            {project !== null &&
                <>
                    <h2 className={styles.projectView}>{project.name} - {project.owner} - Date posted</h2>
                    <ProjectCard project={project} />
                    <MembersList project={project} />
                </>}

        </>
    )
}

export default withAuth(ProjectView)
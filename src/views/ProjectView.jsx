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

    const getProject = async (projectId) => {
        setLoading(true)
        const [checkError, projectResponse] = await checkProject(projectId)
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
                    <h2 className={styles.projectView}>{project.name} - {project.field} - {project.progress}</h2>
                    <ProjectCard project={project} key={project.id}/>
                    <MembersList members={project.projectFreelancers} />
                </>}
            <div className="w-full h-full inline-block">
                {loading && <Spinner />}
                {apiError && <p>{apiError}</p>}
            </div>
        </>

    )
}

export default ProjectView
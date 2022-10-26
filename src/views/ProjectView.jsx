import ProjectCard from "../components/Project/ProjectCard"
import withAuth from "../hoc/withAuth"
import MembersList from "../components/Project/MembersList"
import { useEffect, useState } from "react"
import { checkProject } from "../api/project"
import styles from "../mystyle.module.css"
import { useParams } from "react-router-dom"
import Spinner from "../components/utils/Spinner"
import MessageBoard from "../components/Project/MessageBoard"
import PostMessage from "../components/Project/PostMessage"
import { checkForUser } from "../api/user"

function ProjectView() {

    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)
    const [project, setProject] = useState(null)
    const [members, setMembers] = useState([])
    let { projectId } = useParams();

    const getProject = async (projectId) => {
        setLoading(true)
        const [checkError, projectResponse] = await checkProject(projectId)
        if (checkError !== null) {
            setApiError(checkError)
        }
        if (projectResponse !== null) {
            setProject(projectResponse)
            getMembers(projectResponse.projectFreelancers)
        }
        setLoading(false)
    }
    const getMembers = async (collection) => {
        setLoading(true)
        setMembers([])
        for (const member of collection) {
            const [checkError, userResponse] = await checkForUser(member.id.freelancer_id);
            if (checkError !== null) {
              setApiError(checkError);
            }
            if (userResponse !== null) {
              setMembers((friends) => [...friends, userResponse]);
            }
          }
          setLoading(false);
    }

    useEffect(() => {
        getProject(projectId)
    }, [])

    return (
        <>
            {(project !== null) &&
                <>
                    <h2 className={styles.projectView}>{project.name} - {project.field} - {project.progress}</h2>
                    <ProjectCard project={project} />
                    <MembersList members={members} />
                    <MessageBoard chat={project.chat} />
                    <PostMessage chat={project.chat} />
                </>}
            <div className="w-full h-full inline-block">
                {loading && <Spinner />}
                {apiError && <p>{apiError}</p>}
            </div>
        </>

    )
}

export default ProjectView
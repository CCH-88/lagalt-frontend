import ProjectCard from "../components/Project/ProjectCard"
import MembersList from "../components/Project/MembersList"
import { useEffect, useState } from "react"
import { checkProject } from "../api/project"
import styles from "../mystyle.module.css"
import { useParams } from "react-router-dom"
import Spinner from "../components/utils/Spinner"
import MessageBoard from "../components/Project/MessageBoard"
import PostMessage from "../components/Project/PostMessage"
import { checkForUser } from "../api/user"

//view which shows a specific project 
function ProjectView() {

    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)
    const [project, setProject] = useState(null)
    const [members, setMembers] = useState([])
    const [value, setValue] = useState(0);

    let { projectId } = useParams();

    function useForceUpdate() {
        return () => setValue(value => value + 1);
    }
    const forceUpdate = useForceUpdate();

    //fetches the project 
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

    //fetches the members of a project
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

    const sortMessages = (chat) => {
        chat.sort(function (a, b) {
            return new Date(a.dateTime) - new Date(b.dateTime)
        })
        return chat
    }

    useEffect(() => {
        getProject(projectId)
    }, [value])

    return (
        <>
            {(project !== null) &&
                <>
                    <h2 className={styles.projectView}>{project.name} - {project.field} - {project.progress}</h2>
                    <ProjectCard project={project} />
                    <MembersList members={members} />
                    <div className="inline-block mx-4 my-4 -mb-1">
                        <button className={styles.memberCardButton} onClick={forceUpdate}>
                            Update chat
                        </button>
                    </div>
                    <MessageBoard chat={sortMessages(project.chat.messages)} />
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
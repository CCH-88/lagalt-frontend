import ProjectCard from "../components/Project/ProjectCard";
import MembersList from "../components/Project/MembersList";
import { useEffect, useState } from "react";
import { checkProject, joinProject } from "../api/project";
import styles from "../mystyle.module.css";
import { useParams } from "react-router-dom";
import Spinner from "../components/utils/Spinner";
import MessageBoard from "../components/Project/MessageBoard";
import PostMessage from "../components/Project/PostMessage";
import { checkForUser } from "../api/user";
import OwnerField from "../components/Project/OwnerField";
import { useKeycloak } from "@react-keycloak/web/lib";

//view which shows a specific project
function ProjectView() {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [project, setProject] = useState(null);
  const [members, setMembers] = useState([]);
  const [value, setValue] = useState(0);
  const [owner, setOwner] = useState(null);
  const { keycloak } = useKeycloak();

  let { projectId } = useParams();

  function useForceUpdate() {
    return () => setValue((value) => value + 1);
  }
  const forceUpdate = useForceUpdate();

  //fetches the project
  const getProject = async (projectId) => {
    setLoading(true);
    const [checkError, projectResponse] = await checkProject(projectId);
    if (checkError !== null) {
      setApiError(checkError);
    }
    if (projectResponse !== null) {
      setProject(projectResponse);
      getMembers(projectResponse.projectFreelancers);
      getOwner(projectResponse.ownerId);
    }
    setLoading(false);
  };

  //fetches the members of a project
  const getMembers = async (collection) => {
    setLoading(true);
    setMembers([]);
    for (const member of collection) {
      const [checkError, userResponse] = await checkForUser(
        member.id.freelancer_id
      );
      if (checkError !== null) {
        setApiError(checkError);
      }
      if (userResponse !== null) {
        setMembers((friends) => [...friends, userResponse]);
      }
    }
    setLoading(false);
  };

  const getOwner = async (id) => {
    setLoading(true);
    const [checkError, ownerResponse] = await checkForUser(id);
    if (checkError !== null) {
      setApiError(checkError);
    }
    if (ownerResponse !== null) {
      setOwner(ownerResponse);
    }
    setLoading(false);
  };

  const tryJoinProject = async () => {
    setLoading(true);
    console.log("Trying to join project");
    const [checkError, projectResponse] = await joinProject(
      projectId,
      keycloak.subject,
      keycloak.token
    );
    if (checkError !== null) {
      setApiError(checkError);
      console.log(checkError);
    }
    if (projectResponse !== null) {
      getProject(projectId);
      console.log(projectResponse);
    }
    setLoading(false);
  };
  /*
  const tryJoinProject = async () => {
    setLoading(true);
    console.log("Trying to join project");
    const [userError, userResponse] = await checkForUser(keycloak.subject);
    if (userError !== null) {
      setApiError(userError);
    }
    if (userResponse !== null) {
      const [checkError, projectResponse] = await joinProject(
        projectId,
        userResponse,
        keycloak.token
      );
      if (checkError !== null) {
        setApiError(checkError);
        console.log(checkError);
      }
      if (projectResponse !== null) {
        getProject(projectId);
        console.log(projectResponse);
      }
    }
    setLoading(false);
  };
*/
  const sortMessages = (chat) => {
    chat.sort(function (a, b) {
      return new Date(a.dateTime) - new Date(b.dateTime);
    });
    return chat;
  };

  useEffect(() => {
    getProject(projectId);
  }, [value]);

  return (
    <>
      {project !== null && (
        <>
          <h2 className={styles.projectView}>
            {project.name} - {project.field} - {project.progress}
          </h2>
          <ProjectCard project={project} />
          <OwnerField owner={owner} />
          <MembersList members={members} />
          <MessageBoard chat={sortMessages(project.chat.messages)} />
          <PostMessage chat={project.chat} />
          <div className={styles.projectCard}>
            <button
              className="bg-gray-200 hover:bg-gray-300 duration-300 rounded-full px-4 py-2 my-2 font-light text-sm mx-auto"
              onClick={forceUpdate}
            >
              Update chat
            </button>
            <button
              className="bg-gray-200 hover:bg-gray-300 duration-300 rounded-full px-4 py-2 my-2 font-light text-sm mx-auto"
              onClick={tryJoinProject}
            >
              Join project
            </button>
          </div>
        </>
      )}

      <div className="w-full h-full inline-block">
        {loading && <Spinner />}
        {apiError && <p>{apiError}</p>}
      </div>
    </>
  );
}

export default ProjectView;

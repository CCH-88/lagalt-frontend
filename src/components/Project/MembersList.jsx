import styles from "../../mystyle.module.css"
import ProjectCard from "./ProjectCard"

const MembersList = ({ project }) => {
    <div className={styles.membersList}>
        <ProjectCard project={project} />
    </div>
}

export default MembersList
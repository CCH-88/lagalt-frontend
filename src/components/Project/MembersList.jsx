import styles from "../../mystyle.module.css"
import MemberCard from "./MemberCard"

const MembersList = ({ project }) => {
    <div className={styles.membersList}>
        <p>Hello</p>
        <MemberCard project={project} />
    </div>
}

export default MembersList;
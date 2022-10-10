import styles from "../../mystyle.module.css"

const MembersCard = ({ project }) => {
    return (
        <div className={styles.membersCard}>
            <p>{project.members}</p>
        </div>
    )
}

export default MembersCard
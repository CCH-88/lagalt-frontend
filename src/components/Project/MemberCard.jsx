import styles from "../../mystyle.module.css"

const MemberCard = ({ project }) => {
    return (
        <div className={styles.memberCard}>
            <h1>hi</h1>
            <p>{project.id}</p>
        </div>
    )
}

export default MemberCard
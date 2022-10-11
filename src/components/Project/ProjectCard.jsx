import styles from '../../mystyle.module.css'

const ProjectCard = ({ project }) => {
    return (
        <div className={styles.projectCard}>
            <p>{project.name}</p>
            <p>{project.description}</p>
        </div>
    )
}

export default ProjectCard;
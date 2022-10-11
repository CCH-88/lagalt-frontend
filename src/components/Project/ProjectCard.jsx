import styles from '../../mystyle.module.css'

const ProjectCard = ({ project }) => {
    return (
        <p className={styles.projectCard}>
            <p>{project.name}</p>
            <p>{project.description}</p>
        </p>
    )
}

export default ProjectCard;
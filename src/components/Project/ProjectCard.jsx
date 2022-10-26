import styles from '../../mystyle.module.css'

//takes a project and displays its name and description
const ProjectCard = ({ project }) => {
    return (
        <div className={styles.projectCard}>
            <h1 className={styles.projectCard}>{project.name}</h1>
            <section className={styles.projectCard}>
                {/* {imageList} */}
                {project.description}
            </section>
        </div>
    )
}

export default ProjectCard;
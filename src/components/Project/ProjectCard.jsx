import styles from '../../mystyle.module.css'
import ImageCycle from './ImageCycle';

const ProjectCard = ({ project }) => {
    // const imageList = project.images.map(
    //     (image, index) => <ImageCycle key={index} image={image} />
    // )

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
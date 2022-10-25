import { Link } from 'react-router-dom';
import styles from '../../mystyle.module.css'

const ProfileProjectCard = ({ project }) => {

    return (
        <div className="flex mx-2 my-5">
            <Link className="bg-gray-200 hover:bg-gray-300 duration-300 rounded-sm px-4 py-2 font-light text-sm mx-auto w-full h-20" to={`/project/${project.id.project_id}`}>
                <p>{project.id.project_id}</p>
                <p>{project.role}</p>
            </Link>
        </div>
    )
}

export default ProfileProjectCard;
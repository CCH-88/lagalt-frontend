import { Link } from "react-router-dom"
import styles from "../../mystyle.module.css"

//takes a single member of a project and displays their name and a link to their profile 
const MemberCard = ({ member }) => {
    return (
        <ul className={styles.memberCard}>
            <p className="inline-block">{member.username}</p>
            <Link to={`/profile/${member.id}`} key={member.name} className={styles.memberCardButton}>Go to profile</Link>
        </ul>
    )
}

export default MemberCard

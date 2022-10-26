import styles from "../../mystyle.module.css"
import MemberCard from "./MemberCard"

//takes in the members of a project and displays them 
const MembersList = ({ members }) => {
    if(members === undefined){
        return
    }
    const membersList = members.map(
        (member, index) => <MemberCard key={index} member={member} />)

    return (
        <div className={styles.membersList}>
            <h2 className={styles.membersList}>Members</h2>
            <ul className={styles.membersList}>{membersList}</ul>
        </div>

    )
}

export default MembersList;
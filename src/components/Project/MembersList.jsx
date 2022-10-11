import styles from "../../mystyle.module.css"
import MemberCard from "./MemberCard"

const MembersList = ({ members }) => {
    return (
        <>
            <section className={styles.membersList}>
                <h2 className={styles.membersList}>Members</h2>
                <li><MemberCard members={members} /></li>
            </section>
        </>

    )
}

export default MembersList;
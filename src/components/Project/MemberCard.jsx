import styles from "../../mystyle.module.css"

const MemberCard = ({ member }) => {



    return (
        <ul className={styles.memberCard}>
            {member.name}
            <button className={styles.memberCardButton}>Go to profile</button>
        </ul>

    )
}

export default MemberCard
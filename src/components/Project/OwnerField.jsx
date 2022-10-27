import styles from "../../mystyle.module.css";
import MemberCard from "./MemberCard";

//takes in the members of a project and displays them
const OwnerField = ({ owner }) => {
  if (owner === null) {
    return;
  }

  return (
    <div className={styles.membersList}>
      <h2 className={styles.membersList}>Owner</h2>
      <MemberCard key={owner} member={owner} />
    </div>
  );
};

export default OwnerField;

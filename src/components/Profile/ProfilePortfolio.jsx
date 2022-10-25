import styles from "../../mystyle.module.css";
import ProfileProjectCard from "./ProfileProjectCard";

const ProfilePortfolio = ({ user }) => {
  return (
    <div className={styles.profilePortfolio}>
      <p className="text-2xl text-slate-600 m-5">Portfolio</p>
      {user.projectFreelancers && (
        <ul className="">
          {user.projectFreelancers.map((project) => (
              <ProfileProjectCard project={project} key={project.id.project_id}>
            </ProfileProjectCard>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProfilePortfolio;

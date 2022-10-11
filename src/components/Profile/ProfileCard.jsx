import styles from "../../mystyle.module.css";

const ProfileCard = ({ user }) => {
  return (
    <div className={styles.profileCard}>
      <p className="text-2xl text-slate-600 m-5">{user.name}</p>
      <p className="text-xl text-slate-600 m-5">{user.email}</p>

      {user.skills && (
        <ul className="flex">
          {user.skills.map((txt) => (
            <li
              key={txt}
              className="bg-gray-200 hover:bg-gray-300 duration-300 rounded-full px-4 py-2 font-light text-sm mx-auto"
            >
              {txt}
            </li>
          ))}
        </ul>
      )}
      <p className="text-2xl text-slate-600 m-5">Description</p>
      <p className="text-l text-slate-600 m-5">{user.description}</p>

      {user.hidden && <p>Hidden profile</p>}
      {!user.hidden && <p>Not hidden profile</p>}
    </div>
  );
};
export default ProfileCard;

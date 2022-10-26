import { Link } from "react-router-dom";
import styles from "../../mystyle.module.css";

const ProfileCard = ({ user, friends }) => {
  return (
    <div className={styles.profileCard}>
      <p className="text-2xl text-slate-600 m-5">{user.username}</p>
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

      {friends.length > 0 && (
        <ul className="flex mx-2 my-2">
          {friends.map((txt) => (
            <Link
              to={`/profile/${txt.id}`}
              key={txt.name}
              className="bg-gray-200 hover:bg-gray-300 duration-300 rounded-full px-4 py-2 font-light text-sm mx-auto"
            >
              {txt.name}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
export default ProfileCard;

import styles from "../../mystyle.module.css";

const ProfilePortfolio = ({ user }) => {
  return (
    <div className={styles.profilePortfolio}>
      <p className="text-2xl text-slate-600 m-5">Portfolio</p>
      {user.portfolio && (
        <ul className="flex">
          {user.portfolio.map((txt) => (
            <li
              key={txt}
              className="bg-gray-200 hover:bg-gray-300 duration-300 rounded-full px-4 py-2 font-light text-sm mx-auto"
            >
              {txt}
            </li>
          ))}
        </ul>
      )}
      {user.hidden && <p>Hidden profile</p>}
      {!user.hidden && <p>Not hidden profile</p>}
    </div>
  );
};

export default ProfilePortfolio;

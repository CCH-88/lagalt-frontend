import styles from '../../mystyle.module.css'

const ProfileCard = ({ user }) => {
    return (
        <div className={styles.profileCard}>
            <p className='text-2xl text-slate-600 m-5'>{user.name}</p>
            <p className='text-xl text-slate-600 m-5'>{user.email}</p>
            {user.hidden && <p>Hidden profile</p>}
            {!user.hidden && <p>Not hidden profile</p>}

            <p>{user.skills}</p>
            <p>{user.portfolio}</p>
            <p>{user.freelancerhistory}</p>
            <p>{user.mock}</p>
        </div>
    )
}
export default ProfileCard
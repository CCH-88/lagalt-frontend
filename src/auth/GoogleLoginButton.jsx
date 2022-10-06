import { GoogleLogin, GoogleLogout} from 'react-google-login';
import { gapi } from 'gapi-script';
import { useState } from 'react';
import styles from '../mystyle.module.css'
import { STORAGE_KEY_TOKEN } from "../const/storageKeys";
import { storageDelete, storageSave } from '../utils/storage';
import { NavLink, useNavigate } from "react-router-dom"
import { useUser } from '../context/UserContext';


function GoogleLoginButton() {
    const {user, setUser} = useUser()
    const clientId = '141431554013-7gv41pk9m7j3lh6mv61t67gbkmo68tad.apps.googleusercontent.com';
    const navigate = useNavigate()
    var auth2;

    gapi.load('auth2', function(){
        auth2 = gapi.auth2.init({
            client_id: clientId
        });    
    });  

    const onSuccess = (res) => {
        setUser(res.profileObj);
        storageSave(STORAGE_KEY_TOKEN, res.tokenObj.access_token)
        console.log(res);
    };
    
    const onFailure = (err) => {
        console.log('failed', err);
    };

    const logOut = () => {
        setUser(null);
        storageDelete(STORAGE_KEY_TOKEN)
    };

    return (
        <div className="px-2 mx-3 float-right">
            {user ? (
                <div className='flex'>
                    <div>
                        <NavLink to='/profile' className={styles.profileButton}>
                            <div className={styles.profileButtonLogo}>
                                <img src='../../public/profile.svg' />
                            </div>
                            <span className={styles.profileButtonText}>
                                Profile
                            </span>
                        </NavLink>
                    </div>
                    <GoogleLogout className="h-10" clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
                </div>
            ) : (
                <GoogleLogin className="h-10"
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            )}
        </div>
    );
}
export default GoogleLoginButton;



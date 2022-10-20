import { Navigate } from 'react-router-dom'
import { STORAGE_KEY_TOKEN } from '../const/storageKeys'
import { useUser } from '../context/UserContext'
import { useKeycloak } from '@react-keycloak/web'

const withAuth = (Component) => (props) => {
	const { user } = useUser()
	const { keycloak } = useKeycloak()

  console.log(keycloak)

	if (keycloak.authenticated) {
    console.log(keycloak)
		return <Component {...props} />
	} else {
		return <Navigate to="/" />
	}

}
export default withAuth

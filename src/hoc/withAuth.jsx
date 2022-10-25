import { Navigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { useKeycloak } from '@react-keycloak/web'

const withAuth = (Component) => (props) => {
	const { user } = useUser()
	const { initialized, keycloak } = useKeycloak()

	if (keycloak.authenticated && initialized) {
		console.log("succes");
		return <Component {...props} />
	} else {
		console.log("exiting");
		return <Navigate to="/" />
	}

}
export default withAuth

import { Navigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { useKeycloak } from '@react-keycloak/web'

const withAuth = (Component) => (props) => {
	const { user } = useUser()

	const { initialized, keycloak } = useKeycloak()

	if(initialized) {
		console.log(keycloak)
	}
	if(!initialized) {
		console.log(keycloak.subject)
		return <h3>Laoding</h3>
	}


	if (keycloak.authenticated) {
		return <Component {...props} />
	} else {
		return <Navigate to="/" />
	}

}
export default withAuth

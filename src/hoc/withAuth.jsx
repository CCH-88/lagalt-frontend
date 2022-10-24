import { Navigate } from 'react-router-dom'
import { STORAGE_KEY_TOKEN } from '../const/storageKeys'
import { useUser } from '../context/UserContext'
import { useKeycloak } from '@react-keycloak/web'
import { useEffect } from 'react'

const withAuth = (Component) => (props) => {
	const { user } = useUser()

		const { initialized, keycloak } = useKeycloak()

	if (keycloak.authenticated && initialized) {
		return <Component {...props} />
	} else {
		return <Navigate to="/" />
	}

}
export default withAuth

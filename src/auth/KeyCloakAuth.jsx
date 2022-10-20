import { useKeycloak } from '@react-keycloak/web'
import {  useNavigate } from 'react-router-dom'

export const AuthButton = () => {
	const { keycloak } = useKeycloak()

	return (
		<>
			{!keycloak.authenticated && (
				<button type="button" className="text-blue-800" onClick={() => keycloak.login()}>
					Login
				</button>
			)}

			{!!keycloak.authenticated && (
				<button type="button" className="text-blue-800" onClick={() => keycloak.logout()}>
					Logout ({keycloak.tokenParsed.preferred_username})
				</button>
			)}
		</>
	)
}

export const privateRoute = ({children}) => {
  const navigate = useNavigate();

  const {keycloak} = useKeycloak()
  const isLoggedIn = keycloak.authenticated

  return isLoggedIn ? children :  navigate(import.meta.env.VITE_keycloak_base_url+process.env.keycloak-realm)
}




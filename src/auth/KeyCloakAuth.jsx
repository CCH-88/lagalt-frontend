import { useKeycloak } from '@react-keycloak/web'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

export const AuthButton = () => {
	const { keycloak } = useKeycloak()

	return (
		<>
			{!keycloak.authenticated && (
				<div className="flex justify-center items-center content-center gap-x-2">
					<button type="button" title="Login" className="base-btn border-primary-blue text-primary-blue  hover:text-primary-blue/70 hover:border-primary-blue/70 " onClick={() => keycloak.login()}>
						Login
					</button>
					<button type="button" title="Signup" className="base-btn bg-primary-blue text-white hover:bg-primary-blue/70" onClick={() => keycloak.register()}>
						Signup
					</button>
				</div>
			)}

			{!!keycloak.authenticated && (
				<button type="button" className="text-blue-800" onClick={() => keycloak.logout()}>
					Logout ({keycloak.tokenParsed.preferred_username})
				</button>
			)}
		</>
	)
}

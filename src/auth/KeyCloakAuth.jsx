import { useKeycloak } from '@react-keycloak/web'

/* <Suspense fallback={<h2>Loading...</h2>}>
				<Navbar />
			</Suspense> */

/* function delayForDemo(promise) {
	return new Promise((resolve) => {
		setTimeout(resolve, 2000)
	}).then(() => promise)
}

const Navbar = lazy(() => delayForDemo(import('./NavBar/Navbar')))
 */
export const AuthButton = () => {
	const { keycloak, initialized } = useKeycloak()

	return (
		<>
			{!keycloak.authenticated && (
				<div className="flex justify-center items-center content-center gap-x-2">
					<button
						type="button"
						title="Login"
						className="base-btn border-primary-blue text-primary-blue  hover:text-primary-blue/70 hover:border-primary-blue/70 "
						onClick={() => keycloak.login({ redirectUri: `${import.meta.env.VITE_keycloak_frontend_url}${location.pathname}` })}>
						Login
					</button>
					<button
						type="button"
						title="Signup"
						className="base-btn bg-primary-blue text-white hover:bg-primary-blue/70"
						onClick={() => keycloak.register({ redirectUri: `${import.meta.env.VITE_keycloak_frontend_url}/profile` })}>
						Signup
					</button>
				</div>
			)}

			{keycloak.authenticated && (
				<button type="button" className="text-blue-800" onClick={() => keycloak.logout()}>
					Logout ({keycloak.tokenParsed.preferred_username})
				</button>
			)}
		</>
	)
}
